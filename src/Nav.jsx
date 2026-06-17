// Top micro-trust bar + sticky nav + hero
const PILLARS = [
  { key: 'indiv', tt: 'Untuk Individu', ts: 'Personal & wealth' },
  { key: 'biz',   tt: 'Untuk Bisnis',   ts: 'UMKM & korporat'  },
  { key: 'plat',  tt: 'Untuk Platform', ts: 'Embedded banking'  },
];

// Language toggle pill — ID / EN
function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label="Language / Bahasa">
      <button
        className={'lt-btn' + (lang === 'id' ? ' on' : '')}
        onClick={() => setLang('id')}
        aria-pressed={lang === 'id'}
        title="Bahasa Indonesia"
      >ID</button>
      <button
        className={'lt-btn' + (lang === 'en' ? ' on' : '')}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        title="English"
      >EN</button>
    </div>
  );
}

function TrustBar({ show }) {
  const { lang } = useLang();
  const s = STRINGS[lang].trustbar;
  if (!show) return null;
  return (
    <div className="trustbar">
      <div className="wrap">
        <span className="seal"><Icon name="shield-check" size={15} /> {s.ojk_pre} <b>{s.ojk}</b></span>
        <span className="dot" />
        <span className="seal"><Icon name="landmark" size={15} /> {s.lps_pre} <b>{s.lps}</b></span>
        <span className="dot full" />
        <span className="full" style={{ opacity: .7 }}>{s.note}</span>
      </div>
    </div>);
}

function Nav({ onCta, onJump }) {
  const { lang } = useLang();
  const s = STRINGS[lang].nav;
  const [openNav, setOpenNav] = useState(null);
  const toggleNav = (key) => setOpenNav(o => o === key ? null : key);
  const closeNav = () => setOpenNav(null);
  const jumpTo = (pillar, sub) => { onJump(pillar, sub); closeNav(); };
  return (
    <nav className="nav">
      <div className="nav-inner">
        <img className="logo" src="assets/logo-horizontal.png" alt="Amar Bank" />
        <div className="nav-links">
          <span className="navlink has-drop" onClick={() => toggleNav('individu')}>
            {s.individu} <Icon name="chevron-down" size={14} />
            <div className={'dropdown' + (openNav === 'individu' ? ' open' : '')}>
              <span onClick={e=>{e.stopPropagation();jumpTo('individu','tunaiku')}}><Icon name="hand-coins" size={14}/> {s.d_tunaiku}</span>
              <span onClick={e=>{e.stopPropagation();jumpTo('individu','app')}}><Icon name="smartphone" size={14}/> {s.d_banking}</span>
              <span onClick={e=>{e.stopPropagation();jumpTo('individu','wealth')}}><Icon name="user-round-cog" size={14}/> {s.d_wealth}</span>
            </div>
          </span>
          <span className="navlink has-drop" onClick={() => toggleNav('bisnis')}>
            {s.bisnis} <Icon name="chevron-down" size={14} />
            <div className={'dropdown' + (openNav === 'bisnis' ? ' open' : '')}>
              <span onClick={e=>{e.stopPropagation();jumpTo('bisnis','umkm')}}><Icon name="store" size={14}/> {s.d_umkm}</span>
              <span onClick={e=>{e.stopPropagation();jumpTo('bisnis','corp')}}><Icon name="building-2" size={14}/> {s.d_korporat}</span>
            </div>
          </span>
          <span className="navlink" onClick={() => jumpTo('platform', null)}>{s.platform}</span>
          <span className="navlink has-drop" onClick={() => toggleNav('lainnya')}>
            {s.lainnya} <Icon name="chevron-down" size={15} />
            <div className={'dropdown' + (openNav === 'lainnya' ? ' open' : '')}>
              <span>{s.d_tentang}</span>
              <span>{s.d_tunaiku2}</span>
              <span>{s.d_karier}</span>
              <span>{s.d_hubungi}</span>
            </div>
          </span>
        </div>
        <div className="nav-cta">
          <LangToggle />
          <a className="btn btn-bantuan" href="https://amarbank.co.id/contact" target="_blank" rel="noopener noreferrer">
            <Icon name="headphones" size={15}/> {s.bantuan}
          </a>
          <button className="btn btn-teal" onClick={onCta}>{s.download}</button>
        </div>
      </div>
    </nav>);
}

function Hero({ variant, onCta, onJump }) {
  const { lang } = useLang();
  const s = STRINGS[lang].hero;
  return (
    <header className="hero" data-variant={variant}>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="pin"><Icon name="sparkles" size={13} color="#fff" /> {s.pin}</span>
              {s.eyebrow}
            </div>
            <h1>
              {s.h1a} <span className="hi-nyaman">{s.h1hi}</span>,<br />
              <span className="grad">{s.h1b}</span>
            </h1>
            <p>{s.p}</p>
            <div className="hero-actions">
              <button className="btn btn-blue btn-lg" onClick={() => onJump('gateway')}>{s.cta1}</button>
              <button className="hero-jump" onClick={onCta}>{s.cta2} <Icon name="arrow-right" size={17} /></button>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-canvas">
              <img className="hero-mark" src="assets/logo-bo-silhouette.png" alt="" />
              <img className="hero-photo" src="assets/hero-ambassador.png" alt="Brand ambassador Amar Bank" />
            </div>
            <div className="hero-orbit">
              <span className="ic"><Icon name="trending-up" size={16} color="#fff" /></span> {s.orbit}
            </div>
            <div className="hero-flag">
              <img src="assets/logo-mark.png" alt="" />
              <div className="t"><b>{s.flag1}</b>{s.flag2}</div>
            </div>
          </div>
        </div>
      </div>
    </header>);
}

Object.assign(window, { TrustBar, Nav, Hero, LangToggle, PILLARS });
