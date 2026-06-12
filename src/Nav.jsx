// Top micro-trust bar + sticky nav + slim hero
const PILLARS = [
{ key: 'indiv', tt: 'Untuk Individu', ts: 'Personal & wealth' },
{ key: 'biz', tt: 'Untuk Bisnis', ts: 'UMKM & korporat' },
{ key: 'plat', tt: 'Untuk Platform', ts: 'Embedded banking' }];


function TrustBar({ show }) {
  if (!show) return null;
  return (
    <div className="trustbar">
      <div className="wrap">
        <span className="seal"><Icon name="shield-check" size={15} /> Berizin &amp; diawasi <b>OJK</b></span>
        <span className="dot" />
        <span className="seal"><Icon name="landmark" size={15} /> Peserta penjaminan <b>LPS</b></span>
        <span className="dot full" />
        <span className="full" style={{ opacity: .7 }}>PT Bank Amar Indonesia Tbk — simpanan dijamin hingga Rp 2 miliar</span>
      </div>
    </div>);

}

function Nav({ onCta, onJump }) {
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
            Individu <Icon name="chevron-down" size={14} />
            <div className={'dropdown' + (openNav==='individu' ? ' open' : '')}>
              <span onClick={e=>{e.stopPropagation();jumpTo('individu','tunaiku')}}><Icon name="hand-coins" size={14}/> Pinyaman Tunaiku</span>
              <span onClick={e=>{e.stopPropagation();jumpTo('individu','app')}}><Icon name="smartphone" size={14}/> Banking Digital</span>
              <span onClick={e=>{e.stopPropagation();jumpTo('individu','wealth')}}><Icon name="user-round-cog" size={14}/> Relationship Banking</span>
            </div>
          </span>
          <span className="navlink has-drop" onClick={() => toggleNav('bisnis')}>
            Bisnis <Icon name="chevron-down" size={14} />
            <div className={'dropdown' + (openNav==='bisnis' ? ' open' : '')}>
              <span onClick={e=>{e.stopPropagation();jumpTo('bisnis','umkm')}}><Icon name="store" size={14}/> UMKM &amp; Startup</span>
              <span onClick={e=>{e.stopPropagation();jumpTo('bisnis','corp')}}><Icon name="building-2" size={14}/> Korporat</span>
            </div>
          </span>
          <span className="navlink" onClick={() => jumpTo('platform', null)}>Platform</span>
          <span className="navlink has-drop" onClick={() => toggleNav('lainnya')}>
            Lainnya <Icon name="chevron-down" size={15} />
            <div className={'dropdown' + (openNav==='lainnya' ? ' open' : '')}>
              <span>Tentang Kami</span><span>Tunaiku</span><span>Karier</span><span>Hubungi Kami</span>
            </div>
          </span>
        </div>
        <div className="nav-cta">
          <a className="btn btn-bantuan" href="https://amarbank.co.id/contact" target="_blank" rel="noopener noreferrer"><Icon name="headphones" size={15}/> Bantuan</a>
          <button className="btn btn-teal" onClick={onCta}>Download Amar Bank</button>
        </div>
      </div>
    </nav>);

}

function Hero({ variant, onCta, onJump }) {
  return (
    <header className="hero" data-variant={variant}>
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="hero-eyebrow">
              <span className="pin"><Icon name="sparkles" size={13} color="#fff" /> Pinyaman &amp; Deposito 9%</span>
              Dua kekuatan finansial, satu bank
            </div>
            <h1>Pinjaman <span className="hi-nyaman">nyaman</span>,<br /><span className="grad">deposito 9% via app.</span></h1>
            <p>Ajukan pinjaman tanpa agunan yang benar-benar nyaman lewat Tunaiku, atau kembangkan dana dengan deposito hingga 9% per tahun langsung dari aplikasi Amar Bank. Diawasi OJK, dijamin LPS.</p>
            <div className="hero-actions">
              <button className="btn btn-blue btn-lg" onClick={() => onJump('gateway')}>Mulai dari kebutuhanmu</button>
              <button className="hero-jump" onClick={onCta}>Download aplikasi <Icon name="arrow-right" size={17} /></button>
            </div>

          </div>
          <div className="hero-art">
            <div className="hero-canvas">
              <img className="hero-mark" src="assets/logo-bo-silhouette.png" alt="" />
              <img className="hero-photo" src="assets/hero-ambassador.png" alt="Brand ambassador Amar Bank" />
            </div>
            <div className="hero-orbit"><span className="ic"><Icon name="trending-up" size={16} color="#fff" /></span> Deposito · <b>hingga 9%</b> p.a.</div>
            <div className="hero-flag">
              <img src="assets/logo-mark.png" alt="" />
              <div className="t"><b>Aman dengan Amar</b>Diawasi OJK · Dijamin LPS</div>
            </div>
          </div>
        </div>
      </div>
    </header>);

}

Object.assign(window, { TrustBar, Nav, Hero, PILLARS });