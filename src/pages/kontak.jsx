// Hubungi Kami (Contact Us) — amarbank.co.id/contact
const KT_C = {
  id: {
    chip:'Pusat Bantuan', crumb:'Hubungi Kami',
    htitle:'Hubungi Kami',
    hsub:'Punya pertanyaan, masukan, atau butuh bantuan? Tim Amar Bank siap membantu kamu. Hubungi kami melalui kanal di bawah ini.',
    ch_e:'Kanal Kontak', ch_t:'Cara menghubungi kami',
    channels:[
      { ic:'phone', k:'Telepon', v:'(021) 4000-5859', sub:'(021) 3021-0700', u:'tel:+62214000859' },
      { ic:'mail', k:'Email', v:'tanya@amarbank.co.id', u:'mailto:tanya@amarbank.co.id' },
      { ic:'file-warning', k:'Pengaduan Nasabah', v:'Prosedur Pengaduan', sub:'Lihat tata cara penyampaian pengaduan', u:'https://amarbank.co.id/prosedur-pengaduan-nasabah' },
    ],
    off_e:'Kantor Kami', off_t:'Kunjungi kantor Amar Bank',
    offices:[
      { city:'Jakarta', nm:'Kantor Cabang Satrio', addr:'RDTX Square, Lantai Dasar. Jl. Prof. Satrio No. 164, Karet Semanggi, Setiabudi, Jakarta Selatan 12930', tel:'(021) 80600086' },
      { city:'Jakarta', nm:'Kantor Fungsional Amar Bank', addr:'Multika Building, Jl. Mampang Prpt. Raya No. 71–73, Tegal Parang, Mampang Prapatan, Jakarta Selatan 12790', tel:null },
      { city:'Surabaya', nm:'Kantor Cabang Wiyung', addr:'Ruko Blok A No. 39, Jl. Raya Menganti No. 215, Wiyung, Surabaya 60229', tel:'(031) 99425775' },
      { city:'Surabaya', nm:'Kantor Cabang Basuki Rahmat', addr:'Jl. Basuki Rahmat No. 109, Surabaya 60271', tel:'(031) 99015959' },
    ],
    form_e:'Kirim Pesan', form_t:'Tinggalkan pesanmu',
    form_sub:'Isi formulir di bawah dan tim kami akan menghubungi kamu kembali secepatnya.',
    f_name:'Nama Lengkap', f_email:'Email', f_phone:'No. Telepon', f_phone_ph:'08xx xxxx xxxx', f_msg:'Pesan', f_msg_ph:'Tulis pesanmu di sini…',
    f_btn:'Kirim Pesan', f_sent:'Pesanmu terkirim. Tim kami akan menghubungi kamu segera.',
    soc_t:'Ikuti Kami',
    pdpa:'Data yang kamu kirim dilindungi sesuai UU Pelindungan Data Pribadi (UU PDP).',
  },
  en: {
    chip:'Help Center', crumb:'Contact Us',
    htitle:'Contact Us',
    hsub:'Have a question, feedback, or need help? The Amar Bank team is ready to assist. Reach us through the channels below.',
    ch_e:'Contact Channels', ch_t:'How to reach us',
    channels:[
      { ic:'phone', k:'Phone', v:'(021) 4000-5859', sub:'(021) 3021-0700', u:'tel:+62214000859' },
      { ic:'mail', k:'Email', v:'tanya@amarbank.co.id', u:'mailto:tanya@amarbank.co.id' },
      { ic:'file-warning', k:'Customer Complaints', v:'Complaint Procedure', sub:'See how to submit a complaint', u:'https://amarbank.co.id/prosedur-pengaduan-nasabah' },
    ],
    off_e:'Our Offices', off_t:'Visit an Amar Bank office',
    offices:[
      { city:'Jakarta', nm:'Satrio Branch Office', addr:'RDTX Square, Ground Floor. Jl. Prof. Satrio No. 164, Karet Semanggi, Setiabudi, South Jakarta 12930', tel:'(021) 80600086' },
      { city:'Jakarta', nm:'Amar Bank Functional Office', addr:'Multika Building, Jl. Mampang Prpt. Raya No. 71–73, Tegal Parang, Mampang Prapatan, South Jakarta 12790', tel:null },
      { city:'Surabaya', nm:'Wiyung Branch Office', addr:'Ruko Blok A No. 39, Jl. Raya Menganti No. 215, Wiyung, Surabaya 60229', tel:'(031) 99425775' },
      { city:'Surabaya', nm:'Basuki Rahmat Branch Office', addr:'Jl. Basuki Rahmat No. 109, Surabaya 60271', tel:'(031) 99015959' },
    ],
    form_e:'Send a Message', form_t:'Leave us a message',
    form_sub:'Fill out the form below and our team will get back to you as soon as possible.',
    f_name:'Full Name', f_email:'Email', f_phone:'Phone Number', f_phone_ph:'08xx xxxx xxxx', f_msg:'Message', f_msg_ph:'Write your message here…',
    f_btn:'Send Message', f_sent:'Your message has been sent. Our team will contact you soon.',
    soc_t:'Follow Us',
    pdpa:'The data you submit is protected under the Personal Data Protection Law (PDP Law).',
  },
};

const SOCIALS_KT = [
  { ic:'facebook', u:'https://www.facebook.com/amarbankindonesia' },
  { ic:'instagram', u:'https://www.instagram.com/amarbank.id/' },
  { ic:'linkedin', u:'https://www.linkedin.com/company/amar-bank-official-/' },
  { ic:'twitter', u:'https://twitter.com/amarbankID' },
  { ic:'youtube', u:'https://www.youtube.com/channel/UCKK0NKKDdsCLgUQ0nhTilKQ' },
];

function HubungiKami({ showToast }){
  const { lang } = useLang();
  const c = KT_C[lang];
  const submit = (e)=>{ e.preventDefault(); e.target.reset(); showToast(c.f_sent, 'check'); };
  return (
    <main>
      <PageHero chip={c.chip} crumb={c.crumb} title={c.htitle} sub={c.hsub}/>

      {/* channels */}
      <section className="page-sec">
        <div className="wrap">
          <div className="sec-eyebrow">{c.ch_e}</div>
          <h2 className="sec-title" style={{marginBottom:'30px'}}>{c.ch_t}</h2>
          <div className="card-grid c3">
            {c.channels.map(ch=>(
              <a className="cc" href={ch.u} target="_blank" rel="noopener noreferrer" key={ch.k} style={{flexDirection:'column',alignItems:'flex-start',gap:'14px'}}>
                <div className="ico"><Icon name={ch.ic} size={24} color="#fff"/></div>
                <div>
                  <div className="k">{ch.k}</div>
                  <div className="v">{ch.v}</div>
                  {ch.sub && <div style={{fontSize:'13.5px',color:'var(--ink-2)',marginTop:'3px'}}>{ch.sub}</div>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* form + social */}
      <section className="page-sec tint">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <div className="sec-eyebrow">{c.form_e}</div>
              <h2 className="sec-title">{c.form_t}</h2>
              <p className="sec-lede" style={{marginBottom:'24px'}}>{c.form_sub}</p>
              <div style={{marginTop:'8px'}}>
                <h3 style={{fontSize:'16px',fontWeight:700,margin:'0 0 14px',color:'var(--ink)'}}>{c.soc_t}</h3>
                <div className="social-row">
                  {SOCIALS_KT.map(s=>(
                    <a href={s.u} target="_blank" rel="noopener noreferrer" key={s.ic} aria-label={s.ic}><BrandIcon name={s.ic} size={20}/></a>
                  ))}
                </div>
              </div>
            </div>
            <form className="cform" onSubmit={submit}>
              <h3>{c.form_t}</h3>
              <p className="cf-sub">{c.form_sub}</p>
              <div className="fld"><label>{c.f_name}</label><input type="text" required/></div>
              <div className="fld two">
                <div><label>{c.f_email}</label><input type="email" required/></div>
                <div><label>{c.f_phone}</label><input type="tel" placeholder={c.f_phone_ph}/></div>
              </div>
              <div className="fld"><label>{c.f_msg}</label>
                <textarea rows="4" placeholder={c.f_msg_ph} required
                  style={{width:'100%',border:'1.5px solid var(--line-2)',borderRadius:'var(--r-md)',padding:'12px 14px',fontFamily:'inherit',fontSize:'14.5px',color:'var(--ink)',resize:'vertical'}}></textarea>
              </div>
              <div className="modal" style={{boxShadow:'none',padding:0,background:'transparent',maxWidth:'none'}}>
                <div className="pdpa" style={{margin:'2px 0 16px'}}><Icon name="shield-check" size={15}/> {c.pdpa}</div>
              </div>
              <button type="submit" className="btn btn-blue btn-block">{c.f_btn} <Icon name="send" size={16}/></button>
            </form>
          </div>
        </div>
      </section>

      {/* offices */}
      <section className="page-sec">
        <div className="wrap">
          <div className="sec-eyebrow">{c.off_e}</div>
          <h2 className="sec-title" style={{marginBottom:'32px'}}>{c.off_t}</h2>
          <div className="office-grid">
            {c.offices.map(o=>(
              <div className="office" key={o.nm}>
                <div className="city"><Icon name="map-pin" size={14}/> {o.city}</div>
                <h3>{o.nm}</h3>
                <p>{o.addr}</p>
                {o.tel && <div className="tel"><Icon name="phone" size={15}/> {o.tel}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <PageShell active="tentang">{({ showToast }) => <HubungiKami showToast={showToast}/>}</PageShell>
);
