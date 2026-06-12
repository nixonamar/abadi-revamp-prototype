// SMART GATEWAY — triage selector (3 layout variants) + segment stage
const GW_META = {
  indiv:{ icon:'user-round', h:'Untuk Individu', p:'Pinyaman Tunaiku — pinjam lebih nyaman tanpa agunan, plus Banking Digital dengan deposito 9% p.a. via app.' },
  biz:  { icon:'briefcase', h:'Untuk Bisnis',   p:'Dari UMKM hingga korporat — rekening, modal, dan treasury.' },
  plat: { icon:'code-xml',  h:'Untuk Platform', p:'Embedded banking & API untuk produk teknologimu.' },
};

function SmartGateway({ layout, pillar, setPillar, iSub, setISub, bSub, setBSub, onToast, onTrack, onOpenModal }){
  // iSub and bSub are now lifted to App.jsx for nav-driven sub-tab switching

  const pick = (k)=>{ setPillar(k); onTrack && onTrack('homepage_triage_click', GW_META[k].h); };

  const Selector = () => {
    if(layout==='columns') return (
      <div className="gw-cols">
        {PILLARS.map(p=>(
          <button key={p.key} className={`gw-col ${p.key}${pillar===p.key?' on':''}`} onClick={()=>pick(p.key)}>
            <div className={`gi ${p.key}`}><Icon name={GW_META[p.key].icon} size={22} color="#fff"/></div>
            <h3>{GW_META[p.key].h}</h3>
            <p>{GW_META[p.key].p}</p>
            <span className="pick">{pillar===p.key?'Sedang dilihat':'Pilih jalur ini'} <Icon name="arrow-right" size={14}/></span>
          </button>
        ))}
      </div>
    );
    if(layout==='cards') return (
      <div className="gw-cards">
        {PILLARS.map(p=>(
          <div key={p.key} className={`gw-card ${p.key}${pillar===p.key?' on':''}`} onClick={()=>pick(p.key)}>
            <span className="gi"><Icon name={GW_META[p.key].icon} size={26} color="#fff"/></span>
            <span className="chk"><Icon name="check" size={15}/></span>
            <h3>{GW_META[p.key].h}</h3>
            <p>{GW_META[p.key].p}</p>
          </div>
        ))}
      </div>
    );
    // tabs (default)
    return (
      <div className="gw-tabs">
        {PILLARS.map(p=>(
          <button key={p.key} className={`gw-tab ${p.key}${pillar===p.key?' on':''}`} onClick={()=>pick(p.key)}>
            <span className="tt">{p.tt}</span><span className="ts">{p.ts}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="gateway" id="gateway">
      <div className="wrap">
        <div className="gw-head">
          <div className="eyebrow">Smart Gateway</div>
          <h2>Mulai dari siapa kamu.</h2>
          <p>Pilih jalurmu — kami tunjukkan produk yang paling tepat, tanpa berputar di menu.</p>
        </div>
        <Selector/>
        <div className="stage">
          <div id="individu" style={{scrollMarginTop:90}}/>
          <div id="bisnis" style={{scrollMarginTop:90}}/>
          <div id="platform" style={{scrollMarginTop:90}}/>
          {pillar==='indiv' && <IndividuPanel sub={iSub} setSub={setISub} onToast={onToast} onTrack={onTrack} onOpenModal={onOpenModal}/>}
          {pillar==='biz'   && <BisnisPanel  sub={bSub} setSub={setBSub} onToast={onToast} onTrack={onTrack} onOpenModal={onOpenModal}/>}
          {pillar==='plat'  && <PlatformPanel onOpenModal={onOpenModal} onToast={onToast}/>}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SmartGateway, GW_META });
