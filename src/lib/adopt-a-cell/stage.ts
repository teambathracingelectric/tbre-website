// Scroll-driven exploded view of the accumulator. The housing, PDU, busbars etc. come from the
// CAD export (public/adopt-a-cell/pack.glb); the cells are instanced here so each can be coloured and picked.
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import type { State } from "./allocate.ts";
import cellsData from "./cells.json";

export interface Stage {
  setState(s: State): void;
  setSelected(donor: number | null): void;
  dispose(): void;
}
interface Opts {
  section: HTMLElement;
  canvas: HTMLCanvasElement;
  tip: HTMLElement;
  modelUrl: string;
  describe(tip: HTMLElement, cell: number): void;
  onPick(cell: number): void;
}

const MM = 0.001;
const C_FREE = new THREE.Color("#5b6878");
const C_TAKEN = new THREE.Color("#ffc423");
const C_SEL = new THREE.Color("#ff7a2e");
const C_DIM = new THREE.Color("#8a6d1c");
const C_HOVER = new THREE.Color("#ffffff");
const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const ease = (v: number) => v * v * (3 - 2 * v);
const seg = (p: number, a: number, b: number) =>
  ease(clamp01((p - a) / (b - a)));

// Camera keyframes over scroll progress: [progress, azimuth°, elevation°, distance]
const KEYS = [
  [0, -36, 22, 1.55],
  [0.25, -26, 32, 2.0],
  [0.5, 26, 38, 2.1],
  [0.75, 40, 24, 2.1],
  [1, 0, 3, 1.95],
];

export function createStage(o: Opts): Stage {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const renderer = new THREE.WebGLRenderer({
    canvas: o.canvas,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#06182e");
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.75;
  const key = new THREE.DirectionalLight("#ffffff", 2.2);
  key.position.set(1.5, 2.5, 2);
  scene.add(key, new THREE.HemisphereLight("#bcd4ff", "#0a1a30", 0.6));
  const camera = new THREE.PerspectiveCamera(30, 1, 0.05, 20);

  // CAD is Z-up in metres; three is Y-up. Centre on the middle of the modules.
  const pack = new THREE.Group();
  pack.rotation.x = -Math.PI / 2;
  const [cx, cy, cz] = cellsData.centre;
  pack.position.set(-cx * MM, -cz * MM, cy * MM);
  scene.add(pack);

  // ---- cells ----
  const [dia, len] = cellsData.cellSize;
  const cellGeo = new THREE.CylinderGeometry(
    (dia / 2) * MM,
    (dia / 2) * MM,
    len * MM,
    20,
  );
  const cellMat = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    metalness: 0.55,
    roughness: 0.38,
  });
  cellMat.onBeforeCompile = (sh) => {
    // Warm instance colours (adopted cells) glow; grey ones don't.
    sh.fragmentShader = sh.fragmentShader.replace(
      "#include <emissivemap_fragment>",
      "#include <emissivemap_fragment>\n#ifdef USE_INSTANCING_COLOR\n totalEmissiveRadiance += vColor.rgb * max(vColor.r - vColor.b, 0.0) * 0.55;\n#endif",
    );
  };
  const moduleCount = Math.max(...cellsData.cells.map((c) => c.m)) + 1;
  const dummy = new THREE.Object3D();
  const cellMeshes: THREE.InstancedMesh[] = [];
  const cellBase: number[] = []; // first global cell index per mesh
  const moduleGroups: THREE.Group[] = [];
  const moduleY: number[] = []; // each module's centre across the pack, m
  for (let m = 0; m < moduleCount; m++) {
    const cs = cellsData.cells
      .map((c, i) => ({ c, i }))
      .filter((x) => x.c.m === m);
    const mesh = new THREE.InstancedMesh(cellGeo, cellMat, cs.length);
    cs.forEach(({ c }, k) => {
      dummy.position.set(c.p[0] * MM, c.p[1] * MM, c.p[2] * MM);
      dummy.updateMatrix();
      mesh.setMatrixAt(k, dummy.matrix);
      mesh.setColorAt(k, C_FREE);
    });
    cellBase.push(cs[0].i);
    cellMeshes.push(mesh);
    moduleY.push((cs.reduce((a, x) => a + x.c.p[1], 0) / cs.length) * MM);
    const g = new THREE.Group();
    g.add(mesh);
    moduleGroups.push(g);
    pack.add(g);
  }
  // ---- CAD parts ----
  interface Part {
    obj: THREE.Object3D;
    mats: THREE.Material[];
    home: THREE.Vector3;
  }
  const parts = new Map<string, Part>();
  new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).load(
    o.modelUrl,
    (gltf) => {
      for (const obj of [...gltf.scene.children]) {
        const mats: THREE.Material[] = [];
        obj.traverse((n) => {
          const mesh = n as THREE.Mesh;
          if (!mesh.isMesh) return;
          const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
          // The CAD's colours are per-part labels; mute them so the cells carry the colour.
          const hsl = mat.color.getHSL({ h: 0, s: 0, l: 0 });
          mat.color.setHSL(hsl.h, hsl.s * 0.3, hsl.l);
          if (obj.name === "tsac") {
            mat.color.set("#9aa6b6");
            mat.metalness = 0.7;
            mat.roughness = 0.32;
            mat.side = THREE.DoubleSide;
          }
          if (/_shell[AB]$/.test(obj.name)) {
            mat.color.set("#d8dde4");
            mat.metalness = 0;
            mat.roughness = 0.7;
          }
          if (/_bus/.test(obj.name)) {
            mat.color.set("#c9773f");
            mat.metalness = 0.9;
            mat.roughness = 0.35;
          }
          mesh.material = mat;
          mats.push(mat);
        });
        const mm = /^m(\d)_/.exec(obj.name);
        (mm ? moduleGroups[+mm[1]] : pack).add(obj);
        parts.set(obj.name, { obj, mats, home: obj.position.clone() });
      }
      o.canvas.classList.add("ready");
      dirty = true;
    },
    undefined,
    (err) => {
      console.warn("Model failed to load", err);
      o.canvas.classList.add("ready");
    },
  );

  const setOpacity = (name: string, v: number) => {
    const p = parts.get(name);
    if (!p) return;
    p.obj.visible = v > 0.02;
    for (const m of p.mats) {
      m.transparent = v < 0.99;
      m.opacity = v;
      m.depthWrite = v > 0.6;
    }
  };
  const move = (name: string, x: number, y: number, z: number) => {
    const p = parts.get(name);
    if (p) p.obj.position.set(p.home.x + x, p.home.y + y, p.home.z + z);
  };

  // ---- state → colours ----
  let state: State | null = null;
  let selected: number | null = null;
  let hover = -1;
  function paint() {
    cellMeshes.forEach((mesh, mi) => {
      for (let k = 0; k < mesh.count; k++) {
        const i = cellBase[mi] + k;
        const owner = state && i < state.owners.length ? state.owners[i] : -1;
        let c =
          owner < 0
            ? C_FREE
            : selected === null
              ? C_TAKEN
              : owner === selected
                ? C_SEL
                : C_DIM;
        if (i === hover) c = C_HOVER;
        mesh.setColorAt(k, c);
      }
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    });
    dirty = true;
  }

  // ---- scroll → pose ----
  let progress = 0,
    dirty = true,
    visible = true,
    w = 0,
    h = 0;
  const pointer = new THREE.Vector2(0, 0);
  const target = new THREE.Vector3();
  function pose(t: number) {
    const p = progress;
    const lift = seg(p, 0.1, 0.36),
      spread = seg(p, 0.36, 0.56),
      open = seg(p, 0.58, 0.8),
      focus = seg(p, 0.8, 0.97);
    move("tsac", 0, 0, -0.3 * lift);
    setOpacity("tsac", 1 - lift);
    move("duct", 0.25 * lift, 0, 0);
    setOpacity("duct", 1 - lift);
    move("pdu", 0, 0, 0.16 * lift + 0.1 * spread);
    setOpacity("pdu", 1 - open);
    move("links", 0, 0, 0.08 * lift + 0.08 * spread);
    setOpacity("links", 1 - open);
    moduleGroups.forEach((g, i) => {
      // cells.json orders modules along the car first (2), then across it (3).
      const col = Math.floor(i / 3) * 2 - 1,
        row = (i % 3) - 1;
      // Final pose: every module faces the camera as a 2 x 3 wall, matching the 2D map below.
      g.position.set(
        col * (0.04 * spread - 0.03 * focus),
        row * (0.1 * spread + 0.08 * open) * (1 - focus) - moduleY[i] * focus,
        -row * 0.215 * focus,
      );
      move(`m${i}_top`, 0, 0, 0.1 * open);
      setOpacity(`m${i}_top`, 1 - focus);
      for (const [side, dir] of [
        ["A", -1],
        ["B", 1],
      ] as const) {
        move(`m${i}_bus${side}`, 0, dir * 0.07 * open, 0);
        setOpacity(`m${i}_bus${side}`, 1 - focus);
        move(`m${i}_shell${side}`, 0, dir * 0.035 * open, 0);
        setOpacity(`m${i}_shell${side}`, (1 - 0.85 * open) * (1 - focus));
      }
    });

    let k = 0;
    while (k < KEYS.length - 2 && p > KEYS[k + 1][0]) k++;
    const a = KEYS[k],
      c = KEYS[k + 1],
      f = ease(clamp01((p - a[0]) / (c[0] - a[0])));
    const sway = reduce ? 0 : Math.sin(t * 0.00035) * 3 * (1 - focus);
    const az = THREE.MathUtils.degToRad(
      a[1] + (c[1] - a[1]) * f + sway + pointer.x * 7,
    );
    const el = THREE.MathUtils.degToRad(
      a[2] + (c[2] - a[2]) * f - pointer.y * 3,
    );
    const wide = w / h;
    const dist = (a[3] + (c[3] - a[3]) * f) * Math.max(1, 1.15 / wide);
    target.set(0, 0.03 * (1 - focus), 0);
    camera.position.set(
      target.x + dist * Math.cos(el) * Math.sin(az),
      target.y + dist * Math.sin(el),
      target.z + dist * Math.cos(el) * Math.cos(az),
    );
    camera.lookAt(target);
    // Keep the pack clear of the text: right of it on wide screens, above it on phones.
    if (wide > 1.1) camera.setViewOffset(w, h, -w * 0.17, h * 0.04, w, h);
    else camera.setViewOffset(w, h, 0, h * 0.27, w, h);
  }

  function resize() {
    const r = o.canvas.getBoundingClientRect();
    if (r.width === w && r.height === h) return;
    w = r.width;
    h = r.height;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    dirty = true;
  }
  // ?p=0.5 pins the scroll progress (for screenshots and checking a pose).
  const query = new URLSearchParams(location.search);
  const pinned = query.get("p");
  if (query.has("bare")) document.body.classList.add("aac-bare");
  const sticky = o.canvas.parentElement ?? o.section;
  function onScroll() {
    if (pinned !== null) {
      progress = clamp01(+pinned);
      dirty = true;
      return;
    }
    const r = o.section.getBoundingClientRect();
    const span = r.height - o.canvas.clientHeight;
    const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
    const next = clamp01((stickyTop - r.top) / span);
    if (next !== progress) {
      progress = next;
      dirty = true;
    }
  }
  const life = new AbortController();
  const signal = life.signal;
  const resizer = new ResizeObserver(resize);
  resizer.observe(o.canvas);
  const watcher = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
  });
  watcher.observe(o.section);
  addEventListener("scroll", onScroll, { passive: true, signal });
  resize();
  onScroll();

  // ---- picking ----
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  function pick(e: PointerEvent) {
    const r = o.canvas.getBoundingClientRect();
    ndc.set(
      ((e.clientX - r.left) / r.width) * 2 - 1,
      -((e.clientY - r.top) / r.height) * 2 + 1,
    );
    if (progress < 0.6) return -1;
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(
      cellMeshes.filter((m) => m.parent?.visible),
      false,
    )[0];
    return hit
      ? cellBase[cellMeshes.indexOf(hit.object as THREE.InstancedMesh)] +
          (hit.instanceId ?? 0)
      : -1;
  }
  o.canvas.addEventListener(
    "pointermove",
    (e) => {
      const r = o.canvas.getBoundingClientRect();
      if (e.pointerType === "mouse") {
        pointer.set(
          ((e.clientX - r.left) / r.width) * 2 - 1,
          ((e.clientY - r.top) / r.height) * 2 - 1,
        );
        dirty = true;
      }
      const i = pick(e);
      if (i !== hover) {
        hover = i;
        paint();
      }
      o.canvas.style.cursor = i >= 0 ? "pointer" : "";
      o.tip.hidden = i < 0;
      if (i >= 0) {
        o.describe(o.tip, i);
        o.tip.style.left = `${e.clientX - r.left}px`;
        o.tip.style.top = `${e.clientY - r.top}px`;
      }
    },
    { signal },
  );
  o.canvas.addEventListener(
    "pointerleave",
    () => {
      o.tip.hidden = true;
      if (hover >= 0) {
        hover = -1;
        paint();
      }
    },
    { signal },
  );
  o.canvas.addEventListener(
    "click",
    (e) => {
      const i = pick(e as PointerEvent);
      if (i >= 0) o.onPick(i);
    },
    { signal },
  );

  renderer.setAnimationLoop((t) => {
    if (!visible || !w) return;
    if (!dirty && reduce) return;
    pose(t);
    renderer.render(scene, camera);
    dirty = false;
  });

  return {
    setState(s) {
      state = s;
      paint();
    },
    setSelected(d) {
      selected = d;
      paint();
    },
    // Called when the visitor navigates away (the site uses Astro's ClientRouter).
    dispose() {
      life.abort();
      resizer.disconnect();
      watcher.disconnect();
      renderer.setAnimationLoop(null);
      scene.environment?.dispose();
      pmrem.dispose();
      cellGeo.dispose();
      cellMat.dispose();
      renderer.dispose();
    },
  };
}
