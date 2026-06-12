// Main app shell — state, tweaks, jump nav, toast
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "gatewayLayout": "tabs",
  "heroVariant": "split",
  "palette": ["#1253A5", "#C9A24B", "#4FE0C0"],
  "showTrustBar": true,
  "typeScale": 1
}/*EDITMODE-END*/;

const PALETTES = [
  ["#1253A5", "#C9A24B", "#4FE0C0"],   // brand default
  ["#2563EB", "#E2A93B", "#36E0C4"],   // vivid
  ["#0E7C8B", "#B8893E", "#36D6E0"],   // teal-forward
  ["#3E4DB0", "#C9A24B", "#8E9BFF"],   // regal indigo
];

function Site(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
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
  const track = (event, label)=>{ /* analytics hook: homepage_triage_click, tunaiku_calculator_adjust, lead_form_submitted… */
    if(window.__amarTrack) window.__amarTrack(event, label); };

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
  const downloadCta = ()=> showToast('Mengarahkan ke halaman download aplikasi…','smartphone');

  const [pIndiv, pBiz, pPlat] = t.palette;
  const rootStyle = {
    '--type-scale': t.typeScale,
    '--amar-blue': pIndiv,
    '--biz': pBiz,
    '--plat': pPlat,
  };

  return (
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
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Site/>);
