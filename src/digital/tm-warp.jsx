// Amar Bank Time Machine — the warp / time-travel sequence
const { useState: useStateW, useEffect: useEffectW, useRef: useRefW } = React;

// Canvas hyperspace starfield in brand colors
function WarpCanvas({ intensityRef }) {
  const canvasRef = useRefW(null);
  useEffectW(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let raf, w, h, cx, cy;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const COLORS = ['#7BC143', '#9CCF69', '#33B2BF', '#1BB1ED', '#1253A5', '#ffffff', '#A6E1FF'];
    const N = 320;
    let stars = [];

    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * DPR; canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      cx = w / 2; cy = h / 2;
    }
    function mk() {
      return { x: (Math.random() - 0.5) * w, y: (Math.random() - 0.5) * h,
        z: Math.random() * w, pz: 0, c: COLORS[(Math.random() * COLORS.length) | 0] };
    }
    resize();
    stars = Array.from({ length: N }, mk);
    window.addEventListener('resize', resize);

    function frame() {
      const speed = 6 + (intensityRef.current || 0) * 60; // accelerate over time
      ctx.fillStyle = 'rgba(2,6,13,0.32)';
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = 'round';
      for (const s of stars) {
        s.pz = s.z;
        s.z -= speed;
        if (s.z < 1) { Object.assign(s, mk()); s.z = w; s.pz = w; continue; }
        const sx = cx + (s.x / s.z) * w;
        const sy = cy + (s.y / s.z) * w;
        const px = cx + (s.x / s.pz) * w;
        const py = cy + (s.y / s.pz) * w;
        const k = (1 - s.z / w);
        ctx.strokeStyle = s.c;
        ctx.globalAlpha = Math.min(1, k * 1.3);
        ctx.lineWidth = Math.max(0.5, k * 3.2);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    }
    frame();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} />;
}

const WARP_STATUS = [
  { at: 0.0, t: 'Mengisi kapasitor waktu', s: 'Menghitung bunga majemuk…' },
  { at: 0.26, t: 'Melontar ke masa depan', s: 'Celengan & Deposito bekerja…' },
  { at: 0.55, t: 'Melewati tonggak kekayaan', s: 'Bunga menggulung bunga…' },
  { at: 0.82, t: 'Menstabilkan lini masa', s: 'Hampir tiba…' },
];

// startYear → endYear, calls onArrive when done. duration ms.
function Warp({ startDate, endDate, onArrive, reduced }) {
  const intensityRef = useRefW(0);
  const [year, setYear] = useStateW(startDate.getFullYear());
  const [prog, setProg] = useStateW(0);
  const [status, setStatus] = useStateW(WARP_STATUS[0]);
  const [flash, setFlash] = useStateW(false);
  const startY = startDate.getFullYear();
  const endY = endDate.getFullYear();
  const startMo = startDate.getMonth();
  const endTotal = endY * 12 + endDate.getMonth();
  const startTotal = startY * 12 + startMo;

  useEffectW(() => {
    const DUR = reduced ? 900 : 3600;
    const t0 = performance.now();
    let raf, done = false;
    const tick = (t) => {
      let k = Math.min(1, (t - t0) / DUR);
      // ease-in-out with a punchy mid acceleration
      const eased = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      intensityRef.current = Math.sin(Math.min(1, k) * Math.PI) * 0.9 + k * 0.1;
      setProg(k);
      const curTotal = startTotal + (endTotal - startTotal) * eased;
      setYear(Math.floor(curTotal / 12));
      let st = WARP_STATUS[0];
      for (const s of WARP_STATUS) if (k >= s.at) st = s;
      setStatus(st);
      if (k < 1) raf = requestAnimationFrame(tick);
      else if (!done) {
        done = true; setYear(endY); setFlash(true);
        setTimeout(() => onArrive(), reduced ? 300 : 950);
      }
    };
    raf = requestAnimationFrame(tick);
    // Safety: guarantee arrival even if rAF is throttled (e.g. background tab)
    const safeguard = setTimeout(() => {
      if (!done) { done = true; setYear(endY); setFlash(true); setTimeout(() => onArrive(), 300); }
    }, DUR + 2000);
    return () => { cancelAnimationFrame(raf); clearTimeout(safeguard); };
  }, []);

  return (
    <div className="warp">
      <WarpCanvas intensityRef={intensityRef} />
      <div className="warp-vignette" />
      <div className="warp-core">
        <div className="warp-ring">
          <img className="warp-mark" src="assets/logo-mark-white.png" alt=""
            onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div className="warp-year">{year}</div>
        <div className="warp-status">{status.t}</div>
        <div className="warp-sub">{status.s}</div>
        <div className="warp-prog"><i style={{ width: (prog * 100).toFixed(1) + '%' }} /></div>
      </div>
      <div className={'warp-flash' + (flash ? ' go' : '')} />
    </div>
  );
}

window.Warp = Warp;
