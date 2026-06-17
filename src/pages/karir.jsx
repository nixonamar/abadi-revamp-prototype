// Karir (Careers) — amarbank.co.id/career
const KR_C = {
  id: {
    chip:'#UnlimitedInnovation', crumb:'Karir',
    htitle:'Jadilah Innovator Selanjutnya!',
    hsub:'Tumbuh bersama kami, ciptakan #UnlimitedInnovation. Kami AMARITES — orang-orang penuh semangat di balik Amar Bank yang bekerja dengan orientasi pada data dan riset customer.',
    apply:'Lihat Lowongan',
    val_e:'Nilai Kami', val_t:'Yang kami pegang sebagai AMARITES',
    values:[
      { ic:'heart', c:'g', h:'Customer Focus', p:'Selalu mengedepankan sudut pandang nasabah.' },
      { ic:'rocket', c:'t', h:'Dream Big', p:'Berani bermimpi dan ciptakan hal besar.' },
      { ic:'flask-conical', c:'b', h:'Experimentation', p:'Kesempatan berinovasi dan dapatkan wawasan baru.' },
      { ic:'smile', c:'gold', h:'Fun', p:'Suasana dan rekan kerja terbaik.' },
      { ic:'sprout', c:'green', h:'Growth', p:'Menanamkan pola pikir berkembang lewat pembelajaran berkelanjutan.' },
      { ic:'zap', c:'p', h:'Speed', p:'Mencapai target optimal dengan efektif dan efisien.' },
    ],
    ben_e:'Benefit', ben_t:'Kamu akan dapatkan...',
    benefits:[
      { ic:'graduation-cap', h:'Kesempatan untuk Terus Belajar', p:'Berbagi dan dapatkan ilmu baru dari sesama Amarites di sesi Learn & Grow.' },
      { ic:'sparkles', h:'Lingkungan Kerja yang Penuh Semangat', p:'Tempat bermain untuk ide dan eksperimen — dirancang untuk mengembangkan cara kerja setiap orang.' },
      { ic:'shield-plus', h:'Perlindungan Terbaik', p:'Setiap Amarites mendapatkan proteksi kesehatan dan jaminan kesejahteraan.' },
      { ic:'life-buoy', h:'Bantuan Profesional di saat Butuh', p:'Fasilitas konsultasi dengan profesional setiap kali kamu perlu melepas lelah atau berbagi keresahan.' },
      { ic:'crown', h:'Semua Berkesempatan Memimpin', p:'Apapun posisimu, kamu punya kesempatan untuk terlibat — bahkan memimpin project baru.' },
      { ic:'baby', h:'Dukungan untuk Para Ibu', p:'Cuti tiga bulan dengan gaji penuh untuk ibu baru melahirkan, serta ruang menyusui.' },
    ],
    fn_e:'Pilih Function-mu!', fn_t:'Temukan posisi terbaik sesuai bidangmu',
    functions:['Business Banking','CEO Office','Compliance & AML','Corporate Banking','Credit Analyst','Credit Reviewer & QA','Data Scientist','Digital Ops & Strategy','Engineering','Finance','Infrastructure, Operations & Security','Internal Audit','Legal & Litigation','Lending','Marketing','MSME','Operations','People','Performance Marketing','Product & Design','Retail Banking','Retail Funding','Risk Management','Sales','Strategic Partnership','Technology'],
    soc_e:'Kenal Lebih Jauh', soc_t:'Intip budaya dan kisah Amarites',
    socials:[
      { ic:'linkedin', h:'Amar Bank', p:'Dapatkan perkembangan terakhir seputar Amar Bank.', u:'https://www.linkedin.com/showcase/ptbank-amar-indonesia-tbk/' },
      { ic:'instagram', h:'@lifeatamar.tunaiku', p:'Intip berbagai kegiatan seru Amarites setiap hari.', u:'https://www.instagram.com/lifeatamar.tunaiku' },
      { ic:'mail', h:'Email', p:'Punya pertanyaan lebih jauh? Mari terhubung!', u:'mailto:recruitment@amarbank.co.id' },
      { ic:'code', h:'Tunaiku-Tech', p:'Jurnal teknologi di balik tim Product, Engineer, dan Data.', u:'https://medium.com/tunaiku-tech' },
    ],
  },
  en: {
    chip:'#UnlimitedInnovation', crumb:'Careers',
    htitle:'Be the Next Innovator!',
    hsub:'Grow with us and create #UnlimitedInnovation. We are AMARITES — passionate people behind Amar Bank who work with a data- and customer-research orientation.',
    apply:'View Openings',
    val_e:'Our Values', val_t:'What we hold as AMARITES',
    values:[
      { ic:'heart', c:'g', h:'Customer Focus', p:'Always putting the customer\u2019s perspective first.' },
      { ic:'rocket', c:'t', h:'Dream Big', p:'Dare to dream and create big things.' },
      { ic:'flask-conical', c:'b', h:'Experimentation', p:'Opportunities to innovate and gain new insights.' },
      { ic:'smile', c:'gold', h:'Fun', p:'The best atmosphere and colleagues.' },
      { ic:'sprout', c:'green', h:'Growth', p:'Instilling a growth mindset through continuous learning.' },
      { ic:'zap', c:'p', h:'Speed', p:'Achieving optimal targets effectively and efficiently.' },
    ],
    ben_e:'Benefits', ben_t:'What you\u2019ll get...',
    benefits:[
      { ic:'graduation-cap', h:'Continuous Learning', p:'Share and gain new knowledge with fellow Amarites in Learn & Grow sessions.' },
      { ic:'sparkles', h:'A Vibrant Workplace', p:'A playground for ideas and experiments — designed to grow everyone\u2019s way of working.' },
      { ic:'shield-plus', h:'Best Protection', p:'Every Amarite receives health protection and welfare guarantees.' },
      { ic:'life-buoy', h:'Professional Help When Needed', p:'Access to professional consultations whenever you need to rest or talk things through.' },
      { ic:'crown', h:'Everyone Can Lead', p:'Whatever your position, you have the chance to get involved — even lead a new project.' },
      { ic:'baby', h:'Support for Mothers', p:'Three months of fully paid leave for new mothers, plus nursing rooms.' },
    ],
    fn_e:'Choose Your Function!', fn_t:'Find the best role for your field',
    functions:['Business Banking','CEO Office','Compliance & AML','Corporate Banking','Credit Analyst','Credit Reviewer & QA','Data Scientist','Digital Ops & Strategy','Engineering','Finance','Infrastructure, Operations & Security','Internal Audit','Legal & Litigation','Lending','Marketing','MSME','Operations','People','Performance Marketing','Product & Design','Retail Banking','Retail Funding','Risk Management','Sales','Strategic Partnership','Technology'],
    soc_e:'Get to Know Us', soc_t:'Peek into the culture and Amarites\u2019 stories',
    socials:[
      { ic:'linkedin', h:'Amar Bank', p:'Get the latest updates on Amar Bank.', u:'https://www.linkedin.com/showcase/ptbank-amar-indonesia-tbk/' },
      { ic:'instagram', h:'@lifeatamar.tunaiku', p:'Peek into the fun activities of Amarites every day.', u:'https://www.instagram.com/lifeatamar.tunaiku' },
      { ic:'mail', h:'Email', p:'Have more questions? Let\u2019s connect!', u:'mailto:recruitment@amarbank.co.id' },
      { ic:'code', h:'Tunaiku-Tech', p:'A tech journal behind the Product, Engineer, and Data teams.', u:'https://medium.com/tunaiku-tech' },
    ],
  },
};

function Karir(){
  const { lang } = useLang();
  const c = KR_C[lang];
  const apply = (
    <a className="btn btn-teal btn-lg" href="https://amarbank.co.id/career" target="_blank" rel="noopener noreferrer">
      <Icon name="briefcase" size={17}/> {c.apply}
    </a>
  );
  return (
    <main>
      <PageHero chip={c.chip} crumb={c.crumb} title={c.htitle} sub={c.hsub} actions={apply}/>

      <section className="page-sec">
        <div className="wrap">
          <div className="sec-head-c">
            <div className="sec-eyebrow">{c.val_e}</div>
            <h2 className="sec-title">{c.val_t}</h2>
          </div>
          <div className="card-grid c3">
            {c.values.map(v=>(
              <div className="icard" key={v.h}>
                <div className={'ico '+v.c}><Icon name={v.ic} size={26}/></div>
                <h3>{v.h}</h3><p>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-sec tint">
        <div className="wrap">
          <div className="sec-head-c">
            <div className="sec-eyebrow">{c.ben_e}</div>
            <h2 className="sec-title">{c.ben_t}</h2>
          </div>
          <div className="card-grid c3">
            {c.benefits.map(b=>(
              <div className="icard" key={b.h}>
                <div className="ico b"><Icon name={b.ic} size={26}/></div>
                <h3>{b.h}</h3><p>{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-sec">
        <div className="wrap">
          <div className="sec-head-c">
            <div className="sec-eyebrow">{c.fn_e}</div>
            <h2 className="sec-title">{c.fn_t}</h2>
          </div>
          <div className="func-chips">
            {c.functions.map(f=><span className="func-chip" key={f}>{f}</span>)}
          </div>
        </div>
      </section>

      <section className="page-sec tint">
        <div className="wrap">
          <div className="sec-head-c">
            <div className="sec-eyebrow">{c.soc_e}</div>
            <h2 className="sec-title">{c.soc_t}</h2>
          </div>
          <div className="card-grid c2">
            {c.socials.map(s=>(
              <a className="icard" href={s.u} target="_blank" rel="noopener noreferrer" key={s.h} style={{display:'flex',gap:'18px',alignItems:'center',textDecoration:'none'}}>
                <div className="ico t" style={{flex:'none',marginBottom:0}}><BrandIcon name={s.ic} size={26}/></div>
                <div><h3 style={{marginBottom:'4px'}}>{s.h}</h3><p>{s.p}</p></div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <PageShell active="tentang">{() => <Karir/>}</PageShell>
);
