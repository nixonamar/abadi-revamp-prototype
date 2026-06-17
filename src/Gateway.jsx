// SMART GATEWAY — triage selector (3 layout variants) + segment stage
const GW_ICONS = { indiv:'user-round', biz:'briefcase', plat:'code-xml' };

function SmartGateway({ layout, pillar, setPillar, iSub, setISub, bSub, setBSub, onToast, onTrack, onOpenModal }){
  const { lang } = useLang();
  const s = STRINGS[lang].gateway;

  const pick = (k)=>{ setPillar(k); onTrack && onTrack('homepage_triage_click', s.meta[k].h); };
  const keys = ['indiv','biz','plat'];

  const Selector = () => {
    if(layout==='columns') return (
      <div className="gw-cols">
        {keys.map(k=>(
          <button key={k} className={`gw-col ${k}${pillar===k?' on':''}`} onClick={()=>pick(k)}>
            <div className={`gi ${k}`}><Icon name={GW_ICONS[k]} size={22} color="#fff"/></div>
            <h3>{s.meta[k].h}</h3>
            <p>{s.meta[k].p}</p>
            <span className="pick">{pillar===k ? s.viewing : s.choose} <Icon name="arrow-right" size={14}/></span>
          </button>
        ))}
      </div>
    );
    if(layout==='cards') return (
      <div className="gw-cards">
        {keys.map(k=>(
          <div key={k} className={`gw-card ${k}${pillar===k?' on':''}`} onClick={()=>pick(k)}>
            <span className="gi"><Icon name={GW_ICONS[k]} size={26} color="#fff"/></span>
            <span className="chk"><Icon name="check" size={15}/></span>
            <h3>{s.meta[k].h}</h3>
            <p>{s.meta[k].p}</p>
          </div>
        ))}
      </div>
    );
    // tabs (default)
    return (
      <div className="gw-tabs">
        {keys.map(k=>(
          <button key={k} className={`gw-tab ${k}${pillar===k?' on':''}`} onClick={()=>pick(k)}>
            <span className="tt">{s.pillars[k].tt}</span>
            <span className="ts">{s.pillars[k].ts}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="gateway" id="gateway">
      <div className="wrap">
        <div className="gw-head">
          <div className="eyebrow">{s.eyebrow}</div>
          <h2>{s.h2}</h2>
          <p>{s.p}</p>
        </div>
        <Selector/>
        <div className="stage">
          <div id="individu" style={{scrollMarginTop:90}}/>
          <div id="bisnis"   style={{scrollMarginTop:90}}/>
          <div id="platform" style={{scrollMarginTop:90}}/>
          {pillar==='indiv' && <IndividuPanel sub={iSub} setSub={setISub} onToast={onToast} onTrack={onTrack} onOpenModal={onOpenModal}/>}
          {pillar==='biz'   && <BisnisPanel  sub={bSub} setSub={setBSub} onToast={onToast} onTrack={onTrack} onOpenModal={onOpenModal}/>}
          {pillar==='plat'  && <PlatformPanel onOpenModal={onOpenModal} onToast={onToast}/>}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SmartGateway, GW_ICONS });
