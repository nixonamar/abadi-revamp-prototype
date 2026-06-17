// Blog (Amar Blog) — amarbank.co.id/blog
const BL_C = {
  id: {
    chip:'Amar Blog', crumb:'Blog',
    htitle:'Wawasan finansial untuk hidup lebih tenang',
    hsub:'Tips, edukasi, dan kisah seputar keuangan, bisnis, dan teknologi perbankan dari tim Amar Bank — agar kamu makin #AMANdenganAMAR.',
    all:'Semua',
    cats:['Semua','Tips Finansial','Bisnis & UMKM','Edukasi','Berita'],
    read:'Baca selengkapnya', minread:'menit baca', visit:'Kunjungi Amar Blog',
    feat_tag:'Tips Finansial',
    feat_t:'Deposito vs Tabungan: mana yang lebih cocok untuk tujuan finansialmu?',
    feat_p:'Memahami perbedaan deposito dan tabungan bisa membantumu menumbuhkan dana dengan lebih optimal. Simak cara memilih instrumen yang tepat sesuai kebutuhan dan jangka waktumu.',
    feat_m:'Tim Amar Bank · 12 Jun 2026 · 5 menit baca',
    posts:[
      { cat:'Tips Finansial', g:'a', t:'5 kebiasaan menabung yang bikin keuanganmu lebih sehat', p:'Mulai dari hal kecil yang konsisten — kebiasaan sederhana ini bisa mengubah cara kamu mengelola uang.', m:'08 Jun 2026 · 4 menit baca' },
      { cat:'Bisnis & UMKM', g:'b', t:'Cara mengelola arus kas usaha kecil agar tetap stabil', p:'Arus kas yang sehat adalah napas bisnis. Pelajari langkah praktis menjaga likuiditas usahamu.', m:'05 Jun 2026 · 6 menit baca' },
      { cat:'Edukasi', g:'c', t:'Mengenal LPS: bagaimana simpananmu dijamin hingga Rp 2 miliar', p:'Apa itu LPS dan bagaimana skema penjaminan simpanan bekerja untuk melindungi nasabah bank.', m:'02 Jun 2026 · 5 menit baca' },
      { cat:'Bisnis & UMKM', g:'d', t:'Tips mendapatkan modal usaha lewat pinjaman digital', p:'Akses pembiayaan kini lebih mudah. Ketahui hal yang perlu disiapkan sebelum mengajukan pinjaman.', m:'29 Mei 2026 · 4 menit baca' },
      { cat:'Berita', g:'e', t:'Amar Bank perkuat layanan perbankan digital berbasis AI', p:'Inovasi terbaru Amar Bank menghadirkan pengalaman menabung yang lebih cerdas dan personal.', m:'25 Mei 2026 · 3 menit baca' },
      { cat:'Tips Finansial', g:'f', t:'Membuat dana darurat: berapa banyak yang ideal?', p:'Dana darurat adalah fondasi keuangan. Hitung jumlah yang pas dan cara membangunnya secara bertahap.', m:'20 Mei 2026 · 5 menit baca' },
    ],
  },
  en: {
    chip:'Amar Blog', crumb:'Blog',
    htitle:'Financial insights for a calmer life',
    hsub:'Tips, education, and stories on finance, business, and banking technology from the Amar Bank team — so you stay #AMANdenganAMAR.',
    all:'All',
    cats:['All','Financial Tips','Business & MSME','Education','News'],
    read:'Read more', minread:'min read', visit:'Visit Amar Blog',
    feat_tag:'Financial Tips',
    feat_t:'Deposits vs Savings: which suits your financial goals better?',
    feat_p:'Understanding the difference between deposits and savings can help you grow your funds more optimally. Learn how to choose the right instrument for your needs and time horizon.',
    feat_m:'Amar Bank Team · 12 Jun 2026 · 5 min read',
    posts:[
      { cat:'Financial Tips', g:'a', t:'5 saving habits that make your finances healthier', p:'Start small but consistent — these simple habits can transform how you manage money.', m:'08 Jun 2026 · 4 min read' },
      { cat:'Business & MSME', g:'b', t:'How to manage small business cash flow to stay stable', p:'Healthy cash flow is the lifeblood of business. Learn practical steps to keep your liquidity steady.', m:'05 Jun 2026 · 6 min read' },
      { cat:'Education', g:'c', t:'Getting to know LPS: how your deposits are guaranteed up to Rp 2 billion', p:'What LPS is and how the deposit guarantee scheme works to protect bank customers.', m:'02 Jun 2026 · 5 min read' },
      { cat:'Business & MSME', g:'d', t:'Tips for getting business capital through digital loans', p:'Access to financing is now easier. Know what to prepare before applying for a loan.', m:'29 May 2026 · 4 min read' },
      { cat:'News', g:'e', t:'Amar Bank strengthens AI-based digital banking services', p:'Amar Bank\u2019s latest innovation delivers a smarter and more personal saving experience.', m:'25 May 2026 · 3 min read' },
      { cat:'Financial Tips', g:'f', t:'Building an emergency fund: how much is ideal?', p:'An emergency fund is a financial foundation. Calculate the right amount and how to build it gradually.', m:'20 May 2026 · 5 min read' },
    ],
  },
};

const BG_MAP = {
  a:'linear-gradient(150deg,#1BB1ED,#1253A5)',
  b:'linear-gradient(150deg,#0c2440,#0A2E5C)',
  c:'linear-gradient(150deg,#33B2BF,#1253A5)',
  d:'linear-gradient(150deg,#7B3D97,#983F96)',
  e:'linear-gradient(150deg,#04833F,#0c6e3c)',
  f:'linear-gradient(150deg,#7BC143,#33B2BF)',
};

function Blog(){
  const { lang } = useLang();
  const c = BL_C[lang];
  const [cat, setCat] = useState(c.cats[0]);
  const posts = cat === c.cats[0] ? c.posts : c.posts.filter(p=>p.cat===cat);
  return (
    <main>
      <PageHero chip={c.chip} crumb={c.crumb} title={c.htitle} sub={c.hsub}/>

      <section className="page-sec">
        <div className="wrap">
          <div className="blog-cats">
            {c.cats.map(x=>(
              <button key={x} className={'blog-cat'+(cat===x?' on':'')} onClick={()=>setCat(x)}>{x}</button>
            ))}
          </div>

          {cat === c.cats[0] && (
            <a className="blog-feat" href="https://amarbank.co.id/blog" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
              <div className="ft-img" style={{background:'linear-gradient(150deg,#1BB1ED,#1253A5)'}}>
                <img src="assets/logo-bo-white.png" alt="" style={{position:'absolute',right:'-30px',bottom:'-20px',height:'200px',opacity:.18}}/>
              </div>
              <div className="ft-body">
                <span className="tag">{c.feat_tag}</span>
                <h2>{c.feat_t}</h2>
                <p>{c.feat_p}</p>
                <div className="meta">{c.feat_m}</div>
              </div>
            </a>
          )}

          <div className="blog-grid">
            {posts.map(p=>(
              <a className="bcard" href="https://amarbank.co.id/blog" target="_blank" rel="noopener noreferrer" key={p.t}>
                <div className="bimg" style={{background:BG_MAP[p.g]}}>
                  <span>{p.cat}</span>
                </div>
                <div className="bbody">
                  <h3>{p.t}</h3>
                  <p>{p.p}</p>
                  <div className="meta"><Icon name="calendar" size={13}/> {p.m}</div>
                </div>
              </a>
            ))}
          </div>

          <div style={{textAlign:'center',marginTop:'44px'}}>
            <a className="btn btn-blue" href="https://amarbank.co.id/blog" target="_blank" rel="noopener noreferrer">{c.visit} <Icon name="arrow-up-right" size={16}/></a>
          </div>
        </div>
      </section>
    </main>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <PageShell active="tentang">{() => <Blog/>}</PageShell>
);
