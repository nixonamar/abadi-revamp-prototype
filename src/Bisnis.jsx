// BISNIS segment — premium navy world: eligibility checker + corporate RM

function EligibilityChecker({ onTrack, onToast }){
  const { lang } = useLang();
  const s = STRINGS[lang].bisnis.elig;
  const [omset, setOmset] = useState('');
  const [lama,  setLama]  = useState('');
  const [modal, setModal] = useState('');
  const done = omset && lama && modal;
  const routeRM = done && (omset==='>5m' || modal==='>2m');
  const submit = ()=>{ if(done){ onTrack && onTrack('lead_form_submitted','Business_Eligibility'); } };
  return (
    <div className="elig">
      <h4><Icon name="clipboard-check" size={18} color="var(--biz)"/> {s.h4}</h4>
      <div className="steps">{s.steps}</div>
      <div className="qrow">
        <label>{s.q1}</label>
        <div className="selwrap">
          <select value={omset} onChange={e=>setOmset(e.target.value)}>
            <option value="" disabled>{s.q1ph}</option>
            {s.q1o.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}
          </select>
          <span className="chev"><Icon name="chevron-down" size={16}/></span>
        </div>
      </div>
      <div className="qrow">
        <label>{s.q2}</label>
        <div className="selwrap">
          <select value={lama} onChange={e=>setLama(e.target.value)}>
            <option value="" disabled>{s.q2ph}</option>
            {s.q2o.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}
          </select>
          <span className="chev"><Icon name="chevron-down" size={16}/></span>
        </div>
      </div>
      <div className="qrow">
        <label>{s.q3}</label>
        <div className="selwrap">
          <select value={modal} onChange={e=>setModal(e.target.value)}>
            <option value="" disabled>{s.q3ph}</option>
            {s.q3o.map(o=><option key={o.v} value={o.v}>{o.l}</option>)}
          </select>
          <span className="chev"><Icon name="chevron-down" size={16}/></span>
        </div>
      </div>
      <button className="btn btn-gold btn-block" style={{opacity:done?1:.55,pointerEvents:done?'auto':'none'}} onClick={submit}>
        {s.btn} <Icon name="arrow-right" size={16} color="#241a05"/>
      </button>
      <div className={'result '+(done?(routeRM?'rm show':'ok show'):'')}>
        <div className="inner">
          <div className="ic"><Icon name={routeRM?'briefcase':'check'} size={18}/></div>
          <div>
            {routeRM ? (<>
              <h5>{s.rm_h5}</h5>
              <p>{s.rm_p}</p>
              <button className="btn btn-gold" onClick={()=>onToast(s.rm_toast,'calendar')}>{s.rm_btn}</button>
            </>) : (<>
              <h5>{s.ok_h5}</h5>
              <p>{s.ok_p}</p>
              <a className="btn btn-gold" href="https://play.google.com/store/apps/details?id=id.co.amarbank.smb&hl=id" target="_blank" rel="noopener noreferrer"><Icon name="smartphone" size={15} color="#241a05"/> {s.ok_btn}</a>
            </>)}
          </div>
        </div>
      </div>
      <div className="pdpa"><Icon name="lock" size={13}/> {s.pdpa}</div>
    </div>
  );
}

function UMKMModule({ onToast }){
  const { lang } = useLang();
  const s = STRINGS[lang].bisnis.umkm;
  return (
    <div className="biz-mod">
      <div>
        <span className="tag"><Icon name="store" size={14}/> {s.tag}</span>
        <h3>{s.h3}</h3>
        <p className="lede">{s.p}</p>
        <div className="biz-pillars">
          <div className="biz-pillar"><div className="ic"><Icon name="wallet" size={18}/></div><h4>{s.p1h}</h4><p>{s.p1p}</p></div>
          <div className="biz-pillar"><div className="ic"><Icon name="trending-up" size={18}/></div><h4>{s.p2h}</h4><p>{s.p2p}</p></div>
        </div>
      </div>
      <div className="biz-play-col">
        <div className="biz-play-card">
          <div className="biz-play-logo">
            <img src="uploads/pasted-1781178674781-0.png" alt="Amar Bank Bisnis" style={{width:72,height:72,borderRadius:18}}/>
          </div>
          <div className="biz-play-title">{s.app_title}</div>
          <div className="biz-play-sub">{s.app_sub}</div>
          <a className="store" href="https://play.google.com/store/apps/details?id=id.co.amarbank.smb&hl=id" target="_blank" rel="noopener noreferrer" style={{width:'100%',maxWidth:220,justifyContent:'center'}}>
            <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M3.18 23.76c.3.17.64.22.98.15l13.2-11.91L13.88 8.5 3.18 23.76zm17.14-11.34L17.5 11l-3.77 3.41 3.77 3.41 2.85-1.43a1.32 1.32 0 0 0 0-2.36zM3.02.23a1.3 1.3 0 0 0-.2.74v22.06c0 .28.07.53.2.74l.08.07L16.41 12v-.31L3.1.16l-.08.07z"/></svg>
            <div>
              <div style={{fontSize:10,opacity:.8,lineHeight:1}}>GET IT ON</div>
              <div style={{fontSize:15,fontWeight:700,lineHeight:1.2}}>Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function CorporateModule({ onOpenModal }){
  const { lang } = useLang();
  const s = STRINGS[lang].bisnis.corp;
  return (
    <div className="biz-mod">
      <div>
        <span className="tag"><Icon name="building-2" size={14}/> {s.tag}</span>
        <h3>{s.h3}</h3>
        <p className="lede">{s.p}</p>
        <div className="biz-certs" style={{marginTop:0,borderTop:0,paddingTop:0,marginBottom:24}}>
          <span className="lbl">{s.certified}</span>
          <span className="cert"><Icon name="badge-check" size={13}/> ISO 27001</span>
          <span className="cert"><Icon name="badge-check" size={13}/> TÜV Rheinland</span>
        </div>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <button className="btn btn-gold" onClick={()=>onOpenModal('corporate')}><Icon name="calendar-clock" size={16} color="#241a05"/> {s.btn1}</button>
          <button className="btn btn-outline-w" onClick={()=>onOpenModal('corporate')}>{s.btn2}</button>
        </div>
      </div>
      <div className="biz-pillars" style={{gridTemplateColumns:'1fr 1fr'}}>
        {s.pillars.map(p=>(
          <div className="biz-pillar" key={p.h}><div className="ic"><Icon name={p.ic} size={18}/></div><h4>{p.h}</h4><p>{p.p}</p></div>
        ))}
      </div>
    </div>
  );
}

function BisnisPanel({ sub, setSub, onToast, onTrack, onOpenModal }){
  const { lang } = useLang();
  const subs = STRINGS[lang].bisnis.subs;
  const bannerToast = STRINGS[lang].bisnis.banner_toast;
  return (
    <div className="stage-panel">
      <CampaignBanner
        src="uploads/amar-bank-bisnis-banner.webp"
        alt="Ada yang BARU dari Amar Bank! Kenalin, Amar Bank Bisnis — pinjaman usaha hingga Rp5 Miliar."
        onToast={onToast}
        toastMsg={bannerToast}
      />
      <div className="biz-world">
        <div className="subnav">
          {subs.map(s=>(
            <button key={s.key} className={'subchip'+(sub===s.key?' on':'')} onClick={()=>setSub(s.key)}>{s.label}</button>
          ))}
        </div>
        {sub==='umkm' ? <UMKMModule onToast={onToast}/> : <CorporateModule onOpenModal={onOpenModal}/>}
      </div>
    </div>
  );
}

Object.assign(window, { BisnisPanel });
