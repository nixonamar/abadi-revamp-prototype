// Social proof + segmented testimonial switcher + footer

function Proof(){
  const { lang } = useLang();
  const s = STRINGS[lang].proof;
  return (
    <section className="section" id="trust">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">{s.eyebrow}</div>
          <h2>{s.h2}</h2>
          <p>{s.p}</p>
        </div>
        <div className="proof-grid">
          {s.items.map(p=>(
            <div className="proof" key={p.l}>
              <div className="n"><em>{p.n}</em></div>
              <div className="l">{p.l}</div>
              {p.sub && <div className="proof-sub">{p.sub}</div>}
            </div>
          ))}
          <div className="proof-note">{s.updated}</div>
        </div>
        <div className="certbar">
          <span className="chip"><Icon name="shield-check" size={16} color="var(--success)"/> {s.cert1}</span>
          <span className="chip"><Icon name="landmark" size={16} color="var(--amar-blue)"/> {s.cert2}</span>
          <span className="chip"><Icon name="badge-check" size={16} color="var(--amar-teal-deep)"/> {s.cert3}</span>
          <span className="chip"><Icon name="badge-check" size={16} color="var(--ink-2)"/> {s.cert4}</span>
        </div>
      </div>
    </section>
  );
}

function YTCard({ id, title, channel, play_aria }) {
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const url   = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div className="yt-card">
      <div className="yt-ratio">
        <div className="yt-bg" style={{backgroundImage:`url(${thumb})`}}></div>
        <div className="yt-scrim"></div>
        <img className="yt-thumb" src={thumb} alt={title} loading="lazy"/>
        <a className="yt-play" href={url} target="_blank" rel="noopener noreferrer" aria-label={play_aria}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </a>
      </div>
      <div className="yt-info">
        <a className="yt-title-text" href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        <div className="yt-channel">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
          {channel}
        </div>
      </div>
    </div>
  );
}

function Testimonials(){
  const { lang } = useLang();
  const s = STRINGS[lang].testimonials;
  return (
    <section className="section tint" id="testimoni">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">{s.eyebrow}</div>
          <h2>{s.h2}</h2>
          <p>{s.p}</p>
        </div>
        <div className="yt-grid">
          {s.videos.map(v => <YTCard key={v.id} id={v.id} title={v.title} channel={s.channel} play_aria={s.play_aria}/>)}
        </div>
      </div>
    </section>
  );
}

function Footer(){
  const { lang } = useLang();
  const s = STRINGS[lang].footer;
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img className="logo" src="assets/logo-mark-white.png" alt="Amar Bank"/>
            <p className="blurb">{s.blurb}</p>
            <div className="fseal">
              <span className="s"><Icon name="shield-check" size={13} color="var(--amar-green-lt)"/> OJK</span>
              <span className="s"><Icon name="landmark" size={13} color="var(--amar-green-lt)"/> LPS</span>
              <span className="s"><Icon name="badge-check" size={13} color="var(--amar-green-lt)"/> ISO 27001</span>
            </div>
          </div>
          <div><h4>{s.col1}</h4><ul>{s.l1.map(l=><li key={l}><a>{l}</a></li>)}</ul></div>
          <div><h4>{s.col2}</h4><ul>{s.l2.map(l=><li key={l}><a>{l}</a></li>)}</ul></div>
          <div><h4>{s.col3}</h4><ul>{s.l3.map((l,i)=><li key={l}><a href={s.l3h[i]||undefined}>{l}</a></li>)}</ul></div>
        </div>
        <div className="legal">{s.legal}</div>
        <div className="version-tag">v1.0 · build 2026.06.12</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Proof, Testimonials, Footer });
