// INDIVIDU segment — Tunaiku calculator, app download + dynamic QR, wealth hook

function TunaikuCalc({ onTrack, onToast, banner }) {
  const { lang } = useLang();
  const s = STRINGS[lang].indiv.tunaiku;
  const [amount, setAmount] = useState(8000000);
  const [tenor, setTenor] = useState(12);
  const touched = useRef(false);
  const monthly = useMemo(() => {
    const rate = 0.03;
    return Math.round(amount * (1 + rate * tenor) / tenor);
  }, [amount, tenor]);
  const onAdj = (setter) => (e) => { touched.current = true; setter(+e.target.value); onTrack && onTrack('tunaiku_calculator_adjust'); };
  const amtPct = (amount - 2000000) / (30000000 - 2000000) * 100;
  const tenPct = (tenor - 6) / (30 - 6) * 100;
  const fill = (p) => ({ background: `linear-gradient(90deg,#1FA82C ${p}%, #E6E8EC ${p}%)` });
  const apply = () => {
    onToast(s.toast(rpShort(amount), tenor), 'arrow-up-right');
  };
  return (
    <div className="module t-indiv t-tunaiku">
      {banner && <CampaignBanner {...banner} onToast={onToast} inCard />}
      <div className="pad">
        <span className="tag"><Icon name="shield-check" size={14} /> {s.tag}</span>
        <h3>
          {s.h3_pinyaman
            ? <><span className="pinyaman-mark">Pi<em>nyaman</em></span>{s.h3_rest}</>
            : s.h3_rest}
        </h3>
        <p className="lede">{s.p_pre} <b>{s.p_bold}</b>{s.p_suf}</p>
        <div className="feat">
          <div className="row"><span className="ic"><Icon name="smile" size={16} /></span><div><b>{s.f1b}</b> <span>{s.f1s}</span></div></div>
          <div className="row"><span className="ic"><Icon name="zap" size={16} /></span><div><b>{s.f2b}</b> <span>{s.f2s}</span></div></div>
          <div className="row"><span className="ic"><Icon name="lock-keyhole" size={16} /></span><div><b>{s.f3b}</b> <span>{s.f3s}</span></div></div>
        </div>
      </div>
      <div className="calc">
        <div className="top">
          <div className="h">{s.ct}</div>
          <div className="badge"><Icon name="sparkles" size={12} /> {s.badge}</div>
        </div>
        <div className="amount"><span className="rp">Rp</span>{amount.toLocaleString('id-ID')}</div>
        <div className="sub">{s.csub}</div>
        <div className="field">
          <div className="lab"><span>{s.camount}</span><span className="v">{rpShort(amount)}</span></div>
          <input className="rng" type="range" min="2000000" max="30000000" step="500000" value={amount} onChange={onAdj(setAmount)} style={fill(amtPct)} />
        </div>
        <div className="field">
          <div className="lab"><span>{s.ctenor}</span><span className="v">{tenor} {s.cmo}</span></div>
          <input className="rng" type="range" min="6" max="30" step="1" value={tenor} onChange={onAdj(setTenor)} style={fill(tenPct)} />
        </div>
        <div className="est">
          <span className="k">{s.cest}</span>
          <span className="val">{rp(monthly)} <small>{s.cper}</small></span>
        </div>
        <button className="btn btn-amber btn-block" onClick={apply}>{s.apply} <Icon name="arrow-up-right" size={17} color="#fff" /></button>
        <a className="btn btn-tunaiku-ghost btn-block" href="https://tunaiku.com/" target="_blank" rel="noopener noreferrer">
          {s.learn} <Icon name="external-link" size={15} />
        </a>
        <div className="note">{s.note}</div>
      </div>
    </div>);
}

function AppDownload({ onToast, banner }) {
  const { lang } = useLang();
  const s = STRINGS[lang].indiv.app;
  return (
    <div className="module t-indiv t-app">
      {banner && <CampaignBanner {...banner} onToast={onToast} inCard />}
      <div className="appdl">
        <div className="pad">
          <span className="tag"><Icon name="smartphone" size={14} /> {s.tag}</span>
          <h3>{s.h3}</h3>
          <p className="lede">{s.p}</p>
          <div className="feat">
            <div className="row"><span className="ic"><Icon name="zap" size={16} /></span><div><b>{s.f1b}</b> <span>{s.f1s}</span></div></div>
            <div className="row"><span className="ic"><Icon name="lock-keyhole" size={16} /></span><div><b>{s.f2b}</b> <span>{s.f2s}</span></div></div>
            <div className="row"><span className="ic"><Icon name="sparkles" size={16} /></span><div><b>{s.f3b}</b> <span>{s.f3s}</span></div></div>
            <div className="row"><span className="ic"><Icon name="percent" size={16} /></span><div><b>{s.f4b}</b> <span>{s.f4s}</span></div></div>
          </div>
          <a className="btn btn-teal btn-lg" href="digital.html" style={{marginTop:'8px',textDecoration:'none'}}>
            <Icon name="play-circle" size={17} color="#fff" /> {s.sim}
          </a>
        </div>
        <div className="qr">
          <div className="qrbox"><QR payload="amarbank-app-dl" color="#093C69" /></div>
          <div className="ql">{s.qscan}</div>
          <div className="qs">{s.qsub}</div>
          <div className="qr-mobilehint">{s.qmobile}</div>
          <StoreButtons onClick={() => onToast(s.toast, 'smartphone')} />
        </div>
      </div>
    </div>);
}

function WealthHook({ onOpenModal }) {
  const { lang } = useLang();
  const s = STRINGS[lang].indiv.wealth;
  return (
    <div className="module t-wealth">
      <div className="pad">
        <span className="tag"><Icon name="user-round-cog" size={14} /> {s.tag}</span>
        <h3>{s.h3pre} <span className="hi-yield">{s.h3hi}</span>{s.h3suf}</h3>
        <p className="lede">{s.p}</p>
        <div className="feat">
          <div className="row"><span className="ic"><Icon name="shield-check" size={16} /></span><div><b>{s.f1b}</b> <span>{s.f1s}</span></div></div>
          <div className="row"><span className="ic"><Icon name="phone" size={16} /></span><div><b>{s.f2b}</b> <span>{s.f2s}</span></div></div>
        </div>
        <button className="btn btn-blue btn-lg" style={{ background: 'var(--deposito-from)', boxShadow: '0 8px 22px rgba(4,131,63,.3)' }} onClick={onOpenModal}>
          <Icon name="phone" size={16} color="#fff" /> {s.btn}
        </button>
      </div>
      <div className="rb-products">
        <div className="rbp-label">{s.plabel}</div>
        <div className="rbp-list">
          {s.products.map(p => (
            <div className={`rbp-item${p.hl?' rbp-item-hl':''}`} key={p.nm}>
              <div className="rbp-ic"><Icon name={p.ic} size={16}/></div>
              <div><div className="rbp-nm">{p.nm}</div><div className="rbp-ds">{p.ds}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>);
}

function IndividuPanel({ sub, setSub, onToast, onTrack, onOpenModal }) {
  const { lang } = useLang();
  const subs = STRINGS[lang].indiv.subs;
  return (
    <div className="stage-panel">
      <div className="subnav">
        {subs.map((s) =>
          <button key={s.key} className={'subchip' + (sub === s.key ? ' on' : '')}
            style={sub === s.key ? { background: s.color } : null} onClick={() => setSub(s.key)}>
            <span className="d" />{s.label}
          </button>
        )}
      </div>
      {sub === 'tunaiku' && <TunaikuCalc onTrack={onTrack} onToast={onToast} banner={{
          src: 'uploads/tunaiku-banner.webp',
          alt: 'pinyAMAN bikin enteng — beresin urusan segambreng. Tunaiku by Amar Bank, pinjam hingga Rp 30 juta.',
          toastMsg: STRINGS[lang].indiv.tunaiku.toast(rpShort(8000000), 12),
        }} />}
      {sub === 'app' && <AppDownload onToast={onToast} banner={{
          src: 'uploads/depo-instant.webp',
          alt: 'Rasain Cashback Langsung Depo Instan — nabung mulai IDR 20 juta, tenor 6 bulan.',
          toastMsg: STRINGS[lang].indiv.app.toast,
        }} />}
      {sub === 'wealth' && <WealthHook onOpenModal={() => onOpenModal('wealth')} />}
    </div>);
}

Object.assign(window, { IndividuPanel });
