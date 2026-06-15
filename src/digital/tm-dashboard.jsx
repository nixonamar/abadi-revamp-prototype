// Amar Bank Time Machine — arrival dashboard
const { useState: useSD, useEffect: useED, useRef: useRD, useMemo: useMD, useCallback: useCD } = React;

function Dashboard({ cfg, setCfg, result, onRestart, onEditFull, notify }) {
  const series = result.series;
  const N = series.length - 1;
  const [playMonth, setPlayMonth] = useSD(N);
  const [playing, setPlaying] = useSD(false);
  const firedRef = useRD({});

  // reset to end whenever projection changes
  useED(() => { setPlayMonth(N); setPlaying(false); firedRef.current = {}; }, [result]);

  // playback loop
  useED(() => {
    if (!playing) return;
    if (playMonth >= N) { setPlaying(false); return; }
    const id = setTimeout(() => setPlayMonth(m => Math.min(N, m + 1)), 200);
    return () => clearTimeout(id);
  }, [playing, playMonth, N]);

  // fire events when playhead reaches a month
  useED(() => {
    result.events.filter(e => e.month === playMonth).forEach(e => {
      const key = e.type + e.month;
      if (firedRef.current[key]) return;
      firedRef.current[key] = true;
      notify(e.title, e.icon, e.tone);
    });
  }, [playMonth, result]);

  const cur = series[Math.min(playMonth, N)];
  const summary = result.summary;
  const startDate = result.startDate;
  const endLabel = window.TM.labelForMonth(startDate, N);
  const curLabel = playMonth === 0 ? 'awal' : window.TM.labelForMonth(startDate, playMonth);
  const feed = result.events.filter(e => e.month <= playMonth).slice().reverse();

  const startPlay = () => {
    if (playMonth >= N) { firedRef.current = {}; setPlayMonth(0); setPlaying(true); }
    else setPlaying(p => !p);
  };

  // where the money sits at current month
  const buckets = {
    active: cur.active, celengan: cur.celengan, brankas: cur.brankas,
    deposito: cur.deposito + cur.depoHold, depoInstan: cur.depoInstan,
  };
  const whereMax = Math.max(1, ...Object.values(buckets));

  // edit panel
  const yearChips = [1, 3, 5, 10, 20];
  const setMonthly = (v) => setCfg(p => ({ ...p, monthly: v }));
  const setYears = (y) => setCfg(p => ({ ...p, horizon: { ...p.horizon, mode: 'relative', years: y } }));

  return (
    <div className="tm-scene tm-dash">
      <nav className="dash-nav">
        <div className="dash-nav-in">
          <img className="logo" src="assets/logo-horizontal.png" alt="Amar Bank" />
          <span className="dash-arrived"><Icon name="check-circle-2" size={14} /> Tiba di {endLabel}</span>
          <span className="spacer" />
          <a className="dash-back" href="index.html"><Icon name="home" size={15} /> Beranda</a>
          <button className="btn btn-teal" onClick={() => notify('Mengarahkan ke halaman unduh aplikasi…', 'smartphone', 'celebrate')} style={{ marginLeft: 4 }}>Download Amar Bank</button>
        </div>
      </nav>

      <div className="dash-wrap">
        {/* arrival headline */}
        <div className="arrival-head">
          <div className="when"><Icon name="clock" size={14} /> {summary.months} bulan dari sekarang · {endLabel}</div>
          <h1>Total kekayaanmu kalau konsisten mulai hari ini</h1>
          <div className="arrival-total"><span className="rp">Rp</span><AnimNum value={cur.total} prefix="" dur={900} /></div>
          <div className="arrival-delta">
            <span className="d"><Icon name="wallet" size={16} color="#51606F" /> Modal disetor <b>{window.TM.fmt(cur.cumDeposited)}</b></span>
            <span className="d up"><Icon name="trending-up" size={16} color="#14A155" /> Bunga &amp; cashback <b>+{window.TM.fmt(cur.cumInterest)}</b></span>
            <span className="d"><Icon name="receipt-text" size={16} color="#51606F" /> Pajak <b>−{window.TM.fmt(cur.cumTax)}</b></span>
          </div>
        </div>

        <div className="dash-grid">
          {/* LEFT */}
          <div>
            <div className="panel">
              <div className="panel-h">
                <h3><Icon name="line-chart" size={17} color="#1253A5" /> Perjalanan kekayaanmu</h3>
                <div className="chart-legend">
                  <span className="lg"><span className="sw" style={{ background: '#1253A5' }} /> Total saldo</span>
                  <span className="lg"><span className="sw" style={{ background: '#F5A623' }} /> Perubahan aturan</span>
                  <span className="lg"><span className="sw" style={{ background: '#7BC143' }} /> Tonggak</span>
                </div>
              </div>
              <GrowthChart series={series} playMonth={playMonth} events={result.events} startDate={startDate} />
              <div className="dash-transport">
                <button className="play-btn" onClick={startPlay} aria-label={playing ? 'Jeda' : 'Putar'}>
                  <Icon name={playing ? 'pause' : (playMonth >= N ? 'rotate-ccw' : 'play')} size={19} color="#fff" />
                </button>
                <input type="range" className="rng-l" style={{ flex: 1 }} min="0" max={N} step="1" value={playMonth}
                  onChange={(e) => { setPlaying(false); setPlayMonth(+e.target.value); }} />
                <span className="tlabel">{curLabel}</span>
              </div>
            </div>

            <div className="stat-row">
              <div className="stat b">
                <div className="k"><Icon name="landmark" size={14} /> Saldo akhir</div>
                <div className="v">{window.TM.fmtShort(summary.finalTotal)}</div>
                <div className="f">{window.TM.fmt(summary.finalTotal)}</div>
              </div>
              <div className="stat g">
                <div className="k"><Icon name="sprout" size={14} /> Bunga + cashback</div>
                <div className="v">+{window.TM.fmtShort(summary.totalInterest)}</div>
                <div className="f">{summary.growthPct.toLocaleString('id-ID', { maximumFractionDigits: 0 })}% dari modal</div>
              </div>
              <div className="stat">
                <div className="k"><Icon name="coins" size={14} /> Modal disetor</div>
                <div className="v">{window.TM.fmtShort(summary.totalDeposited)}</div>
                <div className="f">dari kantongmu</div>
              </div>
              <div className="stat r">
                <div className="k"><Icon name="receipt-text" size={14} /> Total pajak</div>
                <div className="v">−{window.TM.fmtShort(summary.totalTax)}</div>
                <div className="f">{summary.totalTax > 0 ? 'pajak 20% bunga' : 'belum kena pajak'}</div>
              </div>
            </div>

            <div className="panel" style={{ marginTop: 22 }}>
              <div className="panel-h"><h3><Icon name="layers" size={17} color="#1253A5" /> Di mana uangmu berada</h3><span className="sub">{curLabel}</span></div>
              <div className="where-list">
                {PRODUCT_ORDER.map(k => {
                  const p = PRODUCTS[k], amt = buckets[k];
                  return (
                    <div className="where-item" key={k}>
                      <div className="wh-top">
                        <span className="dot" style={{ background: p.color }} />
                        <span className="nm">{p.name} <small>· {p.rate}</small></span>
                        <span className="am">{window.TM.fmt(amt)}</span>
                      </div>
                      <div className="bar"><div className="fill" style={{ width: (amt / whereMax * 100) + '%', background: p.color }} /></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {cur.celBuckets.length > 0 && (
              <div className="panel" style={{ marginTop: 22 }}>
                <div className="panel-h"><h3><Icon name="target" size={17} color="#9A57B0" /> Tujuan Celengan</h3><span className="sub">{curLabel}</span></div>
                <div className="goals-list">
                  {cur.celBuckets.map(c => {
                    const pct = c.goal > 0 ? Math.min(100, c.balance / c.goal * 100) : 100;
                    return (
                      <div className="goal-item" key={c.id}>
                        <div className="g-top">
                          <span className="gp">{c.purpose || 'Tanpa nama'}</span>
                          <span className="gv">{window.TM.fmt(c.balance)}{c.goal > 0 ? ' / ' + window.TM.fmt(c.goal) : ''}</span>
                        </div>
                        <div className="g-bar"><div className="g-fill" style={{ width: pct + '%' }} /></div>
                        {c.done && <span className="g-done"><Icon name="check-circle-2" size={12} color="#14A155" /> Target tercapai!</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="panel" style={{ marginTop: 22 }}>
              <div className="panel-h"><h3><Icon name="bell-ring" size={17} color="#1253A5" /> Catatan perjalanan</h3></div>
              {feed.length === 0 ? (
                <div className="feed-empty">Tekan play untuk memutar ulang perjalanan dan melihat tonggak, perubahan bunga, dan pajak muncul di sini.</div>
              ) : (
                <div className="feed">
                  {feed.map((e, i) => (
                    <div className={'feed-item tone-' + e.tone} key={e.type + e.month + i}>
                      <span className="fi-ic"><Icon name={e.icon} size={16} color="#fff" /></span>
                      <div style={{ flex: 1 }}>
                        <p className="fi-t">{e.title}</p>
                        <p className="fi-d">{e.desc}</p>
                      </div>
                      <span className="fi-m">{e.month === 0 ? 'awal' : window.TM.labelForMonth(startDate, e.month)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT — edit + restart */}
          <div className="panel edit-panel">
            <div className="ep-h">
              <span className="ic"><Icon name="settings-2" size={18} color="#fff" /></span>
              <div><h3>Setel ulang mesin</h3><p>Ubah, lalu lompat lagi</p></div>
            </div>
            <div className="ep-field">
              <div className="ep-row"><label>Setoran bulanan</label><span className="val">{window.TM.fmt(cfg.monthly)}</span></div>
              <input type="range" className="rng-l" min="0" max="80000000" step="500000" value={cfg.monthly} onChange={(e) => setMonthly(+e.target.value)} />
            </div>
            <div className="ep-field">
              <div className="ep-row"><label>Tujuan waktu</label><span className="val">{cfg.horizon.mode === 'date' && cfg.horizon.date ? endLabel : cfg.horizon.years + ' tahun'}</span></div>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {yearChips.map(y => (
                  <button key={y} onClick={() => setYears(y)}
                    style={{ flex: 1, minWidth: 44, padding: '8px 4px', borderRadius: 10, cursor: 'pointer', fontWeight: 700, fontSize: 12.5,
                      border: '1.5px solid ' + (cfg.horizon.mode === 'relative' && cfg.horizon.years === y ? 'var(--amar-blue)' : 'var(--line-2)'),
                      background: cfg.horizon.mode === 'relative' && cfg.horizon.years === y ? 'rgba(18,83,165,.07)' : '#fff',
                      color: cfg.horizon.mode === 'relative' && cfg.horizon.years === y ? 'var(--amar-blue)' : 'var(--ink-2)' }}>
                    {y}th
                  </button>
                ))}
              </div>
            </div>
            <div className="ep-restart">
              <button className="btn-restart" onClick={onRestart}><Icon name="rocket" size={17} color="#fff" /> Jalankan ulang mesin waktu</button>
              <button className="ep-edit-full" onClick={onEditFull}><Icon name="sliders-horizontal" size={15} /> Ubah alokasi &amp; celengan</button>
              <p className="ep-hint">Geser setoran atau ganti tujuan waktu — grafik di sebelah ikut berubah seketika. Tekan tombol di atas untuk perjalanan waktu yang baru.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="dash-cta">
          <div>
            <h3>Masa depan ini bisa kamu mulai hari ini.</h3>
            <p>Buka rekening Amar Bank Digital dalam hitungan menit dan kelola Celengan, Deposito, Brankas, hingga Depo Instan langsung dari ponsel — diawasi OJK, dijamin LPS.</p>
          </div>
          <StoreButtons />
        </div>

        <div className="dash-foot">
          © 2026 PT Bank Amar Indonesia Tbk — simulasi ilustratif berbasis asumsi bunga saat ini, bukan jaminan imbal hasil.
          <div className="seals">
            <span><Icon name="shield-check" size={13} color="#14A155" /> Diawasi OJK</span>
            <span><Icon name="landmark" size={13} color="#14A155" /> Dijamin LPS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Dashboard = Dashboard;
