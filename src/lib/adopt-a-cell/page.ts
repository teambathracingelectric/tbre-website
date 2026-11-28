// Client behaviour for /crowdfunding (adopt a cell): loads who owns which cell, then keeps the
// progress meter, the 2D cell map, the supporters table and the 3D view in step.
import type { State } from "./allocate.ts";
import cellsData from "./cells.json";
import type { Stage } from "./stage.ts";

const STATE_URL = "/api/adopt-a-cell/state";
const DEMO_URL = "/adopt-a-cell/demo-state.json";
const ASSETS = "/adopt-a-cell";
const REFRESH_MS = 60_000;

const cellId = (i: number) => cellsData.cells[i].id;
const cellPlace = (i: number) => `Module ${cellsData.cells[i].m + 1}`;
const gbp = (pence: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: pence % 100 ? 2 : 0,
  }).format(pence / 100);

/** Wires up the page. Returns a function that undoes everything (for client-side navigation). */
export function initAdoptACell(root: HTMLElement): () => void {
  const find = <T extends Element>(selector: string) => {
    const el = root.querySelector<T>(selector);
    if (!el) throw new Error(`adopt-a-cell: missing ${selector}`);
    return el;
  };
  const life = new AbortController();
  const signal = life.signal;
  // ?demo shows example supporters, for previews before Ko-fi is connected.
  const demo = new URLSearchParams(location.search).has("demo");

  let state: State | null = null;
  let selected: number | null = null; // index into state.donors
  let sort: "cells" | "latest" = "cells";
  let stage: Stage | null = null;

  const ownerIndex = (cell: number) =>
    state && cell < state.owners.length ? state.owners[cell] : -1;

  function describe(tip: HTMLElement, cell: number) {
    const owner = state?.donors[ownerIndex(cell)];
    const name = document.createElement("b");
    name.textContent = owner ? owner.name : "Available";
    const where = document.createElement("span");
    where.textContent = `${cellPlace(cell)}, cell ${cellId(cell)}`;
    tip.replaceChildren(name, where);
  }

  // The stage sticks below the site header, whatever height that is.
  const stageEl = find<HTMLElement>("[data-stage]");
  const header = document.querySelector<HTMLElement>("body > header");
  const syncTop = () =>
    root.style.setProperty("--aac-top", `${header?.offsetHeight ?? 0}px`);
  const headerWatch = new ResizeObserver(syncTop);
  if (header) headerWatch.observe(header);
  syncTop();

  // ---- progress meter ----
  const meter = find<HTMLElement>("[data-meter]");
  function renderMeter() {
    if (!state) return;
    const total = state.goal.cells;
    const { cells, donors, amountPence } = state.totals;
    find("[data-cells]").textContent = String(cells);
    find("[data-raised]").textContent =
      `${gbp(amountPence)} raised by ${donors} supporter${donors === 1 ? "" : "s"}`;
    find<HTMLElement>("[data-fill]").style.width =
      `${Math.min(100, (cells / total) * 100)}%`;
    meter
      .querySelector("[role=progressbar]")
      ?.setAttribute("aria-valuenow", String(cells));
  }

  // ---- 2D map ----
  const map = find<SVGSVGElement>("[data-map]");
  const mapTip = find<HTMLElement>("[data-map-tip]");
  const circles = [...map.querySelectorAll<SVGCircleElement>(".aac-cell")];
  function renderMap() {
    map.classList.toggle("has-sel", selected !== null);
    for (const circle of circles) {
      const owner = ownerIndex(Number(circle.dataset.i));
      circle.classList.toggle("taken", owner >= 0);
      circle.classList.toggle("sel", selected !== null && owner === selected);
    }
  }
  const cellAt = (event: Event) =>
    (event.target as Element).closest<SVGCircleElement>(".aac-cell");
  map.addEventListener(
    "pointermove",
    (event) => {
      const circle = cellAt(event);
      const frame = map.parentElement;
      if (!circle || !frame) {
        mapTip.hidden = true;
        return;
      }
      describe(mapTip, Number(circle.dataset.i));
      const box = frame.getBoundingClientRect();
      const rect = circle.getBoundingClientRect();
      mapTip.style.left = `${rect.left + rect.width / 2 - box.left}px`;
      mapTip.style.top = `${rect.top - box.top}px`;
      mapTip.hidden = false;
    },
    { signal },
  );
  map.addEventListener(
    "pointerleave",
    () => {
      mapTip.hidden = true;
    },
    { signal },
  );
  map.addEventListener(
    "click",
    (event) => {
      const circle = cellAt(event);
      const owner = circle ? ownerIndex(Number(circle.dataset.i)) : -1;
      select(owner >= 0 ? owner : null, true);
    },
    { signal },
  );

  // ---- supporters table ----
  const body = find<HTMLTableSectionElement>("[data-board]");
  const empty = find<HTMLElement>("[data-board-empty]");
  const foot = find<HTMLElement>("[data-board-foot]");
  function renderBoard() {
    if (!state) return;
    const rows = state.donors.map((donor, index) => ({ donor, index }));
    if (sort === "latest") {
      rows.sort((a, b) => b.donor.latest.localeCompare(a.donor.latest));
    }
    const cell = (className: string, child: Node) => {
      const td = document.createElement("td");
      td.className = className;
      td.append(child);
      return td;
    };
    const text = (value: string) => {
      const span = document.createElement("span");
      span.textContent = value;
      return span;
    };
    body.replaceChildren(
      ...rows.map(({ donor, index }, position) => {
        const tr = document.createElement("tr");
        tr.dataset.donor = String(index);
        tr.classList.toggle("sel", index === selected);
        tr.classList.toggle("anon", donor.name === "Anonymous");
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = donor.name; // textContent: names are untrusted input
        button.title = "Show these cells on the map";
        button.setAttribute("aria-pressed", String(index === selected));
        tr.append(
          cell("num", text(String(position + 1))),
          cell("", button),
          cell("num", text(String(donor.cells))),
          cell("num", text(gbp(donor.amountPence))),
        );
        return tr;
      }),
    );
    empty.hidden = state.donors.length > 0;
    const left = state.goal.cells - state.totals.cells;
    foot.textContent =
      left > 0 ? `${left} cells to go.` : "Goal reached. Thank you.";
  }
  body.addEventListener(
    "click",
    (event) => {
      const row = (event.target as Element).closest<HTMLTableRowElement>("tr");
      if (row) select(Number(row.dataset.donor));
    },
    { signal },
  );
  const sortButtons = [
    ...root.querySelectorAll<HTMLButtonElement>("[data-sort]"),
  ];
  for (const button of sortButtons) {
    button.addEventListener(
      "click",
      () => {
        sort = button.dataset.sort === "latest" ? "latest" : "cells";
        for (const other of sortButtons) {
          other.setAttribute("aria-pressed", String(other === button));
        }
        renderBoard();
      },
      { signal },
    );
  }

  function select(donor: number | null, scrollRow = false) {
    selected = donor === selected ? null : donor;
    renderMap();
    renderBoard();
    stage?.setSelected(selected);
    if (scrollRow && selected !== null) {
      body
        .querySelector(`tr[data-donor="${selected}"]`)
        ?.scrollIntoView({ block: "nearest" });
    }
  }

  // ---- data ----
  async function load() {
    try {
      const response = await fetch(demo ? DEMO_URL : STATE_URL, { signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const next = (await response.json()) as State;
      if (state && next.updated === state.updated) return;
      const keep = selected !== null ? state?.donors[selected]?.name : null;
      state = next;
      const again = keep ? state.donors.findIndex((d) => d.name === keep) : -1;
      selected = again >= 0 ? again : null;
      renderMeter();
      renderMap();
      renderBoard();
      stage?.setState(state);
      stage?.setSelected(selected);
    } catch (error) {
      if (signal.aborted) return;
      console.warn("adopt-a-cell: could not load supporters", error);
      if (!state) {
        foot.textContent =
          "Couldn’t load the supporter list. Refresh to try again.";
      }
    }
  }
  find<HTMLElement>("[data-demo-note]").hidden = !demo;
  void load();
  const timer = demo
    ? 0
    : window.setInterval(() => {
        if (document.visibilityState === "visible") void load();
      }, REFRESH_MS);

  // ---- 3D view: everything above works without it ----
  // Start both big downloads (three.js and the 1.8 MB model) now and side by side. Fetched one
  // after the other, a phone on mobile data could scroll past every chapter before the pack showed.
  const stageModule = import("./stage.ts");
  const model = fetch(`${ASSETS}/pack.glb`, { signal }).then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.arrayBuffer();
  });
  // startStage reports these failures; this only stops unhandled rejections if it never runs.
  model.catch(() => {});
  stageModule.catch(() => {});
  const startStage = async () => {
    try {
      const { createStage } = await stageModule;
      if (signal.aborted) return;
      stage = createStage({
        section: stageEl,
        canvas: find<HTMLCanvasElement>("[data-canvas]"),
        tip: find<HTMLElement>("[data-stage-tip]"),
        model,
        describe,
        onPick: (cell) => {
          const owner = ownerIndex(cell);
          select(owner >= 0 ? owner : null);
        },
      });
      if (state) stage.setState(state);
      stage.setSelected(selected);
    } catch (error) {
      // No WebGL: show a still of the pack instead.
      console.warn("adopt-a-cell: 3D view unavailable", error);
      stageEl.classList.add("no-webgl");
    }
  };
  const idle = window.setTimeout(startStage, 150);

  return () => {
    life.abort();
    headerWatch.disconnect();
    window.clearInterval(timer);
    window.clearTimeout(idle);
    stage?.dispose();
    stage = null;
  };
}
