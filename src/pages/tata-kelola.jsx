// Tata Kelola Perusahaan (Corporate Governance) — amarbank.co.id/tata-kelola-perusahaan
const TK_C = {
  id: {
    chip:'Good Corporate Governance', crumb:'Tata Kelola Perusahaan',
    htitle:'Tata Kelola Perusahaan',
    hsub:'Amar Bank berkomitmen menerapkan tata kelola perusahaan yang baik secara konsisten dan menyeluruh — menjunjung transparansi, akuntabilitas, dan integritas sebagai fondasi kepercayaan nasabah dan pemangku kepentingan.',
    sec_e:'Pedoman & Kebijakan', sec_t:'Pilar tata kelola kami',
    more:'Lihat Lebih Lanjut',
    items:[
      { ic:'users', h:'RUPS dan RUPSLB', u:'https://amarbank.co.id/rups-rupslb-id' },
      { ic:'git-merge', h:'Aksi Korporasi', u:'https://amarbank.co.id/aksi-korporasi' },
      { ic:'book-text', h:'Pedoman dan Tata Tertib', u:'https://amarbank.co.id/pedoman-dan-tata-tertib' },
      { ic:'users-round', h:'Komite di bawah Dewan Komisaris', u:'https://amarbank.co.id/komite-di-bawah-dewan-komisaris' },
      { ic:'megaphone', h:'Whistle Blowing System', u:'https://amarbank.co.id/whistleblowing' },
      { ic:'scale', h:'Kode Etik', u:'https://amarbank.co.id/kode-etik' },
      { ic:'shield-check', h:'APU, PPT, dan PPPSPM', u:'https://amarbank.co.id/apu-ppt-dan-pppspm' },
      { ic:'file-text', h:'Laporan Pelaksanaan Tata Kelola', u:'https://amarbank.co.id/laporan-pelaksanaan-tata-kelola' },
      { ic:'file-check', h:'Kebijakan terkait Tata Kelola lainnya', u:'https://amarbank.co.id/kebijakan-terkait-tata-kelola-lainnya' },
    ],
    str_e:'Kepemilikan', str_t:'Struktur Pemegang Saham',
    str_p:'Sebagai perusahaan terbuka yang tercatat di Bursa Efek Indonesia dengan kode saham AMAR, struktur kepemilikan saham Amar Bank dikelola secara transparan dan dapat diakses publik.',
    str_btn:'Lihat detail di Hubungan Investor',
  },
  en: {
    chip:'Good Corporate Governance', crumb:'Corporate Governance',
    htitle:'Corporate Governance',
    hsub:'Amar Bank is committed to consistently applying good corporate governance across the organization — upholding transparency, accountability, and integrity as the foundation of trust for customers and stakeholders.',
    sec_e:'Guidelines & Policies', sec_t:'The pillars of our governance',
    more:'Learn More',
    items:[
      { ic:'users', h:'GMS and EGMS', u:'https://amarbank.co.id/rups-rupslb-id' },
      { ic:'git-merge', h:'Corporate Actions', u:'https://amarbank.co.id/aksi-korporasi' },
      { ic:'book-text', h:'Guidelines and Charters', u:'https://amarbank.co.id/pedoman-dan-tata-tertib' },
      { ic:'users-round', h:'Committees under the Board of Commissioners', u:'https://amarbank.co.id/komite-di-bawah-dewan-komisaris' },
      { ic:'megaphone', h:'Whistle Blowing System', u:'https://amarbank.co.id/whistleblowing' },
      { ic:'scale', h:'Code of Ethics', u:'https://amarbank.co.id/kode-etik' },
      { ic:'shield-check', h:'AML, CFT & CPF (APU, PPT, PPPSPM)', u:'https://amarbank.co.id/apu-ppt-dan-pppspm' },
      { ic:'file-text', h:'Governance Implementation Report', u:'https://amarbank.co.id/laporan-pelaksanaan-tata-kelola' },
      { ic:'file-check', h:'Other Governance-related Policies', u:'https://amarbank.co.id/kebijakan-terkait-tata-kelola-lainnya' },
    ],
    str_e:'Ownership', str_t:'Shareholder Structure',
    str_p:'As a public company listed on the Indonesia Stock Exchange under the ticker AMAR, Amar Bank\u2019s shareholding structure is managed transparently and is publicly accessible.',
    str_btn:'See details in Investor Relations',
  },
};

function TataKelola(){
  const { lang } = useLang();
  const c = TK_C[lang];
  return (
    <main>
      <PageHero chip={c.chip} crumb={c.crumb} title={c.htitle} sub={c.hsub}/>
      <section className="page-sec">
        <div className="wrap">
          <div className="sec-eyebrow">{c.sec_e}</div>
          <h2 className="sec-title" style={{marginBottom:'32px'}}>{c.sec_t}</h2>
          <div className="gov-grid">
            {c.items.map(it=>(
              <a className="gov-card" href={it.u} target="_blank" rel="noopener noreferrer" key={it.h}>
                <div className="ico"><Icon name={it.ic} size={24} color="#fff"/></div>
                <h3>{it.h}</h3>
                <span className="more">{c.more} <Icon name="arrow-right" size={15}/></span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="page-sec tint">
        <div className="wrap">
          <div className="sec-eyebrow">{c.str_e}</div>
          <h2 className="sec-title">{c.str_t}</h2>
          <p className="sec-lede" style={{marginBottom:'24px'}}>{c.str_p}</p>
          <a className="btn btn-blue" href="hubungan-investor.html">{c.str_btn} <Icon name="arrow-right" size={16}/></a>
        </div>
      </section>
    </main>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <PageShell active="tentang">{() => <TataKelola/>}</PageShell>
);
