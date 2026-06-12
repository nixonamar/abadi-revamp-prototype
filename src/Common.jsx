// Shared helpers for the Amar Bank homepage redesign.
const { useState, useEffect, useRef, useMemo } = React;

// Indonesian Rupiah formatting: Rp 20.000.000
function rp(n) {return 'Rp ' + Math.round(n).toLocaleString('id-ID');}
function rpShort(n) {
  if (n >= 1e9) return 'Rp ' + (n / 1e9).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + ' M';
  if (n >= 1e6) return 'Rp ' + (n / 1e6).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + ' jt';
  return rp(n);
}

// Deterministic QR-like matrix (decorative placeholder that scans to the deep link visual).
function QR({ size = 25, payload = 'amarbank', color = '#0A2E5C' }) {
  const cells = useMemo(() => {
    // seeded pseudo-random from payload
    let s = 0;for (const c of payload) s = s * 31 + c.charCodeAt(0) >>> 0;
    const rand = () => {s = s * 1103515245 + 12345 & 0x7fffffff;return s / 0x7fffffff;};
    const g = Array.from({ length: size }, () => Array.from({ length: size }, () => rand() > 0.52));
    // finder patterns at 3 corners
    const place = (r, c) => {
      for (let i = -1; i < 8; i++) for (let j = -1; j < 8; j++) {
        const rr = r + i,cc = c + j;if (rr < 0 || cc < 0 || rr >= size || cc >= size) continue;
        const onRing = i >= 0 && i <= 6 && j >= 0 && j <= 6 && (i === 0 || i === 6 || j === 0 || j === 6);
        const core = i >= 2 && i <= 4 && j >= 2 && j <= 4;
        const quiet = i === -1 || i === 7 || j === -1 || j === 7;
        g[rr][cc] = quiet ? false : onRing || core;
      }
    };
    place(0, 0);place(0, size - 7);place(size - 7, 0);
    // timing-ish + alignment fleck
    place(size - 9, size - 9);
    return g;
  }, [payload, size]);
  const unit = 100 / size;
  return (
    <svg viewBox="0 0 100 100" shapeRendering="crispEdges" role="img" aria-label="QR untuk unduh aplikasi">
      <rect width="100" height="100" fill="#fff" />
      {cells.map((row, r) => row.map((on, c) => on ?
      <rect key={r + '-' + c} x={c * unit} y={r * unit} width={unit} height={unit} fill={color} rx={unit * 0.18} /> :
      null))}
    </svg>);

}

// App store buttons (used in hero + app module)
function StoreButtons({ onClick }) {
  return (
    <div className="stores">
      <a className="store" href="https://play.google.com/store/apps/details?id=com.senyumkubank.rekeningonline&hl=en" target="_blank" rel="noopener noreferrer" onClick={onClick}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="M3.6 2.2c-.3.3-.5.7-.5 1.3v17c0 .6.2 1 .5 1.3l.1.1L13 13.1v-.2L3.7 2.1l-.1.1z" opacity=".85" /><path d="M16.3 16.4 13 13.1v-.2l3.3-3.3.1 0 4 2.3c1.1.6 1.1 1.7 0 2.4l-4 2.1z" /><path d="M16.4 16.3 13 13 3.6 22.4c.4.4 1 .4 1.7.1l11.1-6.2" opacity=".9" /><path d="M16.4 9.7 5.3 3.5c-.7-.4-1.3-.3-1.7.1L13 13l3.4-3.3z" opacity=".7" /></svg>
        <span><span className="s1">GET IT ON</span><span className="s2">Google Play</span></span>
      </a>
      <a className="store" href="https://apps.apple.com/id/app/amar-bank-investasi-tabungan/id1527998513" target="_blank" rel="noopener noreferrer" onClick={onClick}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M17.05 12.5c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.7-3.2.7-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2-1.5 2.5-.4 6.3 1 8.3.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7 1.2 0 1.6.7 2.7.6 1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.3 1.1-2.3s-2.1-.8-2.1-3.2zM15 6.3c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 2-.5 2.5-1.2z" /></svg>
        <span><span className="s1">Download on the</span><span className="s2">App Store</span></span>
      </a>
    </div>);
}

// AnnouncementBar — slim strip above nav, dismissible, persists via localStorage
function AnnouncementBar() {
  const LS_KEY = 'amar_announce_dismiss_kc_kusuma_v1';
  const [visible, setVisible] = useState(() => {
    try { return !localStorage.getItem(LS_KEY); } catch(e) { return true; }
  });
  const dismiss = () => {
    setVisible(false);
    try { localStorage.setItem(LS_KEY, '1'); } catch(e) {}
  };
  if (!visible) return null;
  return (
    <div className="announce-bar" role="alert" aria-live="polite">
      <div className="announce-inner">
        <span className="announce-icon"><Icon name="triangle-alert" size={15}/></span>
        <span className="announce-text">
          <strong>Informasi Kantor Cabang:</strong>{' '}KC Kusuma Bangsa efektif berhenti beroperasi pada{' '}
          <strong>15 September 2025</strong>. Seluruh aktivitas dialihkan ke{' '}
          <strong>KC Basuki Rahmat</strong> — Jl. Basuki Rahmat No. 109, Surabaya 60271.
        </span>
        <span className="announce-link" role="button" tabIndex="0">Lihat Detail</span>
        <button className="announce-close" onClick={dismiss} aria-label="Tutup pengumuman">
          <Icon name="x" size={14}/>
        </button>
      </div>
    </div>
  );
}

// CampaignBanner — contextual full-width image banner inside a Smart Gateway panel
function CampaignBanner({ src, alt, onToast, toastMsg, toastIcon, inCard }) {
  const icon = toastIcon || 'arrow-up-right';
  const handleClick = () => { if (onToast && toastMsg) onToast(toastMsg, icon); };
  return (
    <div
      className={`campaign-banner${inCard ? ' in-card' : ''}`}
      onClick={handleClick}
      role={onToast ? 'button' : undefined}
      tabIndex={onToast ? 0 : undefined}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
    >
      <img src={src} alt={alt} loading="eager"/>
    </div>
  );
}

Object.assign(window, { rp, rpShort, QR, StoreButtons, AnnouncementBar, CampaignBanner });