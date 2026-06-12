// Social proof + segmented testimonial switcher + footer
const PROOFS = [
  { n:'> 990.000', l:'Senyuman Telah Terukir', sub:'di wajah masyarakat Indonesia sejak 2014' },
  { n:'Peraih APEA 2022', l:'dan 36 Penghargaan', sub:'bergengsi lainnya' },
  { n:'15 juta kali', l:'Aplikasi Tunaiku Telah Diunduh', sub:'dan hadir di 16 kota besar di Indonesia' },
];

function Proof(){
  return (
    <section className="section" id="trust">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Dipercaya &amp; Aman</div>
          <h2>Bank digital dengan dampak nyata</h2>
          <p>Diawasi regulator, tersertifikasi internasional — keamananmu bukan fitur tambahan, tapi fondasi.</p>
        </div>
        <div className="proof-grid">
          {PROOFS.map(p=>(
            <div className="proof" key={p.l}>
              <div className="n"><em>{p.n}</em></div>
              <div className="l">{p.l}</div>
              {p.sub && <div className="proof-sub">{p.sub}</div>}
            </div>
          ))}
          <div className="proof-note">*Diperbarui per Maret 2023</div>
        </div>
        <div className="certbar">
          <span className="chip"><Icon name="shield-check" size={16} color="var(--success)"/> Berizin &amp; diawasi OJK</span>
          <span className="chip"><Icon name="landmark" size={16} color="var(--amar-blue)"/> Peserta penjaminan LPS</span>
          <span className="chip"><Icon name="badge-check" size={16} color="var(--amar-teal-deep)"/> ISO 27001</span>
          <span className="chip"><Icon name="badge-check" size={16} color="var(--ink-2)"/> TÜV Rheinland</span>
        </div>
      </div>
    </section>
  );
}

const YT_VIDEOS = [
  { id:'U8uQDjtcxto' },
  { id:'0sB-WzaWTGo' },
  { id:'I2b_D2To3BQ' },
];

function YTCard({ id }) {
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const url   = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div className="yt-card">
      <div className="yt-ratio">
        <div className="yt-bg" style={{backgroundImage:`url(${thumb})`}}></div>
        <div className="yt-scrim"></div>
        <img className="yt-thumb" src={thumb} alt="Video testimoni Amar Bank" loading="lazy"/>
        <a className="yt-play" href={url} target="_blank" rel="noopener noreferrer" aria-label="Putar video">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </a>
      </div>
    </div>
  );
}

function Testimonials(){
  return (
    <section className="section tint" id="testimoni">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Suara Mereka</div>
          <h2>Satu bank, banyak cerita sukses</h2>
          <p>Dengar langsung dari mereka yang telah merasakan manfaat layanan Amar Bank.</p>
        </div>
        <div className="yt-grid">
          {YT_VIDEOS.map(v => <YTCard key={v.id} id={v.id}></YTCard>)}
        </div>
      </div>
    </section>
  );
}

function Footer(){
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img className="logo" src="assets/logo-mark-white.png" alt="Amar Bank"/>
            <p className="blurb">PT Bank Amar Indonesia Tbk. RDTX Square Lt.11, Jl. Prof. DR. Satrio No.164, Setiabudi, Jakarta Selatan 12930.</p>
            <div className="fseal">
              <span className="s"><Icon name="shield-check" size={13} color="var(--amar-green-lt)"/> OJK</span>
              <span className="s"><Icon name="landmark" size={13} color="var(--amar-green-lt)"/> LPS</span>
              <span className="s"><Icon name="badge-check" size={13} color="var(--amar-green-lt)"/> ISO 27001</span>
            </div>
          </div>
          <div><h4>Individu</h4><ul><li><a>Pinjaman Tunaiku</a></li><li><a>Celengan</a></li><li><a>Deposito</a></li><li><a>Wealth Banking</a></li></ul></div>
          <div><h4>Bisnis &amp; Platform</h4><ul><li><a>Business Banking</a></li><li><a>Corporate Banking</a></li><li><a>Embedded Banking</a></li><li><a>Dokumentasi API</a></li></ul></div>
          <div><h4>Perusahaan</h4><ul><li><a>Tentang Kami</a></li><li><a>Karier</a></li><li><a href="#lokasi">Hubungi Kami</a></li><li><a>FAQ</a></li></ul></div>
        </div>
        <div className="legal">
          PT Bank Amar Indonesia Tbk berizin dan diawasi oleh OJK, serta merupakan peserta penjaminan LPS. Maksimum nilai simpanan yang dijamin LPS per nasabah per bank adalah Rp 2 miliar. Seluruh data lead bisnis &amp; korporat dikelola sesuai UU Pelindungan Data Pribadi (UU PDP). &copy; 2026 Amar Bank.
        </div>
        <div className="version-tag">v1.0 · build 2026.06.12</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Proof, Testimonials, Footer });
