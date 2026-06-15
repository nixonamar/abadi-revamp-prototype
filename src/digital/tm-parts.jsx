// Amar Bank Time Machine — shared parts (meta, AnimNum, chart, stores, confetti)
const { useState, useEffect, useRef, useMemo, useCallback } = React;
const TMfmt = window.TM.fmt;
const TMshort = window.TM.fmtShort;

// product metadata
const PRODUCTS = {
  active:   { key: 'active',   name: 'Saldo Aktif', color: '#1BB1ED', icon: 'wallet',     rate: '0,5% p.a.' },
  celengan: { key: 'celengan', name: 'Celengan',    color: '#9A57B0', icon: 'piggy-bank', rate: '5,5% p.a.' },
  brankas:  { key: 'brankas',  name: 'Brankas',     color: '#2C5BA0', icon: 'vault',      rate: '3,5% p.a.' },
  deposito: { key: 'deposito', name: 'Deposito',    color: '#14A155', icon: 'trending-up',rate: 'hingga 9%' },
  depoInstan:{ key: 'depoInstan', name: 'Depo Instan', color: '#FE2C51', icon: 'zap',     rate: 'cashback' },
};
const PRODUCT_ORDER = ['active', 'celengan', 'brankas', 'deposito', 'depoInstan'];

// Animated counting number
function AnimNum({ value, dur = 600, prefix = 'Rp\u00A0', className }) {
  const [disp, setDisp] = useState(value);
  const fromRef = useRef(value);
  const rafRef = useRef(0);
  useEffect(() => {
    const from = fromRef.current, to = value;
    if (from === to) { setDisp(to); return; }
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      setDisp(from + (to - from) * e);
      if (k < 1) rafRef.current = requestAnimationFrame(tick); else fromRef.current = to;
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [value, dur]);
  return <span className={className}>{prefix}{Math.round(disp).toLocaleString('id-ID')}</span>;
}

// Growth area chart with playhead + event markers + hover tooltip
function GrowthChart({ series, playMonth, events, startDate }) {
  const W = 720, H = 280, padL = 50, padR = 16, padT = 18, padB = 30;
  const iw = W - padL - padR, ih = H - padT - padB;
  const n = series.length;
  const maxV = Math.max(1, ...series.map(s => s.total));
  const niceMax = useMemo(() => {
    const pow = Math.pow(10, Math.floor(Math.log10(maxV)));
    return Math.max(Math.ceil(maxV / pow) * pow, maxV * 1.06);
  }, [maxV]);
  const x = (m) => padL + (n <= 1 ? 0 : (m / (n - 1)) * iw);
  const y = (v) => padT + ih - (v / niceMax) * ih;

  const pts = series.map(s => [x(s.month), y(s.total)]);
  const fullLine = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const pm = Math.min(playMonth, n - 1);
  const aPts = pts.slice(0, pm + 1);
  const area = aPts.length ? 'M' + aPts[0][0].toFixed(1) + ' ' + (padT + ih) +
    aPts.map(p => ' L' + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join('') +
    ' L' + aPts[aPts.length - 1][0].toFixed(1) + ' ' + (padT + ih) + ' Z' : '';
  const aLine = aPts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');

  const grid = [0, .25, .5, .75, 1].map(f => ({ v: niceMax * (1 - f), yy: padT + ih * f }));
  const maxM = series[n - 1].month;
  const xticks = useMemo(() => {
    const cnt = Math.min(6, maxM);
    const out = [];
    for (let i = 0; i <= cnt; i++) out.push(Math.round((i / cnt) * maxM));
    return [...new Set(out)];
  }, [maxM]);

  const head = aPts[aPts.length - 1];
  const [tip, setTip] = useState(null);
  const wrapRef = useRef(null);

  const onMove = (e) => {
    const rect = wrapRef.current.getBoundingClientRect();
    const rx = (e.clientX - rect.left) / rect.width * W;
    const m = Math.round(((rx - padL) / iw) * (n - 1));
    const mm = Math.max(0, Math.min(n - 1, m));
    const s = series[mm];
    if (s) setTip({ x: x(mm), y: y(s.total), s });
  };

  return (
    <div className="chart-wrap" ref={wrapRef} onMouseMove={onMove} onMouseLeave={() => setTip(null)}>
      <svg className="chart-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="tmArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1253A5" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#1253A5" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {grid.map((g, i) => (
          <g key={i}>
            <line className="grid-line" x1={padL} y1={g.yy} x2={W - padR} y2={g.yy} />
            <text className="axis-lbl" x={padL - 8} y={g.yy + 3} textAnchor="end">{TMshort(g.v)}</text>
          </g>
        ))}
        {xticks.map((m, i) => (
          <text key={i} className="axis-lbl" x={x(m)} y={H - 9} textAnchor="middle">
            {m === 0 ? 'kini' : window.TM.dateForMonth(startDate, m).getFullYear()}
          </text>
        ))}
        {area && <path d={area} fill="url(#tmArea)" />}
        <path d={fullLine} fill="none" stroke="#C7D3E2" strokeWidth="2" strokeDasharray="4 4" />
        {aLine && <path d={aLine} fill="none" stroke="#1253A5" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />}
        {events.filter(e => e.month <= pm).map((e, i) => {
          const s = series[e.month]; if (!s) return null;
          return <circle key={i} cx={x(e.month)} cy={y(s.total)} r="5"
            fill={e.tone === 'warn' ? '#F5A623' : '#7BC143'} stroke="#fff" strokeWidth="2" />;
        })}
        {tip && <line x1={tip.x} y1={padT} x2={tip.x} y2={padT + ih} stroke="#1253A5" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />}
        {head && <line x1={head[0]} y1={padT} x2={head[0]} y2={padT + ih} stroke="#1253A5" strokeWidth="1" opacity="0.18" />}
        {head && <circle cx={head[0]} cy={head[1]} r="6" fill="#1253A5" stroke="#fff" strokeWidth="3" />}
        {tip && <circle cx={tip.x} cy={tip.y} r="4" fill="#fff" stroke="#1253A5" strokeWidth="2" />}
      </svg>
      {tip && (
        <div className="chart-tip show" style={{ left: (tip.x / W * 100) + '%', top: (tip.y / H * 100) + '%' }}>
          <div>{window.TM.labelForMonth(startDate, tip.s.month)}</div>
          <div className="ct-amt">{TMfmt(tip.s.total)}</div>
        </div>
      )}
    </div>
  );
}

function StoreButtons() {
  return (
    <div className="stores">
      <a className="store" href="https://apps.apple.com/id/app/amar-bank-investasi-tabungan/id1527998513" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 12.5c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.7-3.2.7-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.3 1 8.3.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.6 1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.3 1.1-2.3s-2.1-.8-2.1-3.2zM15 6.3c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 2-.5 2.5-1.2z" /></svg>
        <span><span className="s1">Download on the</span><span className="s2">App Store</span></span>
      </a>
      <a className="store" href="https://play.google.com/store/apps/details?id=com.senyumkubank.rekeningonline&hl=en" target="_blank" rel="noopener noreferrer">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M3.6 2.2c-.3.3-.5.7-.5 1.3v17c0 .6.2 1 .5 1.3l.1.1L13 13.1v-.2L3.7 2.1z" opacity=".85" /><path d="M16.3 16.4 13 13.1v-.2l3.3-3.3 4 2.3c1.1.6 1.1 1.7 0 2.4z" /><path d="M16.4 16.3 13 13 3.6 22.4c.4.4 1 .4 1.7.1l11.1-6.2" opacity=".9" /><path d="M16.4 9.7 5.3 3.5c-.7-.4-1.3-.3-1.7.1L13 13z" opacity=".7" /></svg>
        <span><span className="s1">GET IT ON</span><span className="s2">Google Play</span></span>
      </a>
    </div>
  );
}

function Confetti({ seed }) {
  const pieces = useMemo(() => {
    const cols = ['#7BC143', '#33B2BF', '#1253A5', '#F5A623', '#FE2C51', '#1BB1ED'];
    return Array.from({ length: 110 }, (_, i) => ({
      left: Math.random() * 100, bg: cols[i % cols.length],
      delay: Math.random() * 0.35, dur: 1.1 + Math.random() * 1.0, rot: Math.random() * 360,
    }));
  }, [seed]);
  if (!seed) return null;
  return (
    <div className="confetti" key={seed}>
      {pieces.map((p, i) => (
        <i key={i} style={{ left: p.left + '%', background: p.bg, animationDelay: p.delay + 's',
          animationDuration: p.dur + 's', transform: `rotate(${p.rot}deg)` }} />
      ))}
    </div>
  );
}

// twinkling starfield (decorative, behind wizard)
function StarField({ count = 60 }) {
  const stars = useMemo(() => Array.from({ length: count }, () => ({
    left: Math.random() * 100, top: Math.random() * 100,
    delay: Math.random() * 4, size: Math.random() < 0.2 ? 3 : 2,
  })), [count]);
  return (
    <div className="tm-starfield">
      {stars.map((s, i) => (
        <span className="tm-star" key={i} style={{ left: s.left + '%', top: s.top + '%',
          width: s.size, height: s.size, animationDelay: s.delay + 's' }} />
      ))}
    </div>
  );
}

Object.assign(window, { PRODUCTS, PRODUCT_ORDER, AnimNum, GrowthChart, StoreButtons, Confetti, StarField, TMfmt, TMshort });
