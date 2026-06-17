/* Amar Bank HQ — stylized 3D map of RDTX Square, Jl. Prof. Dr. Satrio, Jakarta.
   Vanilla Three.js (r147 UMD). Exposes window.MAP3D for the Tweaks panel + UI. */
(function () {
  'use strict';

  const MAP3D = (window.MAP3D = {
    tweaks: { time: 'siang', autoRotate: true, labels: true, traffic: true },
    applyTweaks: applyTweaks,
    setPreset: setPreset,
  });

  // ───────────────────────── renderer / scene ─────────────────────────
  const container = document.getElementById('map3d');
  const labelLayer = document.getElementById('map3d-labels');

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xcfe3f4, 500, 1500);

  const camera = new THREE.PerspectiveCamera(46, 1, 1, 4000);

  const hemi = new THREE.HemisphereLight(0xeaf3ff, 0xb8c4d4, 0.9);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 1.15);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -320; sun.shadow.camera.right = 320;
  sun.shadow.camera.top = 320; sun.shadow.camera.bottom = -320;
  sun.shadow.camera.far = 1200;
  sun.shadow.bias = -0.0004;
  scene.add(sun);

  // ───────────────────────── shared materials ─────────────────────────
  const M = {
    ground:   new THREE.MeshStandardMaterial({ color: 0xe9eef5, roughness: 1 }),
    road:     new THREE.MeshStandardMaterial({ color: 0x39465c, roughness: 0.95 }),
    sidewalk: new THREE.MeshStandardMaterial({ color: 0xf2f5f9, roughness: 1 }),
    median:   new THREE.MeshStandardMaterial({ color: 0x6fae4a, roughness: 1 }),
    lane:     new THREE.MeshBasicMaterial({ color: 0xffffff }),
    glass:    new THREE.MeshStandardMaterial({ color: 0x8fc1e8, metalness: 0.65, roughness: 0.22 }),
    band:     new THREE.MeshStandardMaterial({ color: 0x0f3f7e, metalness: 0.3, roughness: 0.6 }),
    podium:   new THREE.MeshStandardMaterial({ color: 0x2a6fb8, metalness: 0.5, roughness: 0.35 }),
    fascia:   new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 }),
    plaza:    new THREE.MeshStandardMaterial({ color: 0xf6f8fb, roughness: 1 }),
    trunk:    new THREE.MeshStandardMaterial({ color: 0x8a6a4d, roughness: 1 }),
    leafA:    new THREE.MeshStandardMaterial({ color: 0x7bc143, roughness: 1 }),
    leafB:    new THREE.MeshStandardMaterial({ color: 0x57a23a, roughness: 1 }),
    pole:     new THREE.MeshStandardMaterial({ color: 0x9aa7b5, roughness: 0.7 }),
    lamp:     new THREE.MeshStandardMaterial({ color: 0xfff2cd, emissive: 0x000000 }),
    pin:      new THREE.MeshStandardMaterial({ color: 0x1253a5, emissive: 0x1253a5, emissiveIntensity: 0.25, roughness: 0.4 }),
    ringMat:  new THREE.MeshBasicMaterial({ color: 0x33b2bf, transparent: true, opacity: 0.55, side: THREE.DoubleSide }),
  };
  const NEIGHBOR_COLORS = [0xdde4ed, 0xcfd8e4, 0xc3cedd, 0xe4e9f1, 0xb9c6d8];
  const neighborMats = NEIGHBOR_COLORS.map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.85 }));

  // ───────────────────────── ground & roads ─────────────────────────
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600), M.ground);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  function flat(w, d, mat, x, y, z) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, y, z);
    m.receiveShadow = true;
    scene.add(m);
    return m;
  }

  // Jl. Prof. Dr. Satrio — main road along X at z = 70
  flat(720, 28, M.road, 0, 0.06, 70);
  flat(720, 4.4, M.sidewalk, 0, 0.1, 54);   // north sidewalk
  flat(720, 4.4, M.sidewalk, 0, 0.1, 86);   // south sidewalk
  flat(720, 2.6, M.median, 0, 0.12, 70);    // median
  // cross streets along Z
  flat(16, 720, M.road, -110, 0.05, 0);
  flat(14, 720, M.road, 130, 0.05, 0);
  // lane dashes
  const dashGeo = new THREE.PlaneGeometry(6, 0.5);
  for (let x = -350; x <= 350; x += 18) {
    for (const z of [63.5, 76.5]) {
      const d = new THREE.Mesh(dashGeo, M.lane);
      d.rotation.x = -Math.PI / 2;
      d.position.set(x, 0.09, z);
      scene.add(d);
    }
  }

  // ───────────────────────── RDTX Square tower ─────────────────────────
  // Curved-front footprint (curve faces the road, +z)
  function curvedShape(w, d, bulge) {
    const s = new THREE.Shape();
    s.moveTo(-w / 2, d / 2);
    s.lineTo(w / 2, d / 2);
    s.lineTo(w / 2, -d / 2);
    s.quadraticCurveTo(0, -d / 2 - bulge, -w / 2, -d / 2);
    s.closePath();
    return s;
  }
  function extrudeUp(shape, h) {
    const g = new THREE.ExtrudeGeometry(shape, { depth: h, bevelEnabled: false, curveSegments: 18 });
    g.rotateX(-Math.PI / 2); // extrusion +z → +y; shape -y → world +z
    return g;
  }

  const FLOORS = 30, FLOOR_H = 3.6;
  const TOWER_H = FLOORS * FLOOR_H; // 108
  const towerShape = curvedShape(44, 26, 13);
  const glassGeo = extrudeUp(towerShape, 2.7);
  const bandGeo = extrudeUp(towerShape, 0.9);
  const tower = new THREE.Group();

  for (let i = 0; i < FLOORS; i++) {
    const glass = new THREE.Mesh(glassGeo, M.glass);
    glass.position.y = i * FLOOR_H;
    glass.castShadow = i % 3 === 0; // cheaper shadows
    const band = new THREE.Mesh(bandGeo, M.band);
    band.position.y = i * FLOOR_H + 2.7;
    band.scale.set(1.025, 1, 1.025);
    tower.add(glass, band);
  }
  // crown
  const crown1 = new THREE.Mesh(extrudeUp(curvedShape(36, 21, 10), 3.4), M.band);
  crown1.position.y = TOWER_H;
  const crown2 = new THREE.Mesh(extrudeUp(curvedShape(26, 15, 7), 2.6), M.fascia);
  crown2.position.y = TOWER_H + 3.4;
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 16, 8), M.pole);
  mast.position.y = TOWER_H + 12;
  const beacon = new THREE.Mesh(
    new THREE.SphereGeometry(1, 10, 10),
    new THREE.MeshBasicMaterial({ color: 0xff4d4d })
  );
  beacon.position.y = TOWER_H + 20;
  tower.add(crown1, crown2, mast, beacon);

  // podium + plaza
  const podium = new THREE.Mesh(extrudeUp(curvedShape(62, 40, 16), 9), M.podium);
  podium.castShadow = true;
  const podiumCap = new THREE.Mesh(extrudeUp(curvedShape(63, 41, 16.4), 1.1), M.fascia);
  podiumCap.position.y = 9;
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(20, 0.9, 9), M.fascia);
  canopy.position.set(0, 6.2, 33);
  canopy.castShadow = true;
  const colGeo = new THREE.CylinderGeometry(0.45, 0.45, 6.2, 10);
  [-8, 8].forEach((x) => {
    const c = new THREE.Mesh(colGeo, M.pole);
    c.position.set(x, 3.1, 36);
    tower.add(c);
  });
  tower.add(podium, podiumCap, canopy);
  flat(96, 70, M.plaza, 0, 0.14, 8);

  tower.position.set(0, 0, -2);
  scene.add(tower);

  // signage — logo mark + "amar bank" text near the top of the facade
  const texLoader = new THREE.TextureLoader();
  const markTex = texLoader.load('assets/logo-bo.png');
  const MARK_AR = 122 / 77; // bo mark aspect ratio (w/h)
  function makeSign() {
    const g = new THREE.Group();
    const mark = new THREE.Mesh(
      new THREE.PlaneGeometry(9, 9 / MARK_AR),
      new THREE.MeshBasicMaterial({ map: markTex, transparent: true })
    );
    mark.position.x = -13;
    const cv = document.createElement('canvas');
    cv.width = 512; cv.height = 128;
    const cx = cv.getContext('2d');
    cx.fillStyle = '#ffffff';
    cx.font = '600 86px Poppins, sans-serif';
    cx.textBaseline = 'middle';
    cx.fillText('amar bank', 10, 70);
    const txtTex = new THREE.CanvasTexture(cv);
    const txt = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 7.5),
      new THREE.MeshBasicMaterial({ map: txtTex, transparent: true })
    );
    txt.position.x = 8;
    g.add(mark, txt);
    return g;
  }
  const signFront = makeSign();
  signFront.position.set(0, TOWER_H - 8, 26.6);
  const signBack = makeSign();
  signBack.position.set(0, TOWER_H - 8, -15.2);
  signBack.rotation.y = Math.PI;
  tower.add(signFront, signBack);

  // ───────────────────────── neighbor blocks ─────────────────────────
  const BLOCKS = [
    [-180, -20, 50, 40, 64], [-178, -100, 56, 46, 36], [95, -35, 48, 36, 58],
    [175, -65, 60, 44, 44], [55, -115, 50, 50, 82], [-60, -125, 44, 40, 30],
    [-160, 132, 64, 48, 72], [-30, 142, 52, 44, 40], [80, 128, 46, 40, 56],
    [195, 142, 58, 46, 86], [240, 20, 44, 40, 34], [-262, 30, 46, 44, 50],
    [-255, 135, 40, 38, 26], [280, 130, 42, 40, 48],
  ];
  const plinthMat = new THREE.MeshStandardMaterial({ color: 0xf0f3f8, roughness: 1 });
  BLOCKS.forEach(([x, z, w, d, h], i) => {
    const mat = neighborMats[i % neighborMats.length];
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    b.position.set(x, h / 2 + 2, z);
    b.castShadow = true; b.receiveShadow = true;
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(w + 10, 2, d + 10), plinthMat);
    plinth.position.set(x, 1, z);
    const roofBox = new THREE.Mesh(new THREE.BoxGeometry(w * 0.3, 3, d * 0.3), neighborMats[(i + 2) % neighborMats.length]);
    roofBox.position.set(x + w * 0.15, h + 3.5, z - d * 0.1);
    scene.add(b, plinth, roofBox);
  });

  // ───────────────────────── trees & lamps ─────────────────────────
  const trunkGeo = new THREE.CylinderGeometry(0.35, 0.5, 3, 6);
  const leafGeo = new THREE.IcosahedronGeometry(2.4, 0);
  function tree(x, z, s) {
    const g = new THREE.Group();
    const t = new THREE.Mesh(trunkGeo, M.trunk);
    t.position.y = 1.5;
    const l = new THREE.Mesh(leafGeo, Math.random() > 0.5 ? M.leafA : M.leafB);
    l.position.y = 4.4;
    l.castShadow = true;
    g.add(t, l);
    g.scale.setScalar(s || 1);
    g.position.set(x, 0, z);
    scene.add(g);
  }
  for (let x = -340; x <= 340; x += 34) {
    if (Math.abs(x + 110) < 14 || Math.abs(x - 130) < 13) continue; // crossings
    if (Math.abs(x) < 52) { tree(x, 86, 0.9 + Math.random() * 0.4); continue; } // skip plaza north side
    tree(x, 54, 0.9 + Math.random() * 0.4);
    tree(x, 86, 0.9 + Math.random() * 0.4);
  }
  for (let x = -320; x <= 320; x += 44) {
    if (Math.abs(x + 110) < 14 || Math.abs(x - 130) < 13) continue;
    tree(x, 70, 0.7); // median trees
  }

  const lampHeads = [];
  const poleGeo = new THREE.CylinderGeometry(0.22, 0.3, 9, 6);
  const headGeo = new THREE.SphereGeometry(0.55, 8, 8);
  for (let x = -300; x <= 300; x += 75) {
    for (const z of [55.5, 84.5]) {
      const p = new THREE.Mesh(poleGeo, M.pole);
      p.position.set(x, 4.5, z);
      const h = new THREE.Mesh(headGeo, M.lamp);
      h.position.set(x, 9.2, z);
      lampHeads.push(h);
      scene.add(p, h);
    }
  }

  // ───────────────────────── traffic ─────────────────────────
  const cars = [];
  const carColors = [0x1253a5, 0x33b2bf, 0x7bc143, 0xffffff, 0x0a2e5c, 0xe8604c];
  const carBody = new THREE.BoxGeometry(5, 1.5, 2.4);
  const carCab = new THREE.BoxGeometry(2.6, 1.1, 2.2);
  const carGroup = new THREE.Group();
  scene.add(carGroup);
  for (let i = 0; i < 14; i++) {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: carColors[i % carColors.length], roughness: 0.5, metalness: 0.3 });
    const b = new THREE.Mesh(carBody, mat);
    b.position.y = 1.1;
    b.castShadow = true;
    const c = new THREE.Mesh(carCab, new THREE.MeshStandardMaterial({ color: 0x223349, roughness: 0.3 }));
    c.position.set(-0.3, 2.1, 0);
    g.add(b, c);
    const dir = i % 2 === 0 ? 1 : -1;
    const lane = dir === 1 ? (i % 4 < 2 ? 61.5 : 65.5) : (i % 4 < 2 ? 74.5 : 78.5);
    g.position.set(-340 + Math.random() * 680, 0, lane);
    g.rotation.y = dir === 1 ? 0 : Math.PI;
    carGroup.add(g);
    cars.push({ g, dir, speed: 22 + Math.random() * 16 });
  }

  // ───────────────────────── pin + pulse ─────────────────────────
  const pin = new THREE.Group();
  const pinCone = new THREE.Mesh(new THREE.ConeGeometry(3.2, 9, 24), M.pin);
  pinCone.rotation.x = Math.PI;
  pinCone.position.y = 4.5;
  const pinHead = new THREE.Mesh(new THREE.SphereGeometry(5.4, 24, 24), M.pin);
  pinHead.position.y = 12;
  const pinSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: markTex, transparent: true }));
  pinSprite.scale.set(7.6, 7.6 / MARK_AR, 1);
  pinSprite.position.y = 12;
  pin.add(pinCone, pinHead, pinSprite);
  pin.position.set(0, TOWER_H + 26, -2);
  scene.add(pin);

  const pulse = new THREE.Mesh(new THREE.RingGeometry(6, 7.2, 48), M.ringMat);
  pulse.rotation.x = -Math.PI / 2;
  pulse.position.set(0, 0.3, 36);
  scene.add(pulse);

  // ───────────────────────── HTML labels ─────────────────────────
  const labels = [];
  function addLabel(html, pos, cls) {
    const el = document.createElement('div');
    el.className = 'm3-label ' + (cls || '');
    el.innerHTML = html;
    labelLayer.appendChild(el);
    labels.push({ el, pos: new THREE.Vector3().copy(pos) });
  }
  addLabel(
    '<img src="assets/logo-bo.png" alt=""><span><b>RDTX Square</b>kantor pusat amar bank</span>',
    new THREE.Vector3(0, TOWER_H + 14, 8), 'm3-hero'
  );
  addLabel('Jl. Prof. Dr. Satrio', new THREE.Vector3(-70, 1, 70), 'm3-road');
  addLabel('Jl. Prof. Dr. Satrio', new THREE.Vector3(200, 1, 70), 'm3-road');
  addLabel('arah Kuningan · Ciputra World', new THREE.Vector3(-345, 3, 70), 'm3-dir');
  addLabel('arah Jl. Jend. Sudirman', new THREE.Vector3(345, 3, 70), 'm3-dir');
  addLabel('Jl. Gatot Subroto', new THREE.Vector3(-60, 1, -180), 'm3-area');

  const v3 = new THREE.Vector3();
  function updateLabels() {
    const w = container.clientWidth, h = container.clientHeight;
    for (const l of labels) {
      v3.copy(l.pos).project(camera);
      if (v3.z > 1 || v3.z < -1) { l.el.style.display = 'none'; continue; }
      l.el.style.display = '';
      l.el.style.transform =
        'translate(-50%,-110%) translate(' + ((v3.x * 0.5 + 0.5) * w).toFixed(1) + 'px,' +
        ((-v3.y * 0.5 + 0.5) * h).toFixed(1) + 'px)';
    }
  }

  // ───────────────────────── camera control ─────────────────────────
  const ctl = {
    target: new THREE.Vector3(0, 42, 0),
    goalTarget: new THREE.Vector3(0, 42, 0),
    theta: 0.5, phi: 0.55, r: 640,            // current (starts far for intro)
    gTheta: 0.5, gPhi: 1.02, gR: 235,         // goal
    lastInput: 0,
  };
  const PHI_MIN = 0.14, PHI_MAX = 1.46, R_MIN = 70, R_MAX = 760;

  function applyCamera() {
    const sp = Math.sin(ctl.phi), cp = Math.cos(ctl.phi);
    camera.position.set(
      ctl.target.x + ctl.r * sp * Math.sin(ctl.theta),
      ctl.target.y + ctl.r * cp,
      ctl.target.z + ctl.r * sp * Math.cos(ctl.theta)
    );
    camera.lookAt(ctl.target);
  }

  const PRESETS = {
    street: { theta: 0.82, phi: 1.38, r: 130, ty: 46 },
    orbit:  { theta: 0.5,  phi: 1.02, r: 235, ty: 42 },
    top:    { theta: 0.0,  phi: 0.16, r: 470, ty: 10 },
  };
  function setPreset(name) {
    const p = PRESETS[name];
    if (!p) return;
    ctl.gTheta = p.theta; ctl.gPhi = p.phi; ctl.gR = p.r;
    ctl.goalTarget.set(0, p.ty, 0);
    ctl.lastInput = performance.now();
  }

  // pointer interaction
  const pointers = new Map();
  let pinchDist = 0;
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.addEventListener('pointerdown', (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, button: e.button });
    renderer.domElement.setPointerCapture(e.pointerId);
    if (pointers.size === 2) {
      const pts = [...pointers.values()];
      pinchDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    }
  });
  renderer.domElement.addEventListener('pointermove', (e) => {
    const p = pointers.get(e.pointerId);
    if (!p) return;
    const dx = e.clientX - p.x, dy = e.clientY - p.y;
    if (pointers.size === 2) {
      p.x = e.clientX; p.y = e.clientY;
      const pts = [...pointers.values()];
      const d = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      if (pinchDist > 0) ctl.gR = clamp(ctl.gR * (pinchDist / d), R_MIN, R_MAX);
      pinchDist = d;
    } else if (p.button === 2 || e.shiftKey) {
      // pan on ground plane
      const k = ctl.r * 0.0014;
      const st = Math.sin(ctl.theta), ct = Math.cos(ctl.theta);
      ctl.goalTarget.x -= (dx * ct - dy * st) * k;
      ctl.goalTarget.z += (dx * st + dy * ct) * k;
      const lim = 320;
      ctl.goalTarget.x = clamp(ctl.goalTarget.x, -lim, lim);
      ctl.goalTarget.z = clamp(ctl.goalTarget.z, -lim, lim);
      p.x = e.clientX; p.y = e.clientY;
    } else {
      ctl.gTheta -= dx * 0.0052;
      ctl.gPhi = clamp(ctl.gPhi - dy * 0.0042, PHI_MIN, PHI_MAX);
      p.x = e.clientX; p.y = e.clientY;
    }
    ctl.lastInput = performance.now();
  });
  function release(e) {
    pointers.delete(e.pointerId);
    pinchDist = 0;
  }
  renderer.domElement.addEventListener('pointerup', release);
  renderer.domElement.addEventListener('pointercancel', release);
  renderer.domElement.addEventListener('wheel', (e) => {
    e.preventDefault();
    ctl.gR = clamp(ctl.gR * Math.exp(e.deltaY * 0.0011), R_MIN, R_MAX);
    ctl.lastInput = performance.now();
  }, { passive: false });
  renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }

  // ───────────────────────── time-of-day ─────────────────────────
  const TIMES = {
    siang: {
      sky: 0xcfe3f4, fogNear: 500, fogFar: 1500,
      hemi: 0.9, hemiSky: 0xeaf3ff, hemiGnd: 0xb8c4d4,
      sun: 0xffffff, sunInt: 1.15, sunPos: [200, 300, 160],
      glass: 0x8fc1e8, glassEm: 0x000000, glassEmI: 0,
      ground: 0xe9eef5, road: 0x39465c, sidewalk: 0xf2f5f9, plaza: 0xf6f8fb,
      lampEm: 0, signTone: 1,
    },
    senja: {
      sky: 0x44518f, fogNear: 420, fogFar: 1400,
      hemi: 0.5, hemiSky: 0x8d7bb8, hemiGnd: 0x4a4660,
      sun: 0xff9e5e, sunInt: 0.95, sunPos: [-260, 90, 200],
      glass: 0x5d7fae, glassEm: 0xffc88a, glassEmI: 0.22,
      ground: 0xb9bdd2, road: 0x2c3650, sidewalk: 0xc6c9dd, plaza: 0xcdd1e2,
      lampEm: 0.9, signTone: 1,
    },
    malam: {
      sky: 0x0a1626, fogNear: 380, fogFar: 1300,
      hemi: 0.22, hemiSky: 0x2c4a78, hemiGnd: 0x0c1422,
      sun: 0x7fa9e8, sunInt: 0.3, sunPos: [160, 280, -120],
      glass: 0x16314f, glassEm: 0xffe3a6, glassEmI: 0.5,
      ground: 0x141f31, road: 0x0e1726, sidewalk: 0x1d2a40, plaza: 0x22304a,
      lampEm: 1.4, signTone: 1,
    },
  };

  function applyTweaks(t) {
    Object.assign(MAP3D.tweaks, t);
    const T = TIMES[MAP3D.tweaks.time] || TIMES.siang;
    scene.background = new THREE.Color(T.sky);
    scene.fog.color.setHex(T.sky);
    scene.fog.near = T.fogNear; scene.fog.far = T.fogFar;
    hemi.intensity = T.hemi;
    hemi.color.setHex(T.hemiSky); hemi.groundColor.setHex(T.hemiGnd);
    sun.color.setHex(T.sun); sun.intensity = T.sunInt;
    sun.position.set(T.sunPos[0], T.sunPos[1], T.sunPos[2]);
    M.glass.color.setHex(T.glass);
    M.glass.emissive.setHex(T.glassEm);
    M.glass.emissiveIntensity = T.glassEmI;
    M.ground.color.setHex(T.ground);
    M.road.color.setHex(T.road);
    M.sidewalk.color.setHex(T.sidewalk);
    M.plaza.color.setHex(T.plaza);
    M.lamp.emissive.setHex(0xffd98a);
    M.lamp.emissiveIntensity = T.lampEm;
    labelLayer.style.display = MAP3D.tweaks.labels ? '' : 'none';
    carGroup.visible = MAP3D.tweaks.traffic;
    document.body.dataset.time = MAP3D.tweaks.time;
  }
  applyTweaks(MAP3D.tweaks);

  // ───────────────────────── resize / loop ─────────────────────────
  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', resize);
  resize();

  const clock = new THREE.Clock();
  let elapsed = 0;
  function tick() {
    const dt = Math.min(clock.getDelta(), 0.05);
    elapsed += dt;

    // damping toward goals
    const k = 1 - Math.pow(0.0015, dt); // smooth
    ctl.theta += (ctl.gTheta - ctl.theta) * k;
    ctl.phi += (ctl.gPhi - ctl.phi) * k;
    ctl.r += (ctl.gR - ctl.r) * k;
    ctl.target.lerp(ctl.goalTarget, k);

    // gentle auto-rotate after 4s idle
    if (MAP3D.tweaks.autoRotate && performance.now() - ctl.lastInput > 4000 && pointers.size === 0) {
      ctl.gTheta += dt * 0.055;
    }
    applyCamera();

    // pin bob + pulse
    pin.position.y = TOWER_H + 26 + Math.sin(elapsed * 1.6) * 2.2;
    pinSprite.material.rotation = 0;
    const ps = 1 + (elapsed % 2) * 0.9;
    pulse.scale.setScalar(ps);
    M.ringMat.opacity = Math.max(0, 0.55 * (1 - (elapsed % 2) / 2));
    beacon.material.color.setHex(Math.sin(elapsed * 3) > 0 ? 0xff4d4d : 0x5a1d1d);

    // traffic
    if (carGroup.visible) {
      for (const c of cars) {
        c.g.position.x += c.dir * c.speed * dt;
        if (c.g.position.x > 360) c.g.position.x = -360;
        if (c.g.position.x < -360) c.g.position.x = 360;
      }
    }

    updateLabels();
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();

  // signal ready (fade splash) — defer past first paint so the CSS transition actually runs
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.body.classList.add('m3-ready');
      var sp = document.getElementById('splash');
      if (sp) setTimeout(function () { sp.style.display = 'none'; }, 700);
    });
  });
})();
