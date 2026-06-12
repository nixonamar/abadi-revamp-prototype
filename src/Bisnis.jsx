// BISNIS segment — premium navy world: eligibility checker + corporate RM
const BIZ_SUBS = [
  { key:'umkm', label:'UMKM & Startup (< Rp5 M)' },
  { key:'corp', label:'Korporat (> Rp5 M)' },
];

function EligibilityChecker({ onTrack, onToast }){
  const [omset, setOmset] = useState('');
  const [lama, setLama] = useState('');
  const [modal, setModal] = useState('');
  const done = omset && lama && modal;
  // big-need or large turnover routes to RM; otherwise self-serve digital
  const routeRM = done && (omset==='>5m' || modal==='>2m');
  const submit = ()=>{ if(done){ onTrack && onTrack('lead_form_submitted','Business_Eligibility'); } };
  return (
    <div className="elig">
      <h4><Icon name="clipboard-check" size={18} color="var(--biz)"/> Cek Kualifikasi Bisnis</h4>
      <div className="steps">3 langkah singkat — tanpa komitmen, hasil instan.</div>

      <div className="qrow">
        <label>1 · Omset Tahunan</label>
        <div className="selwrap">
          <select value={omset} onChange={e=>setOmset(e.target.value)}>
            <option value="" disabled>Pilih rentang omset…</option>
            <option value="<500jt">Di bawah Rp 500 juta</option>
            <option value="500jt-2m">Rp 500 juta – Rp 2 miliar</option>
            <option value="2m-5m">Rp 2 – 5 miliar</option>
            <option value=">5m">Di atas Rp 5 miliar</option>
          </select>
          <span className="chev"><Icon name="chevron-down" size={16}/></span>
        </div>
      </div>

      <div className="qrow">
        <label>2 · Lama Usaha</label>
        <div className="selwrap">
          <select value={lama} onChange={e=>setLama(e.target.value)}>
            <option value="" disabled>Pilih lama usaha…</option>
            <option value="<1">Kurang dari 1 tahun</option>
            <option value="1-3">1 – 3 tahun</option>
            <option value="3-5">3 – 5 tahun</option>
            <option value=">5">Lebih dari 5 tahun</option>
          </select>
          <span className="chev"><Icon name="chevron-down" size={16}/></span>
        </div>
      </div>

      <div className="qrow">
        <label>3 · Kebutuhan Modal</label>
        <div className="selwrap">
          <select value={modal} onChange={e=>setModal(e.target.value)}>
            <option value="" disabled>Pilih kebutuhan modal…</option>
            <option value="<500jt">Di bawah Rp 500 juta</option>
            <option value="500jt-2m">Rp 500 juta – Rp 2 miliar</option>
            <option value=">2m">Di atas Rp 2 miliar</option>
          </select>
          <span className="chev"><Icon name="chevron-down" size={16}/></span>
        </div>
      </div>

      <button className="btn btn-gold btn-block" style={{opacity:done?1:.55,pointerEvents:done?'auto':'none'}} onClick={submit}>
        Cek Kualifikasi Bisnis <Icon name="arrow-right" size={16} color="#241a05"/>
      </button>

      <div className={'result '+(done?(routeRM?'rm show':'ok show'):'')}>
        <div className="inner">
          <div className="ic"><Icon name={routeRM?'briefcase':'check'} size={18}/></div>
          <div>
            {routeRM ? (<>
              <h5>Bisnismu cocok untuk pendampingan korporat</h5>
              <p>Skala usahamu sebaiknya ditangani Relationship Manager khusus untuk solusi treasury &amp; pembiayaan besar.</p>
              <button className="btn btn-gold" onClick={()=>onToast('Mengarahkan ke jadwal RM Korporat…','calendar')}>Jadwalkan dengan RM</button>
            </>) : (<>
              <h5>Kamu siap pakai Business Digital Banking</h5>
              <p>Buka rekening bisnis digital dan akses modal kerja langsung dari aplikasi — tanpa antre cabang.</p>
              <a className="btn btn-gold" href="https://play.google.com/store/apps/details?id=id.co.amarbank.smb&hl=id" target="_blank" rel="noopener noreferrer"><Icon name="smartphone" size={15} color="#241a05"/> Download Amar Bank Bisnis</a>
            </>)}
          </div>
        </div>
      </div>

      <div className="pdpa"><Icon name="lock" size={13}/> Data yang kamu isi dilindungi sesuai UU Pelindungan Data Pribadi (UU PDP). Tidak ada komitmen mengikat.</div>
    </div>
  );
}

function UMKMModule({ onToast }){
  return (
    <div className="biz-mod">
      <div>
        <span className="tag"><Icon name="store" size={14}/> Business Digital Banking</span>
        <h3>Modal &amp; rekening bisnis, secepat geser layar.</h3>
        <p className="lede">Untuk UMKM dan startup dengan omset di bawah Rp 5 miliar. Buka rekening bisnis, kelola arus kas, dan ajukan modal kerja — semua digital.</p>
        <div className="biz-pillars">
          <div className="biz-pillar"><div className="ic"><Icon name="wallet" size={18}/></div><h4>Rekening bisnis digital</h4><p>Buka tanpa ke cabang, gratis biaya admin.</p></div>
          <div className="biz-pillar"><div className="ic"><Icon name="trending-up" size={18}/></div><h4>Modal kerja cepat</h4><p>Akses pembiayaan untuk pertumbuhan usaha.</p></div>
        </div>
      </div>
      <div className="biz-play-col">
        <div className="biz-play-card">
          <div className="biz-play-logo">
            <img src="uploads/pasted-1781178674781-0.png" alt="Amar Bank Bisnis" style={{width:72,height:72,borderRadius:18}}/>
          </div>
          <div className="biz-play-title">Amar Bank Bisnis</div>
          <div className="biz-play-sub">Kelola bisnis dari genggamanmu</div>
          <a
            className="store"
            href="https://play.google.com/store/apps/details?id=id.co.amarbank.smb&hl=id"
            target="_blank"
            rel="noopener noreferrer"
            style={{width:'100%',maxWidth:220,justifyContent:'center'}}
          >
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
  const pillars = [
    { ic:'banknote', h:'Treasury & Cash Mgmt', p:'Likuiditas, payroll, dan kelola kas terpusat.' },
    { ic:'landmark', h:'Large-Ticket Loans', p:'Fasilitas kredit di atas Rp 5 Milyar.' },
    { ic:'arrow-left-right', h:'Trade & FX', p:'Transaksi valas dan pembiayaan perdagangan.' },
    { ic:'shield-check', h:'Risk & Governance', p:'Kontrol akses berlapis & otorisasi.' },
  ];
  return (
    <div className="biz-mod">
      <div>
        <span className="tag"><Icon name="building-2" size={14}/> Corporate Relationship Banking</span>
        <h3>Solusi perbankan untuk skala enterprise.</h3>
        <p className="lede">Untuk perusahaan menengah hingga besar dengan kebutuhan di atas Rp 5 miliar. Didampingi Relationship Manager khusus dan tim treasury Amar.</p>
        <div className="biz-certs" style={{marginTop:0,borderTop:0,paddingTop:0,marginBottom:24}}>
          <span className="lbl">Tersertifikasi</span>
          <span className="cert"><Icon name="badge-check" size={13}/> ISO 27001</span>
          <span className="cert"><Icon name="badge-check" size={13}/> TÜV Rheinland</span>
        </div>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          <button className="btn btn-gold" onClick={()=>onOpenModal('corporate')}><Icon name="calendar-clock" size={16} color="#241a05"/> Jadwalkan Pertemuan Korporat</button>
          <button className="btn btn-outline-w" onClick={()=>onOpenModal('corporate')}>Bicara dengan RM</button>
        </div>
      </div>
      <div className="biz-pillars" style={{gridTemplateColumns:'1fr 1fr'}}>
        {pillars.map(p=>(
          <div className="biz-pillar" key={p.h}><div className="ic"><Icon name={p.ic} size={18}/></div><h4>{p.h}</h4><p>{p.p}</p></div>
        ))}
      </div>
    </div>
  );
}

function BisnisPanel({ sub, setSub, onToast, onTrack, onOpenModal }){
  return (
    <div className="stage-panel">
      <CampaignBanner
        src="uploads/amar-bank-bisnis-banner.webp"
        alt="Ada yang BARU dari Amar Bank! Kenalin, Amar Bank Bisnis — pinjaman usaha hingga Rp5 Miliar."
        onToast={onToast}
        toastMsg="Membuka Amar Bank Bisnis — pelajari selengkapnya…"
      />
      <div className="biz-world">
        <div className="subnav">
          {BIZ_SUBS.map(s=>(
            <button key={s.key} className={'subchip'+(sub===s.key?' on':'')} onClick={()=>setSub(s.key)}>{s.label}</button>
          ))}
        </div>
        {sub==='umkm' ? <UMKMModule onToast={onToast}/> : <CorporateModule onOpenModal={onOpenModal}/>}
      </div>
    </div>
  );
}

Object.assign(window, { BisnisPanel, BIZ_SUBS });
