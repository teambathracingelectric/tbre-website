import { animate, inView, stagger } from "motion";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const REVEAL_DISTANCE = 16;
const STAGGER = 0.08;

/**
 * Whether the visitor has asked the OS to minimise motion. When true we skip
 * every animation and simply make sure content ends up visible.
 */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function reveal(element: HTMLElement): void {
  element.style.opacity = "1";
  element.style.transform = "none";
}

/**
 * Fade/slide elements into view.
 *
 * - `[data-reveal]` animates when it scrolls into view (optional
 *   `data-reveal-delay` in seconds).
 * - `[data-reveal-group]` staggers its `[data-reveal-item]` children. Add
 *   `data-reveal-on="load"` to play immediately (e.g. above-the-fold heroes).
 */
export function initReveals(root: ParentNode = document): void {
  const reduce = prefersReducedMotion();
  const played = new WeakSet<Element>();

  for (const element of root.querySelectorAll<HTMLElement>("[data-reveal]")) {
    if (reduce) {
      reveal(element);
      continue;
    }
    const delay = Number(element.dataset.revealDelay ?? 0);
    inView(
      element,
      () => {
        if (played.has(element)) return;
        played.add(element);
        animate(
          element,
          { opacity: [0, 1], y: [REVEAL_DISTANCE, 0] },
          { duration: 0.6, delay, ease: EASE_OUT },
        );
      },
      { amount: 0.2 },
    );
  }

  for (const group of root.querySelectorAll<HTMLElement>(
    "[data-reveal-group]",
  )) {
    const items = Array.from(
      group.querySelectorAll<HTMLElement>("[data-reveal-item]"),
    );
    if (items.length === 0) continue;
    if (reduce) {
      for (const item of items) reveal(item);
      continue;
    }

    // Cap the total stagger window so large grids (e.g. the gallery) don't
    // take seconds to finish revealing.
    const step = Math.min(STAGGER, 0.6 / items.length);
    const play = () => {
      if (played.has(group)) return;
      played.add(group);
      animate(
        items,
        { opacity: [0, 1], y: [REVEAL_DISTANCE, 0] },
        { duration: 0.5, delay: stagger(step), ease: EASE_OUT },
      );
    };

    if (group.dataset.revealOn === "load") {
      play();
    } else {
      inView(group, play, { amount: 0.2 });
    }
  }
}

/**
 * Count `[data-count-up]` elements from 0 up to their numeric target when they
 * scroll into view, preserving an optional `data-count-suffix` (e.g. "+", "%").
 */
export function initCountUps(root: ParentNode = document): void {
  const reduce = prefersReducedMotion();
  const played = new WeakSet<Element>();

  for (const element of root.querySelectorAll<HTMLElement>("[data-count-up]")) {
    const target = Number(element.dataset.countUp ?? 0);
    const suffix = element.dataset.countSuffix ?? "";

    if (reduce || !Number.isFinite(target)) {
      element.textContent = `${target}${suffix}`;
      continue;
    }

    element.textContent = `0${suffix}`;
    inView(
      element,
      () => {
        if (played.has(element)) return;
        played.add(element);
        animate(0, target, {
          duration: 1.4,
          ease: EASE_OUT,
          onUpdate: (value) => {
            element.textContent = `${Math.round(value)}${suffix}`;
          },
        });
      },
      { amount: 0.5 },
    );
  }
}

/**
 * Spring-based hover lift for `[data-hover]` elements, delegated from a single
 * pair of document listeners so it scales to any number of cards/buttons.
 */
export function initHovers(): void {
  if (prefersReducedMotion()) return;

  const spring = { type: "spring", stiffness: 300, damping: 22 } as const;

  document.addEventListener("pointerover", (event) => {
    const target = (event.target as Element | null)?.closest<HTMLElement>(
      "[data-hover]",
    );
    if (!target || target.contains(event.relatedTarget as Node | null)) return;
    animate(target, { y: -4, scale: 1.02 }, spring);
  });

  document.addEventListener("pointerout", (event) => {
    const target = (event.target as Element | null)?.closest<HTMLElement>(
      "[data-hover]",
    );
    if (!target || target.contains(event.relatedTarget as Node | null)) return;
    animate(target, { y: 0, scale: 1 }, spring);
  });
}
