// Lead-form modal — Wealth / Corporate RM / API Partnership
const MODAL_CFG = {
  wealth:{
    cls:'green', ribbon:'var(--deposito-from)', icon:'gem',
    title:'Hubungi Wealth Manager',
    sub:'Tinggalkan kontakmu — Wealth Manager kami akan menjadwalkan konsultasi pribadi.',
    cta:'Minta Konsultasi', track:'Wealth',
    extra:{ label:'Estimasi Nilai Investasi', type:'select',
      options:['< Rp 500 juta','Rp 500 juta – Rp 2 miliar','Rp 2 – 10 miliar','> Rp 10 miliar'] },
    done:'Permintaanmu terkirim. Wealth Manager akan menghubungimu dalam 1×24 jam kerja.',
  },
  corporate:{
    cls:'gold', ribbon:'var(--biz)', icon:'building-2',
    title:'Jadwalkan Pertemuan Korporat',
    sub:'Tim Corporate Relationship Management kami akan menindaklanjuti kebutuhan perusahaanmu.',
    cta:'Jadwalkan Pertemuan', track:'Corporate_RM',
    extra:{ label:'Nama Perusahaan', type:'text', placeholder:'PT …' },
    done:'Terima kasih. RM Korporat kami akan menghubungi perusahaanmu untuk mengatur jadwal.',
  },
  partnership:{
    cls:'', ribbon:'var(--plat)', icon:'handshake',
    title:'Hubungi Tim Kemitraan',
    sub:'Ceritakan platformmu — tim Embedded Banking kami akan merespons dengan langkah integrasi.',
    cta:'Kirim Permintaan', track:'API_Partnership',
    extra:{ label:'Nama Platform / Perusahaan', type:'text', placeholder:'Nama produk atau perusahaan' },
    done:'Permintaan diterima. Tim Kemitraan akan mengirim akses sandbox &amp; langkah berikutnya.',
  },
};

function LeadModal({ which, onClose, onTrack }){
  const [sent, setSent] = useState(false);
  useEffect(()=>{ setSent(false); }, [which]);
  if(!which) return null;
  const cfg = MODAL_CFG[which];
  const submit = (e)=>{ e.preventDefault(); onTrack && onTrack('lead_form_submitted', cfg.track); setSent(true); };
  return (
    <div className={'modal-bd'+(which?' show':'')} onClick={onClose}>
      <div className={'modal '+cfg.cls} onClick={e=>e.stopPropagation()}>
        <button className="x" onClick={onClose}><Icon name="x" size={18}/></button>
        {sent ? (
          <div className="mbody"><div className="success">
            <div className="big"><Icon name="check" size={30}/></div>
            <h3>Permintaan terkirim</h3>
            <p dangerouslySetInnerHTML={{__html:cfg.done}}/>
            <button className="btn btn-blue btn-block" onClick={onClose}>Selesai</button>
          </div></div>
        ) : (<>
          <div className="mhead">
            <div className="ribbon" style={{background:cfg.ribbon}}/>
            <h3>{cfg.title}</h3>
            <p>{cfg.sub}</p>
          </div>
          <form className="mbody" onSubmit={submit}>
            <div className="fld two">
              <div><label>Nama Lengkap <span className="req">*</span></label><input required placeholder="Nama kamu"/></div>
              <div><label>No. Telepon <span className="req">*</span></label><input required type="tel" placeholder="08xx xxxx xxxx"/></div>
            </div>
            <div className="fld"><label>Email <span className="req">*</span></label><input required type="email" placeholder="nama@email.com"/></div>
            <div className="fld">
              <label>{cfg.extra.label} <span className="req">*</span></label>
              {cfg.extra.type==='select' ? (
                <select required defaultValue=""><option value="" disabled>Pilih…</option>{cfg.extra.options.map(o=><option key={o}>{o}</option>)}</select>
              ) : (
                <input required placeholder={cfg.extra.placeholder}/>
              )}
            </div>
            <div className="pdpa"><Icon name="lock" size={14}/> Datamu dilindungi sesuai UU Pelindungan Data Pribadi (UU PDP). Kami tidak membagikan informasimu tanpa izin.</div>
            <button type="submit" className="btn btn-blue btn-block btn-lg" style={{background:cfg.ribbon}}>{cfg.cta}</button>
          </form>
        </>)}
      </div>
    </div>
  );
}

Object.assign(window, { LeadModal });
