// Lead-form modal — Wealth / Corporate RM / API Partnership
const MODAL_META = {
  wealth:      { cls:'green', ribbon:'var(--deposito-from)', icon:'gem',        track:'Wealth'          },
  corporate:   { cls:'gold',  ribbon:'var(--biz)',           icon:'building-2',  track:'Corporate_RM'    },
  partnership: { cls:'',      ribbon:'var(--plat)',          icon:'handshake',   track:'API_Partnership' },
};

function LeadModal({ which, onClose, onTrack }){
  const { lang } = useLang();
  const ms = STRINGS[lang].modals;
  const fs = ms.form;
  const [sent, setSent] = useState(false);
  useEffect(()=>{ setSent(false); }, [which]);
  if(!which) return null;
  const meta = MODAL_META[which];
  const cfg  = ms[which];
  const submit = (e)=>{ e.preventDefault(); onTrack && onTrack('lead_form_submitted', meta.track); setSent(true); };

  return (
    <div className={'modal-bd'+(which?' show':'')} onClick={onClose}>
      <div className={'modal '+meta.cls} onClick={e=>e.stopPropagation()}>
        <button className="x" onClick={onClose}><Icon name="x" size={18}/></button>
        {sent ? (
          <div className="mbody"><div className="success">
            <div className="big"><Icon name="check" size={30}/></div>
            <h3>{fs.success_h3}</h3>
            <p dangerouslySetInnerHTML={{__html: cfg.done}}/>
            <button className="btn btn-blue btn-block" onClick={onClose}>{fs.done_btn}</button>
          </div></div>
        ) : (<>
          <div className="mhead">
            <div className="ribbon" style={{background:meta.ribbon}}/>
            <h3>{cfg.title}</h3>
            <p>{cfg.sub}</p>
          </div>
          <form className="mbody" onSubmit={submit}>
            <div className="fld two">
              <div><label>{fs.name} <span className="req">*</span></label><input required placeholder={fs.name}/></div>
              <div><label>{fs.phone} <span className="req">*</span></label><input required type="tel" placeholder={fs.phone_ph}/></div>
            </div>
            <div className="fld"><label>{fs.email} <span className="req">*</span></label><input required type="email" placeholder="nama@email.com"/></div>
            <div className="fld">
              <label>{cfg.extra_label} <span className="req">*</span></label>
              {cfg.extra_opts ? (
                <select required defaultValue=""><option value="" disabled>{fs.select_ph}</option>{cfg.extra_opts.map(o=><option key={o}>{o}</option>)}</select>
              ) : (
                <input required placeholder={cfg.extra_ph}/>
              )}
            </div>
            <div className="pdpa"><Icon name="lock" size={14}/> {fs.pdpa}</div>
            <button type="submit" className="btn btn-blue btn-block btn-lg" style={{background:meta.ribbon}}>{cfg.cta}</button>
          </form>
        </>)}
      </div>
    </div>
  );
}

Object.assign(window, { LeadModal });
