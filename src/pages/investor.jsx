// Hubungan Investor (Investor Relations) — amarbank.co.id/investor-relation + SBDK
const IR_C = {
  id: {
    chip:'IDX: AMAR', crumb:'Hubungan Investor',
    htitle:'Dapatkan perkembangan terkini dari Amar Bank',
    hsub:'Halaman ini menampilkan informasi AMAR yang terbuka untuk publik — kinerja keuangan, harga saham, aksi korporasi, dan informasi material lainnya.',
    stock_l:'Bank Amar Indonesia Tbk PT', updated:'Update terakhir: 19/11/2025 09:45',
    srows:[
      { k:'Tertinggi', v:'226' }, { k:'Terendah', v:'222' }, { k:'Volume', v:'37.500' },
      { k:'Harga Buka', v:'226' }, { k:'Harga Tutup', v:'226' }, { k:'Lembar Saham', v:'18,38 M' },
    ],
    mcap_k:'Market Cap', mcap_v:'Rp 4,08 Triliun',
    grow_e:'Pertumbuhan Amar Bank', grow_t:'Memberdayakan kehidupan dengan teknologi', grow_note:'*Per Juni 2024',
    metrics:[
      { ic:'smile', rows:[ ['Sejak 2014','> 1.000.000','senyuman telah terukir di wajah masyarakat Indonesia'], ['Total pencairan','> Rp 12,6 Triliun',''] ] },
      { ic:'store', rows:[ ['Bank telah mendukung','hampir 400.000','UMKM'], ['Kesetaraan gender','> 49%','nasabah bank adalah perempuan'] ] },
      { ic:'landmark', rows:[ ['Total Aset','Rp 4,60 Triliun',''], ['Total Kredit','Rp 2,80 Triliun',''], ['Total DPK','Rp 886 Miliar',''] ] },
    ],
    news_e:'Berita Investor', news_t:'Pengumuman terbaru', news_all:'Lihat semua',
    news:[
      { d:'03 Jun 2026', t:'Undangan: Penyelenggaraan Paparan Publik Tahun 2026' },
      { d:'01 Feb 2026', t:'Pengumuman Tingkat Bunga Penjaminan LPS dan Maksimum Nilai Simpanan yang Dijamin LPS periode 1 Februari 2026 s.d. 31 Mei 2026' },
      { d:'01 Okt 2025', t:'Pengumuman Tingkat Bunga Penjaminan LPS dan Maksimum Nilai Simpanan yang Dijamin LPS periode 1 Oktober 2025 s.d. 31 Januari 2026' },
    ],
    links_e:'Tautan Langsung', links_t:'Akses cepat informasi investor',
    links:[
      { ic:'file-bar-chart', h:'Laporan dan Presentasi', u:'https://amarbank.co.id/laporan-presentasi' },
      { ic:'trending-up', h:'Kinerja Keuangan', u:'https://amarbank.co.id/kinerja-keuangan' },
      { ic:'candlestick-chart', h:'Kinerja Saham', u:'https://amarbank.co.id/investor-relation' },
      { ic:'mail', h:'Kontak Hubungan Investor', u:'https://amarbank.co.id/kontak-investor' },
    ],
    sbdk_e:'Transparansi', sbdk_t:'Suku Bunga Dasar Kredit Rupiah',
    sbdk_sub:'Suku Bunga Dasar Kredit (Prime Lending Rate) — PT Bank Amar Indonesia Tbk, per November 2025 (Efektif % per tahun).',
    cap:'SBDK per November 2025 (efektif % per tahun)',
    g_nonumkm:'Kredit Non UMKM', g_umkm:'Kredit UMKM',
    cols:['Korporasi','Ritel','Menengah','Kecil','Mikro','KPR/KPA','Non KPR/Non KPA'],
    rows:[
      { h:'Harga Pokok Dasar Kredit (HPDK)', v:['5,81','N/A','5,81','N/A','5,79','N/A','5,76'] },
      { h:'Biaya Overhead', v:['8,16','N/A','1,92','N/A','13,40','N/A','13,41'] },
      { h:'Marjin Keuntungan', v:['0,03','N/A','2,00','N/A','2,00','N/A','2,00'] },
      { h:'Suku Bunga Dasar Kredit (SBDK)', v:['14,00','N/A','9,74','N/A','21,19','N/A','21,17'], hl:true },
    ],
    notes:[
      'SBDK ditentukan Bank berdasarkan berbagai faktor, di antaranya suku bunga acuan yang ditetapkan otoritas, harga pokok dana untuk kredit (cost of fund), biaya overhead, margin keuntungan, dan perkembangan kondisi ekonomi.',
      'SBDK belum memperhitungkan komponen estimasi premi risiko yang besarnya tergantung penilaian Bank terhadap risiko masing-masing debitur. Suku bunga kredit yang dikenakan belum tentu sama dengan SBDK.',
      'SBDK untuk Non KPR/KPA merupakan SBDK Kredit Konsumsi di luar KPR, antara lain Kredit Kendaraan Bermotor, Kartu Kredit, dan Kredit Tanpa Agunan.',
    ],
  },
  en: {
    chip:'IDX: AMAR', crumb:'Investor Relations',
    htitle:'Stay up to date with Amar Bank',
    hsub:'This page presents AMAR information open to the public — financial performance, share price, corporate actions, and other material information.',
    stock_l:'Bank Amar Indonesia Tbk PT', updated:'Last update: 19/11/2025 09:45',
    srows:[
      { k:'High', v:'226' }, { k:'Low', v:'222' }, { k:'Volume', v:'37,500' },
      { k:'Open', v:'226' }, { k:'Close', v:'226' }, { k:'Shares', v:'18.38 B' },
    ],
    mcap_k:'Market Cap', mcap_v:'Rp 4.08 Trillion',
    grow_e:'Amar Bank Growth', grow_t:'Empowering lives with technology', grow_note:'*As of June 2024',
    metrics:[
      { ic:'smile', rows:[ ['Since 2014','> 1,000,000','smiles created on the faces of Indonesians'], ['Total disbursement','> Rp 12.6 Trillion',''] ] },
      { ic:'store', rows:[ ['The bank has supported','nearly 400,000','MSMEs'], ['Gender equality','> 49%','of bank customers are women'] ] },
      { ic:'landmark', rows:[ ['Total Assets','Rp 4.60 Trillion',''], ['Total Loans','Rp 2.80 Trillion',''], ['Total Deposits','Rp 886 Billion',''] ] },
    ],
    news_e:'Investor News', news_t:'Latest announcements', news_all:'View all',
    news:[
      { d:'03 Jun 2026', t:'Invitation: 2026 Public Expose' },
      { d:'01 Feb 2026', t:'Announcement of LPS Guarantee Interest Rate and Maximum Guaranteed Deposit Value for the period 1 February 2026 to 31 May 2026' },
      { d:'01 Oct 2025', t:'Announcement of LPS Guarantee Interest Rate and Maximum Guaranteed Deposit Value for the period 1 October 2025 to 31 January 2026' },
    ],
    links_e:'Quick Links', links_t:'Fast access to investor information',
    links:[
      { ic:'file-bar-chart', h:'Reports and Presentations', u:'https://amarbank.co.id/laporan-presentasi' },
      { ic:'trending-up', h:'Financial Performance', u:'https://amarbank.co.id/kinerja-keuangan' },
      { ic:'candlestick-chart', h:'Share Performance', u:'https://amarbank.co.id/investor-relation' },
      { ic:'mail', h:'Investor Relations Contact', u:'https://amarbank.co.id/kontak-investor' },
    ],
    sbdk_e:'Transparency', sbdk_t:'Rupiah Prime Lending Rate (SBDK)',
    sbdk_sub:'Prime Lending Rate — PT Bank Amar Indonesia Tbk, as of November 2025 (effective % per year).',
    cap:'SBDK as of November 2025 (effective % per year)',
    g_nonumkm:'Non-MSME Loans', g_umkm:'MSME Loans',
    cols:['Corporate','Retail','Medium','Small','Micro','Mortgage','Non-Mortgage'],
    rows:[
      { h:'Cost of Loanable Funds (HPDK)', v:['5.81','N/A','5.81','N/A','5.79','N/A','5.76'] },
      { h:'Overhead Cost', v:['8.16','N/A','1.92','N/A','13.40','N/A','13.41'] },
      { h:'Profit Margin', v:['0.03','N/A','2.00','N/A','2.00','N/A','2.00'] },
      { h:'Prime Lending Rate (SBDK)', v:['14.00','N/A','9.74','N/A','21.19','N/A','21.17'], hl:true },
    ],
    notes:[
      'The SBDK is determined by the Bank based on various factors, including the benchmark rate set by the authorities, the cost of funds, overhead costs, profit margin, and economic conditions.',
      'The SBDK does not yet account for the estimated risk premium component, which depends on the Bank\u2019s assessment of each debtor\u2019s risk. The applied lending rate may therefore differ from the SBDK.',
      'The SBDK for Non-Mortgage refers to consumer credit other than mortgages, including Motor Vehicle Loans, Credit Cards, and Unsecured Loans.',
    ],
  },
};

function HubunganInvestor(){
  const { lang } = useLang();
  const c = IR_C[lang];
  return (
    <main>
      <PageHero chip={c.chip} crumb={c.crumb} title={c.htitle} sub={c.hsub}/>

      {/* stock snapshot */}
      <section className="page-sec tight">
        <div className="wrap">
          <div className="stock">
            <div className="tick"><span className="code">IDX: AMAR</span><span style={{fontSize:'14px',opacity:.8}}>{c.stock_l}</span></div>
            <div className="price">224</div>
            <div className="chg">▼ 2 (-0,88%)</div>
            <div className="updated">{c.updated}</div>
            <div className="srows">
              {c.srows.map(r=>(
                <div className="sc" key={r.k}><div className="sk">{r.k}</div><div className="sv">{r.v}</div></div>
              ))}
            </div>
            <div className="srows" style={{gridTemplateColumns:'1fr',marginTop:'1px'}}>
              <div className="sc"><div className="sk">{c.mcap_k}</div><div className="sv">{c.mcap_v}</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* growth metrics */}
      <section className="page-sec tint">
        <div className="wrap">
          <div className="sec-head-c">
            <div className="sec-eyebrow">{c.grow_e}</div>
            <h2 className="sec-title">{c.grow_t}</h2>
          </div>
          <div className="ir-metrics">
            {c.metrics.map((m,i)=>(
              <div className="ir-metric" key={i}>
                <div className="ico"><Icon name={m.ic} size={24} color="#fff"/></div>
                {m.rows.map((r,j)=>(
                  <React.Fragment key={j}>
                    {j>0 && <div className="sep"/>}
                    <div className="cap">{r[0]}</div>
                    <div className="big">{r[1]}</div>
                    {r[2] && <div className="cap">{r[2]}</div>}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
          <div style={{textAlign:'right',fontSize:'12px',color:'var(--ink-3)',fontStyle:'italic',marginTop:'14px'}}>{c.grow_note}</div>
        </div>
      </section>

      {/* investor news */}
      <section className="page-sec">
        <div className="wrap">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:'16px',marginBottom:'28px'}}>
            <div><div className="sec-eyebrow">{c.news_e}</div><h2 className="sec-title" style={{margin:0}}>{c.news_t}</h2></div>
            <a className="btn btn-ghost" href="https://amarbank.co.id/berita-investor" target="_blank" rel="noopener noreferrer">{c.news_all} <Icon name="arrow-up-right" size={16}/></a>
          </div>
          <div className="news-list">
            {c.news.map(n=>(
              <a className="news-item" href="https://amarbank.co.id/berita-investor" target="_blank" rel="noopener noreferrer" key={n.t}>
                <div className="date">{n.d}</div>
                <div className="nt">{n.t}</div>
                <span className="arr"><Icon name="arrow-right" size={18}/></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* direct links */}
      <section className="page-sec tint">
        <div className="wrap">
          <div className="sec-eyebrow">{c.links_e}</div>
          <h2 className="sec-title" style={{marginBottom:'30px'}}>{c.links_t}</h2>
          <div className="link-tiles">
            {c.links.map(l=>(
              <a className="ltile" href={l.u} target="_blank" rel="noopener noreferrer" key={l.h}>
                <div className="ico"><Icon name={l.ic} size={22}/></div>
                <h3>{l.h}</h3>
                <span className="more">{lang==='id'?'Buka':'Open'} <Icon name="arrow-up-right" size={14}/></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SBDK */}
      <section className="page-sec">
        <div className="wrap">
          <div className="sec-eyebrow">{c.sbdk_e}</div>
          <h2 className="sec-title">{c.sbdk_t}</h2>
          <p className="sec-lede" style={{marginBottom:'26px'}}>{c.sbdk_sub}</p>
          <div className="tbl-wrap">
            <table className="data-table">
              <caption>{c.cap}</caption>
              <thead>
                <tr>
                  <th rowSpan="2"></th>
                  <th colSpan="2">{c.g_nonumkm}</th>
                  <th colSpan="3">{c.g_umkm}</th>
                  <th rowSpan="2">{c.cols[5]}</th>
                  <th rowSpan="2">{c.cols[6]}</th>
                </tr>
                <tr>
                  {c.cols.slice(0,5).map(co=><th key={co}>{co}</th>)}
                </tr>
              </thead>
              <tbody>
                {c.rows.map(r=>(
                  <tr key={r.h} className={r.hl?'hl':undefined}>
                    <th>{r.h}</th>
                    {r.v.map((x,i)=><td key={i}>{x}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ol className="tbl-note">
            {c.notes.map((n,i)=><li key={i}>{n}</li>)}
          </ol>
        </div>
      </section>
    </main>);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <PageShell active="tentang">{() => <HubunganInvestor/>}</PageShell>
);
