// Banners — AnnouncementBar (global operational alert) + CampaignBanner (contextual product)

// AnnouncementBar — slim strip above the nav, dismissible, remembers state in localStorage
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
        <span className="announce-icon">
          <Icon name="triangle-alert" size={15}/>
        </span>
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

// CampaignBanner — contextual full-width image banner placed inside a Smart Gateway panel
function CampaignBanner({ src, alt, onToast, toastMsg, toastIcon }) {
  const icon = toastIcon || 'arrow-up-right';
  const handleClick = () => {
    if (onToast && toastMsg) onToast(toastMsg, icon);
  };
  return (
    <div
      className="campaign-banner"
      onClick={handleClick}
      role={onToast ? 'button' : undefined}
      tabIndex={onToast ? 0 : undefined}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
    >
      <img src={src} alt={alt} loading="lazy"/>
    </div>
  );
}

Object.assign(window, { AnnouncementBar, CampaignBanner });
