// Main app shell — state, tweaks, jump nav, toast
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "gatewayLayout": "tabs",
  "heroVariant": "split",
  "palette": ["#1253A5", "#C9A24B", "#4FE0C0"],
  "showTrustBar": true,
  "typeScale": 1
}/*EDITMODE-END*/;

const PALETTES = [
  ["#1253A5", "#C9A24B", "#4FE0C0"],
  ["#2563EB", "#E2A93B", "#36E0C4"],
  ["#0E7C8B", "#B8893E", "#36D6E0"],
  ["#3E4DB0", "#C9A24B", "#8E9BFF"],
];

function Site(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Language state — persisted in localStorage
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('amar_lang') || 'id'; } catch(e) { return 'id'; }
  });
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem('amar_lang', l); } catch(e) {}
    document.documentElement.lang = l;
  };
  // Sync html lang on mount + handle deep-link hash from sub-pages
  useEffect(() => {
    document.documentElement.lang = lang;
    const hash = window.location.hash.replace('#','');
    if (!hash) return;
    const [pillarName, sub] = hash.split('-');
    const map = { individu:'indiv', bisnis:'biz', platform:'plat' };
    if (!map[pillarName]) return;
    setPillar(map[pillarName]);
    if (sub && pillarName === 'individu') setISub(sub);
    if (sub && pillarName === 'bisnis') setBSub(sub);
    setTimeout(() => {
      const el = document.getElementById('gateway');
      if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({ top:y, behavior:'smooth' }); }
    }, 350);
  }, []);

  const [pillar, setPillar] = useState('indiv');
  const [iSub, setISub] = useState('tunaiku');
  const [bSub, setBSub] = useState('umkm');
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const showToast = (msg, icon='check')=>{
    setToast({ msg, icon });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(()=>setToast(null), 2200);
  };
  const track = (event, label)=>{ if(window.__amarTrack) window.__amarTrack(event, label); };

  const jump = (id, sub)=>{
    const map = { individu:'indiv', bisnis:'biz', platform:'plat' };
    if(map[id]) {
      setPillar(map[id]);
      if(sub && id==='individu') setISub(sub);
      if(sub && id==='bisnis') setBSub(sub);
    }
    const el = document.getElementById('gateway');
    if(el){ const y = el.getBoundingClientRect().top + window.scrollY - 70; window.scrollTo({ top:y, behavior:'smooth' }); }
  };
  const downloadCta = ()=> showToast(lang==='id' ? 'Mengarahkan ke halaman download aplikasi…' : 'Redirecting to app download page…','smartphone');

  const [pIndiv, pBiz, pPlat] = t.palette;
  const rootStyle = {
    '--type-scale': t.typeScale,
    '--amar-blue': pIndiv,
    '--biz': pBiz,
    '--plat': pPlat,
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="site" style={rootStyle}>
        <AnnouncementBar/>
        <TrustBar show={t.showTrustBar}/>
        <Nav onCta={downloadCta} onJump={jump}/>
        <Hero variant={t.heroVariant} onCta={downloadCta} onJump={jump}/>
        <SmartGateway layout={t.gatewayLayout} pillar={pillar} setPillar={setPillar}
          iSub={iSub} setISub={setISub} bSub={bSub} setBSub={setBSub}
          onToast={showToast} onTrack={track} onOpenModal={setModal}/>
        <Proof/>
        <Testimonials/>
        <Location/>
        <Footer/>

        <LeadModal which={modal} onClose={()=>setModal(null)} onTrack={track}/>

        <div className={'toast'+(toast?' show':'')}>
          {toast && <><span className="ic"><Icon name={toast.icon} size={16} color="var(--amar-green-lt)"/></span>{toast.msg}</>}
        </div>

        <TweaksPanel title="Tweaks">
          <TweakSection label="Smart Gateway"/>
          <TweakRadio label="Triage layout" value={t.gatewayLayout}
            options={['tabs','columns','cards']} onChange={v=>setTweak('gatewayLayout', v)}/>
          <TweakSection label="Hero"/>
          <TweakRadio label="Hero variant" value={t.heroVariant}
            options={['split','centered','minimal']} onChange={v=>setTweak('heroVariant', v)}/>
          <TweakToggle label="Micro-trust bar (OJK/LPS)" value={t.showTrustBar} onChange={v=>setTweak('showTrustBar', v)}/>
          <TweakSection label="Per-pillar palette"/>
          <TweakColor label="Individu · Bisnis · Platform" value={t.palette}
            options={PALETTES} onChange={v=>setTweak('palette', v)}/>
          <TweakSection label="Typography"/>
          <TweakSlider label="Type scale" value={t.typeScale} min={0.9} max={1.15} step={0.05}
            onChange={v=>setTweak('typeScale', v)}/>
        </TweaksPanel>
      </div>
    </LangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Site/>);
