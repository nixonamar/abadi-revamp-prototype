// Shared chrome for Amar Bank inner pages — page-mode nav, hero band,
// CTA band, and a PageShell that owns language state + footer.
// Relies on globals: React, Icon, LangContext/useLang/STRINGS (i18n.jsx),
// LangToggle/TrustBar (Nav.jsx), AnnouncementBar (Common.jsx), Footer (Social.jsx).

// ---- page-mode top nav (real links to other html pages) ----
function PageNav({ active, onCta }) {
  const { lang } = useLang();
  const s = STRINGS[lang].nav;
  const [openNav, setOpenNav] = useState(null);
  const toggleNav = (key) => setOpenNav(o => o === key ? null : key);
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="index.html"><img className="logo" src="assets/logo-horizontal.png" alt="Amar Bank" /></a>
        <div className="nav-links">
          <span className="navlink has-drop" onClick={() => toggleNav('individu')}>
            {s.individu} <Icon name="chevron-down" size={14} />
            <div className={'dropdown' + (openNav === 'individu' ? ' open' : '')}>
              <a href="index.html#individu-tunaiku"><Icon name="hand-coins" size={14}/> {s.d_tunaiku}</a>
              <a href="index.html#individu-app"><Icon name="smartphone" size={14}/> {s.d_banking}</a>
              <a href="index.html#individu-wealth"><Icon name="user-round-cog" size={14}/> {s.d_wealth}</a>
            </div>
          </span>
          <span className="navlink has-drop" onClick={() => toggleNav('bisnis')}>
            {s.bisnis} <Icon name="chevron-down" size={14} />
            <div className={'dropdown' + (openNav === 'bisnis' ? ' open' : '')}>
              <a href="index.html#bisnis-umkm"><Icon name="store" size={14}/> {s.d_umkm}</a>
              <a href="index.html#bisnis-corp"><Icon name="building-2" size={14}/> {s.d_korporat}</a>
            </div>
          </span>
          <a className="navlink" href="index.html#platform">{s.platform}</a>
          <span className={'navlink has-drop' + (active === 'tentang' ? ' active' : '')} onClick={() => toggleNav('tentang')}>
            {s.tentang} <Icon name="chevron-down" size={14} />
            <div className={'dropdown' + (openNav === 'tentang' ? ' open' : '')}>
              <a href="perusahaan.html"><Icon name="building-2" size={14}/> {s.d_perusahaan}</a>
              <a href="tata-kelola.html"><Icon name="scale" size={14}/> {s.d_tatakelola}</a>
              <a href="hubungan-investor.html"><Icon name="trending-up" size={14}/> {s.d_investor}</a>
              <a href="karir.html"><Icon name="briefcase" size={14}/> {s.d_karier}</a>
              <a href="hubungi-kami.html"><Icon name="headphones" size={14}/> {s.d_hubungi}</a>
              <a href="blog.html"><Icon name="newspaper" size={14}/> {s.d_blog}</a>
            </div>
          </span>
        </div>
        <div className="nav-cta">
          <LangToggle />
          <a className="btn btn-bantuan" href="hubungi-kami.html">
            <Icon name="headphones" size={15}/> {s.bantuan}
          </a>
          <button className="btn btn-teal" onClick={onCta}>{s.download}</button>
        </div>
      </div>
    </nav>);
}

// ---- hero band ----
function PageHero({ chip, title, sub, crumb, actions }) {
  const { lang } = useLang();
  const home = lang === 'id' ? 'Beranda' : 'Home';
  return (
    <header className="page-hero">
      <img className="ph-mark" src="assets/logo-bo-white.png" alt="" />
      <div className="wrap">
        <div className="crumb">
          <a href="index.html">{home}</a>
          <Icon name="chevron-right" size={14}/>
          <span>{crumb}</span>
        </div>
        {chip && <div className="ph-chip"><Icon name="sparkles" size={13} color="#fff"/> {chip}</div>}
        <h1>{title}</h1>
        {sub && <p>{sub}</p>}
        {actions && <div className="ph-actions">{actions}</div>}
      </div>
    </header>);
}

// ---- closing CTA band ----
function CtaBand() {
  const { lang } = useLang();
  const s = {
    id: { h:'Siap memulai dengan Amar Bank?', p:'Unduh aplikasi Amar Bank dan rasakan layanan perbankan digital yang aman, diawasi OJK dan dijamin LPS.', d:'Download Amar Bank', c:'Hubungi Kami' },
    en: { h:'Ready to get started with Amar Bank?', p:'Download the Amar Bank app and experience secure digital banking — supervised by OJK and guaranteed by LPS.', d:'Download Amar Bank', c:'Contact Us' },
  }[lang];
  const PLAY = 'https://play.google.com/store/apps/details?id=com.senyumkubank.rekeningonline';
  return (
    <section className="page-sec">
      <div className="wrap">
        <div className="cta-band">
          <div>
            <h2>{s.h}</h2>
            <p>{s.p}</p>
          </div>
          <div className="actions">
            <a className="btn btn-teal btn-lg" href={PLAY} target="_blank" rel="noopener noreferrer"><Icon name="smartphone" size={17}/> {s.d}</a>
            <a className="btn btn-ghost" href="hubungi-kami.html" style={{background:'rgba(255,255,255,.1)',color:'#fff',borderColor:'rgba(255,255,255,.3)'}}>{s.c}</a>
          </div>
        </div>
      </div>
    </section>);
}

// ---- shell: owns language + toast, wraps a page body ----
function PageShell({ active, children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('amar_lang') || 'id'; } catch(e) { return 'id'; }
  });
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem('amar_lang', l); } catch(e) {}
    document.documentElement.lang = l;
  };
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const showToast = (msg, icon='check') => {
    setToast({ msg, icon });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  };
  const downloadCta = () => showToast(lang==='id' ? 'Mengarahkan ke halaman download aplikasi…' : 'Redirecting to app download page…','smartphone');

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="page">
        <AnnouncementBar/>
        <TrustBar show={true}/>
        <PageNav active={active} onCta={downloadCta}/>
        {typeof children === 'function' ? children({ showToast }) : children}
        <CtaBand/>
        <Footer/>
        <div className={'toast'+(toast?' show':'')}>
          {toast && <><span className="ic"><Icon name={toast.icon} size={16} color="var(--amar-green-lt)"/></span>{toast.msg}</>}
        </div>
      </div>
    </LangContext.Provider>);
}

Object.assign(window, { PageNav, PageHero, CtaBand, PageShell });

// ---- brand/social icons (lucide dropped these glyphs) ----
function BrandIcon({ name, size = 20 }) {
  const common = { width:size, height:size, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor',
    strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round' };
  switch(name){
    case 'facebook': return (<svg {...common}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
    case 'instagram': return (<svg {...common}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>);
    case 'linkedin': return (<svg {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
    case 'twitter': return (<svg {...common}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);
    case 'youtube': return (<svg {...common}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>);
    default: return <Icon name={name} size={size}/>;
  }
}
window.BrandIcon = BrandIcon;
