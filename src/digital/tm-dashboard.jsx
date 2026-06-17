// Amar Bank Time Machine — arrival dashboard
const { useState: useSD, useEffect: useED, useRef: useRD, useMemo: useMD, useCallback: useCD } = React;

function Dashboard({ cfg, setCfg, result, onRestart, onEditFull, notify }) {
  const t = useTMLang();
  const series = result.series;
  const N = series.length - 1;
  const [playMonth, setPlayMonth] = useSD(N);
  const [playing, setPlaying] = useSD(false);
  const firedRef = useRD({});

  useED(() => { setPlayMonth(N); setPlaying(false); firedRef.current = {}; }, [result]);

  useED(() => {
    if (!playing) return;
    if (playMonth >= N) { setPlaying(false); return; }
    const id = setTimeout(() => setPlayMonth(m => Math.min(N, m + 1)), 200);
    return () => clearTimeout(id);
  }, [playing, playMonth, N]);

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
  const curLabel = playMonth === 0 ? t.now : window.TM.labelForMonth(startDate, playMonth);
  const feed = result.events.filter(e => e.month <= playMonth).slice().reverse();

  const startPlay = () => {
    if (playMonth >= N) { firedRef.current = {}; setPlayMonth(0); setPlaying(true); }
    else setPlaying(p => !p);
  };

  const buckets = {
    active: cur.active, celengan: cur.celengan, brankas: cur.brankas,
    deposito: cur.deposito + cur.depoHold, depoInstan: cur.depoInstan,
  };
  const whereMax = Math.max(1, ...Object.values(buckets));

  const yearChips = [1, 3, 5, 10, 20];
  const setMonthly = (v) => setCfg(p => ({ ...p, monthly: v }));
  const setYears = (y) => setCfg(p => ({ ...p, horizon: { ...p.horizon, mode: 'relative', years: y } }));

  const playIcon = playing ? 'pause' : (playMonth >= N ? 'rotate-ccw' : 'play');
  const playLabel = playing ? t.pause : (playMonth >= N ? t.replay : t.play);

  return (
    <div className="tm-scene tm-dash">
      <nav className="dash-nav">
        <div className="dash-nav-in">
          <img className="logo" src="assets/logo-horizontal.png" alt="Amar Bank" />
          <span className="dash-arrived"><Icon name="check-circle-2" size={14} /> {t.arrived(endLabel)}</span>
          <span className="spacer" />
          <TMLangToggle />
          <a className="dash-back" href="index.html"><Icon name="home" size={15} /> {t.dash_home}</a>
          <button className="btn btn-teal"
            onClick={() => notify(t.toast_app, 'smartphone', 'celebrate')}
            style={{ marginLeft: 4 }}>{t.download_app}</button>
        </div>
      </nav>

      <div className="dash-wrap">
        <div className="arrival-head">
          <div className="when"><Icon name="clock" size={14} /> {summary.months} {t.months_from_now} · {endLabel}</div>
          <h1>{t.dash_h1}</h1>
          <div className="arrival-total"><span className="rp">Rp</span><AnimNum value={cur.total} prefix="" dur={900} /></div>
          <div className="arrival-delta">
            <span className="d"><Icon name="wallet" size={16} color="#51606F" /> {t.deposited_lbl} <b>{window.TM.fmt(cur.cumDeposited)}</b></span>
            <span className="d up"><Icon name="trending-up" size={16} color="#14A155" /> {t.interest_lbl} <b>+{window.TM.fmt(cur.cumInterest)}</b></span>
            <span className="d"><Icon name="receipt-text" size={16} color="#51606F" /> {t.tax_lbl} <b>−{window.TM.fmt(cur.cumTax)}</b></span>
          </div>
        </div>

        <div className="dash-grid">
          <div>
            <div className="panel">
              <div className="panel-h">
                <h3><Icon name="line-chart" size={17} color="#1253A5" /> {t.chart_h}</h3>
                <div className="chart-legend">
                  <span className="lg"><span className="sw" style={{ background: '#1253A5' }} /> {t.lg_total}</span>
                  <span className="lg"><span className="sw" style={{ background: '#F5A623' }} /> {t.lg_change}</span>
                  <span className="lg"><span className="sw" style={{ background: '#7BC143' }} /> {t.lg_milestone}</span>
                </div>
              </div>
              <GrowthChart series={series} playMonth={playMonth} events={result.events} startDate={startDate} />
              <div className="dash-transport">
                <button className="play-btn" onClick={startPlay} aria-label={playLabel}>
                  <Icon name={playIcon} size={19} color="#fff" />
                </button>
                <input type="range" className="rng-l" style={{ flex: 1 }} min="0" max={N} step="1" value={playMonth}
                  onChange={(e) => { setPlaying(false); setPlayMonth(+e.target.value); }} />
                <span className="tlabel">{curLabel}</span>
              </div>
            </div>

            <div className="stat-row">
              <div className="stat b">
                <div className="k"><Icon name="landmark" size={14} /> {t.stat_final}</div>
                <div className="v">{window.TM.fmtShort(summary.finalTotal)}</div>
                <div className="f">{window.TM.fmt(summary.finalTotal)}</div>
              </div>
              <div className="stat g">
                <div className="k"><Icon name="sprout" size={14} /> {t.stat_interest}</div>
                <div className="v">+{window.TM.fmtShort(summary.totalInterest)}</div>
                <div className="f">{t.stat_from_modal(summary.growthPct.toLocaleString('id-ID', { maximumFractionDigits: 0 }))}</div>
              </div>
              <div className="stat">
                <div className="k"><Icon name="coins" size={14} /> {t.stat_capital}</div>
                <div className="v">{window.TM.fmtShort(summary.totalDeposited)}</div>
                <div className="f">{t.stat_from_pocket}</div>
              </div>
              <div className="stat r">
                <div className="k"><Icon name="receipt-text" size={14} /> {t.stat_tax}</div>
                <div className="v">−{window.TM.fmtShort(summary.totalTax)}</div>
                <div className="f">{t.stat_tax_note(summary.totalTax > 0)}</div>
              </div>
            </div>

            <div className="panel" style={{ marginTop: 22 }}>
              <div className="panel-h"><h3><Icon name="layers" size={17} color="#1253A5" /> {t.where_h}</h3><span className="sub">{curLabel}</span></div>
              <div className="where-list">
                {PRODUCT_ORDER.map(k => {
                  const p = PRODUCTS[k], amt = buckets[k];
                  const pd = t.products[k];
                  return (
                    <div className="where-item" key={k}>
                      <div className="wh-top">
                        <span className="dot" style={{ background: p.color }} />
                        <span className="nm">{pd.name} <small>· {pd.rate}</small></span>
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
                <div className="panel-h"><h3><Icon name="target" size={17} color="#9A57B0" /> {t.goals_h}</h3><span className="sub">{curLabel}</span></div>
                <div className="goals-list">
                  {cur.celBuckets.map(c => {
                    const pct = c.goal > 0 ? Math.min(100, c.balance / c.goal * 100) : 100;
                    return (
                      <div className="goal-item" key={c.id}>
                        <div className="g-top">
                          <span className="gp">{c.purpose || t.unnamed}</span>
                          <span className="gv">{window.TM.fmt(c.balance)}{c.goal > 0 ? ' / ' + window.TM.fmt(c.goal) : ''}</span>
                        </div>
                        <div className="g-bar"><div className="g-fill" style={{ width: pct + '%' }} /></div>
                        {c.done && <span className="g-done"><Icon name="check-circle-2" size={12} color="#14A155" /> {t.goal_reached}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="panel" style={{ marginTop: 22 }}>
              <div className="panel-h"><h3><Icon name="bell-ring" size={17} color="#1253A5" /> {t.feed_h}</h3></div>
              {feed.length === 0 ? (
                <div className="feed-empty">{t.feed_empty}</div>
              ) : (
                <div className="feed">
                  {feed.map((e, i) => (
                    <div className={'feed-item tone-' + e.tone} key={e.type + e.month + i}>
                      <span className="fi-ic"><Icon name={e.icon} size={16} color="#fff" /></span>
                      <div style={{ flex: 1 }}>
                        <p className="fi-t">{e.title}</p>
                        <p className="fi-d">{e.desc}</p>
                      </div>
                      <span className="fi-m">{e.month === 0 ? t.now : window.TM.labelForMonth(startDate, e.month)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="panel edit-panel">
            <div className="ep-h">
              <span className="ic"><Icon name="settings-2" size={18} color="#fff" /></span>
              <div><h3>{t.edit_h}</h3><p>{t.edit_sub}</p></div>
            </div>
            <div className="ep-field">
              <div className="ep-row"><label>{t.monthly_dep}</label><span className="val">{window.TM.fmt(cfg.monthly)}</span></div>
              <input type="range" className="rng-l" min="0" max="80000000" step="500000" value={cfg.monthly} onChange={(e) => setMonthly(+e.target.value)} />
            </div>
            <div className="ep-field">
              <div className="ep-row">
                <label>{t.time_goal}</label>
                <span className="val">{cfg.horizon.mode === 'date' && cfg.horizon.date ? endLabel : cfg.horizon.years + ' ' + t.yr_unit}</span>
              </div>
              <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
                {yearChips.map(y => (
                  <button key={y} onClick={() => setYears(y)}
                    style={{ flex: 1, minWidth: 44, padding: '8px 4px', borderRadius: 10, cursor: 'pointer', fontWeight: 700, fontSize: 12.5,
                      border: '1.5px solid ' + (cfg.horizon.mode === 'relative' && cfg.horizon.years === y ? 'var(--amar-blue)' : 'var(--line-2)'),
                      background: cfg.horizon.mode === 'relative' && cfg.horizon.years === y ? 'rgba(18,83,165,.07)' : '#fff',
                      color: cfg.horizon.mode === 'relative' && cfg.horizon.years === y ? 'var(--amar-blue)' : 'var(--ink-2)' }}>
                    {y}{t.yr_unit.slice(0,2)}
                  </button>
                ))}
              </div>
            </div>
            <div className="ep-restart">
              <button className="btn-restart" onClick={onRestart}><Icon name="rocket" size={17} color="#fff" /> {t.rerun}</button>
              <button className="ep-edit-full" onClick={onEditFull}><Icon name="sliders-horizontal" size={15} /> {t.edit_alloc}</button>
              <p className="ep-hint">{t.edit_hint}</p>
            </div>
          </div>
        </div>

        <div className="dash-cta">
          <div>
            <h3>{t.cta_h}</h3>
            <p>{t.cta_p}</p>
          </div>
          <StoreButtons />
        </div>

        <div className="dash-foot">
          {t.footer}
          <div className="seals">
            <span><Icon name="shield-check" size={13} color="#14A155" /> {t.seal_ojk}</span>
            <span><Icon name="landmark" size={13} color="#14A155" /> {t.seal_lps}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

window.Dashboard = Dashboard;
