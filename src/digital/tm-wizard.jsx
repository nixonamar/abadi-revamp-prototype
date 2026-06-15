// Amar Bank Time Machine — wizard steps (monthly → allocation → time)
const { useState: useS, useEffect: useE, useRef: useR, useMemo: useM } = React;

// ---------- config helpers ----------
const uid = () => 'c' + Math.random().toString(36).slice(2, 8);
function startOfThisMonth() { const d = new Date(); return new Date(d.getFullYear(), d.getMonth(), 1); }

const DEFAULT_CFG = {
  monthly: 5_000_000,
  initial: 0,
  startDate: startOfThisMonth(),
  celengans: [
    { id: uid(), purpose: 'Dana Darurat', goal: 30_000_000, frac: 0 },
    { id: uid(), purpose: 'Liburan ke Jepang', goal: 50_000_000, frac: 0 },
  ],
  brankasFrac: 0,
  deposito: {
    mode: 'monthly', frac: 0, tenor: 12,
    milestones: [
      { threshold: 100_000_000, tenor: 12, amount: 50_000_000 },
      { threshold: 500_000_000, tenor: 36, amount: 200_000_000 },
    ],
  },
  depoInstan: { frac: 0, tenor: 12 },
  horizon: { mode: 'relative', years: 5, date: '' },
};

function cloneCfg(c) { return JSON.parse(JSON.stringify({ ...c, startDate: c.startDate.toISOString() })); }
function reviveCfg(c) { return { ...c, startDate: new Date(c.startDate) }; }

function totalFrac(cfg) {
  let s = cfg.brankasFrac + cfg.deposito.frac + cfg.depoInstan.frac;
  cfg.celengans.forEach(c => s += c.frac);
  return s;
}
function activeFrac(cfg) { return Math.max(0, 1 - totalFrac(cfg)); }

function monthsBetween(start, end) {
  return Math.max(1, (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()));
}
function cfgMonths(cfg) {
  if (cfg.horizon.mode === 'date' && cfg.horizon.date) {
    const d = new Date(cfg.horizon.date);
    if (!isNaN(d)) return monthsBetween(cfg.startDate, new Date(d.getFullYear(), d.getMonth(), 1));
    return 12;
  }
  return Math.round((cfg.horizon.years || 1) * 12);
}
function cfgEndDate(cfg) { return window.TM.dateForMonth(cfg.startDate, cfgMonths(cfg)); }

// ---------- number input helpers ----------
const digits = (s) => { const v = parseInt(String(s).replace(/[^\d]/g, ''), 10); return isNaN(v) ? 0 : v; };
const grp = (n) => Math.round(n).toLocaleString('id-ID');

// generic allocation input: edits frac via Rp or %; clamps to maxFrac
function AllocInput({ frac, monthly, mode, onFrac, maxFrac, color, wide }) {
  const pct = Math.round(frac * 100);
  const amt = Math.round(frac * monthly);
  const display = mode === 'pct' ? String(pct) : grp(amt);
  const onChange = (e) => {
    const raw = digits(e.target.value);
    let f = mode === 'pct' ? raw / 100 : (monthly > 0 ? raw / monthly : 0);
    if (maxFrac != null) f = Math.min(f, maxFrac);
    onFrac(Math.max(0, f));
  };
  return (
    <div className={'amt-ctrl' + (wide ? ' wide' : '')} style={color ? { borderColor: undefined } : null}>
      <span className="u">{mode === 'pct' ? '%' : 'Rp'}</span>
      <input type="text" inputMode="numeric" value={display} onChange={onChange}
        onFocus={(e) => e.target.select()} />
      {mode === 'rp' && <span className="u" style={{ fontSize: 11 }}>/bln</span>}
    </div>
  );
}

// ===================== STEP 1 — MONTHLY =====================
function StepMonthly({ cfg, set }) {
  const chips = [2_000_000, 5_000_000, 10_000_000, 25_000_000];
  return (
    <div className="wiz-card">
      <span className="wiz-eyebrow"><Icon name="banknote" size={13} color="#9CCF69" /> Langkah 1 · Setoran</span>
      <h1 className="wiz-title">Berapa yang akan kamu <span className="g">sisihkan tiap bulan?</span></h1>
      <p className="wiz-sub">Ini mesin waktu kekayaanmu. Mulai dengan setoran rutin bulanan — sekecil apa pun, biarkan bunga majemuk dan kelima produk Amar Bank bekerja melontarkannya ke masa depan.</p>
      <div className="bigmoney">
        <span className="rp">Rp</span>
        <input type="text" inputMode="numeric" value={grp(cfg.monthly)} autoFocus
          onChange={(e) => set({ monthly: Math.min(500_000_000, digits(e.target.value)) })}
          onFocus={(e) => e.target.select()} />
        <span className="per">/ bulan</span>
      </div>
      <div className="money-chips">
        {chips.map(c => (
          <button key={c} className={'money-chip' + (cfg.monthly === c ? ' on' : '')}
            onClick={() => set({ monthly: c })}>{window.TM.fmtShort(c).replace(' ', '')}</button>
        ))}
      </div>
      <div style={{ marginTop: 26, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,.7)', fontWeight: 600 }}>Punya dana awal untuk memulai?</span>
        <div className="amt-ctrl wide">
          <span className="u">Rp</span>
          <input type="text" inputMode="numeric" value={grp(cfg.initial)}
            onChange={(e) => set({ initial: Math.min(2_000_000_000, digits(e.target.value)) })}
            onFocus={(e) => e.target.select()} />
        </div>
        <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.5)' }}>opsional</span>
      </div>
    </div>
  );
}

// ===================== STEP 2 — ALLOCATION =====================
function CelenganBlock({ cfg, set, mode }) {
  const cels = cfg.celengans;
  const setCel = (id, patch) => set({ celengans: cels.map(c => c.id === id ? { ...c, ...patch } : c) });
  const placeholders = ['Dana Darurat', 'Liburan ke Jepang', 'DP Rumah', 'Mobil Baru', 'Dana Pendidikan', 'Modal Nikah', 'Gadget Impian', 'Naik Haji'];
  return (
    <div className="ablock">
      <div className="ablock-head">
        <span className="ablock-ic" style={{ background: 'var(--grad-celengan)' }}><Icon name="piggy-bank" size={20} color="#fff" /></span>
        <div className="ablock-meta">
          <h4>Celengan <span className="rate">5,5% p.a.</span></h4>
          <p>Tabungan bertujuan, bunga cair harian. Buat beberapa celengan dengan target masing-masing.</p>
        </div>
      </div>
      <div className="cel-list">
        {cels.map((c, i) => {
          const monthlyAmt = cfg.monthly * c.frac;
          const goalPct = c.goal > 0 ? Math.min(100, 0) : 0; // contribution preview shown elsewhere
          const othersFrac = totalFrac(cfg) - c.frac;
          return (
            <div className="cel-card" key={c.id}>
              <div className="cel-row1">
                <input className="cel-purpose" value={c.purpose}
                  placeholder={'Tujuan, mis. ' + placeholders[i % placeholders.length]}
                  onChange={(e) => setCel(c.id, { purpose: e.target.value })} />
                <button className="cel-del" title="Hapus celengan" onClick={() => set({ celengans: cels.filter(x => x.id !== c.id) })}>
                  <Icon name="trash-2" size={15} />
                </button>
              </div>
              <div className="cel-row2">
                <div className="cel-field">
                  <label>Setor</label>
                  <div className="cel-mini">
                    <span className="u">{mode === 'pct' ? '%' : 'Rp'}</span>
                    <input type="text" inputMode="numeric"
                      value={mode === 'pct' ? String(Math.round(c.frac * 100)) : grp(cfg.monthly * c.frac)}
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => {
                        const raw = digits(e.target.value);
                        let f = mode === 'pct' ? raw / 100 : (cfg.monthly > 0 ? raw / cfg.monthly : 0);
                        f = Math.min(f, Math.max(0, 1 - othersFrac));
                        setCel(c.id, { frac: Math.max(0, f) });
                      }} />
                  </div>
                </div>
                <div className="cel-field">
                  <label><Icon name="target" size={12} color="rgba(255,255,255,.6)" /> Target</label>
                  <div className="cel-mini">
                    <span className="u">Rp</span>
                    <input type="text" inputMode="numeric" value={grp(c.goal)}
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => setCel(c.id, { goal: digits(e.target.value) })} />
                  </div>
                </div>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', marginLeft: 'auto' }}>
                  {c.goal > 0 && monthlyAmt > 0 ? '±' + Math.ceil(c.goal / monthlyAmt) + ' bln tercapai' : 'tanpa target'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {cels.length < 10 && (
        <button className="cel-add" onClick={() => set({ celengans: [...cels, { id: uid(), purpose: '', goal: 0, frac: 0 }] })}>
          <Icon name="plus" size={15} /> Tambah celengan
        </button>
      )}
    </div>
  );
}

function DepositoBlock({ cfg, set, mode }) {
  const dep = cfg.deposito;
  const setDep = (patch) => set({ deposito: { ...dep, ...patch } });
  const othersFrac = totalFrac(cfg) - dep.frac;
  const tenors = window.TM.DEPO_TENORS;
  return (
    <div className="ablock">
      <div className="ablock-head">
        <span className="ablock-ic" style={{ background: 'var(--grad-deposito)' }}><Icon name="trending-up" size={20} color="#fff" /></span>
        <div className="ablock-meta">
          <h4>Deposito <span className="rate">hingga 9% p.a.</span></h4>
          <p>Bunga tertinggi, cair tiap bulan. Tempatkan rutin atau saat saldomu menembus tonggak tertentu.</p>
        </div>
        <AllocInput frac={dep.frac} monthly={cfg.monthly} mode={mode} wide
          maxFrac={Math.max(0, 1 - othersFrac)} onFrac={(f) => setDep({ frac: f })} />
      </div>
      <div className="depo-modes">
        <button className={'depo-mode' + (dep.mode === 'monthly' ? ' on' : '')} onClick={() => setDep({ mode: 'monthly' })}>
          <div className="dm-t"><Icon name="repeat" size={15} color="#fff" /> Tiap bulan <span className="dm-radio" /></div>
          <div className="dm-d">Porsi di atas dikunci jadi deposito baru setiap bulan.</div>
        </button>
        <button className={'depo-mode' + (dep.mode === 'milestone' ? ' on' : '')} onClick={() => setDep({ mode: 'milestone' })}>
          <div className="dm-t"><Icon name="flag" size={15} color="#fff" /> Saat capai tonggak <span className="dm-radio" /></div>
          <div className="dm-d">Dana menumpuk dulu, lalu dikunci saat saldo capai target.</div>
        </button>
      </div>

      {dep.mode === 'monthly' ? (
        <div className="tenor-sel">
          <span className="tl">Tenor:</span>
          {tenors.map(t => (
            <button key={t} className={'tchip' + (dep.tenor === t ? ' on' : '')} onClick={() => setDep({ tenor: t })}>
              {t} bln <small>· {(window.TM.DEPO_RATES[t] * 100).toLocaleString('id-ID', { maximumFractionDigits: 2 })}%</small>
            </button>
          ))}
        </div>
      ) : (
        <div className="ms-list">
          {dep.milestones.map((ms, idx) => (
            <div className="ms-card" key={idx}>
              <span className="ms-step">{idx + 1}</span>
              <span className="ms-seg">Saat saldo capai
                <span className="ms-input"><span className="u">Rp</span>
                  <input type="text" inputMode="numeric" value={grp(ms.threshold)} onFocus={(e) => e.target.select()}
                    onChange={(e) => setDep({ milestones: dep.milestones.map((m, i) => i === idx ? { ...m, threshold: digits(e.target.value) } : m) })} />
                </span>
              </span>
              <span className="ms-seg">kunci
                <span className="ms-input"><span className="u">Rp</span>
                  <input type="text" inputMode="numeric" value={grp(ms.amount)} onFocus={(e) => e.target.select()}
                    onChange={(e) => setDep({ milestones: dep.milestones.map((m, i) => i === idx ? { ...m, amount: digits(e.target.value) } : m) })} />
                </span>
              </span>
              <span className="ms-seg">tenor
                <span className="ms-input">
                  <select value={ms.tenor} onChange={(e) => setDep({ milestones: dep.milestones.map((m, i) => i === idx ? { ...m, tenor: +e.target.value } : m) })}>
                    {tenors.map(t => <option key={t} value={t}>{t} bln</option>)}
                  </select>
                </span>
              </span>
              <button className="ms-del" onClick={() => setDep({ milestones: dep.milestones.filter((_, i) => i !== idx) })}><Icon name="x" size={14} /></button>
            </div>
          ))}
          {dep.milestones.length < 5 && (
            <button className="ms-add" onClick={() => setDep({ milestones: [...dep.milestones, { threshold: 1_000_000_000, tenor: 36, amount: 300_000_000 }] })}>
              <Icon name="plus" size={14} /> Tambah tonggak
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function SimpleBlock({ pkey, grad, icon, title, rate, desc, frac, onFrac, maxFrac, cfg, mode, children }) {
  return (
    <div className="ablock">
      <div className="ablock-head">
        <span className="ablock-ic" style={{ background: grad }}><Icon name={icon} size={20} color="#fff" /></span>
        <div className="ablock-meta">
          <h4>{title} <span className="rate">{rate}</span></h4>
          <p>{desc}</p>
        </div>
        <AllocInput frac={frac} monthly={cfg.monthly} mode={mode} wide maxFrac={maxFrac} onFrac={onFrac} />
      </div>
      {children}
    </div>
  );
}

function StepAllocation({ cfg, set, mode, setMode }) {
  const tf = totalFrac(cfg);
  const af = activeFrac(cfg);
  const over = tf > 1.0001;
  const segs = [
    ...cfg.celengans.map(c => ({ f: c.frac, c: '#9A57B0' })),
    { f: cfg.brankasFrac, c: '#2C5BA0' },
    { f: cfg.deposito.frac, c: '#14A155' },
    { f: cfg.depoInstan.frac, c: '#FE2C51' },
    { f: af, c: '#1BB1ED' },
  ];
  const diTenors = window.TM.DI_TENORS;
  const diRate = window.TM.depoInstanRate(cfg.depoInstan.tenor, cfg.monthly * cfg.depoInstan.frac);

  return (
    <div className="wiz-card" style={{ maxWidth: 880 }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <span className="wiz-eyebrow"><Icon name="layout-grid" size={13} color="#9CCF69" /> Langkah 2 · Alokasi</span>
          <h1 className="wiz-title" style={{ fontSize: 'clamp(26px,3.4vw,40px)', marginBottom: 6 }}>Sebar <span className="g">{window.TM.fmt(cfg.monthly)}</span>/bulan</h1>
        </div>
        <div className="alloc-mode" style={{ marginTop: 8 }}>
          <button className={mode === 'rp' ? 'on' : ''} onClick={() => setMode('rp')}>Rupiah</button>
          <button className={mode === 'pct' ? 'on' : ''} onClick={() => setMode('pct')}>Persen</button>
        </div>
      </div>

      <div className="alloc-meter">
        <div className="track">
          {segs.map((s, i) => <span key={i} className="seg" style={{ width: Math.max(0, Math.min(100, s.f * 100)) + '%', background: s.c }} />)}
        </div>
        <span className={'pct' + (over ? ' over' : '')}>
          {over ? 'Melebihi 100%' : <>{Math.round(tf * 100)}% teralokasi · <span className="left">sisa {Math.round(af * 100)}% ke Aktif</span></>}
        </span>
      </div>

      <div className="alloc-scroll">
        <CelenganBlock cfg={cfg} set={set} mode={mode} />

        <DepositoBlock cfg={cfg} set={set} mode={mode} />

        <SimpleBlock pkey="depoInstan" grad="var(--grad-depo)" icon="zap" title="Depo Instan" rate="cashback di muka"
          desc="Bunga dibayar di muka langsung ke Saldo Aktif begitu dana ditempatkan."
          frac={cfg.depoInstan.frac} mode={mode} cfg={cfg}
          maxFrac={Math.max(0, 1 - (totalFrac(cfg) - cfg.depoInstan.frac))}
          onFrac={(f) => set({ depoInstan: { ...cfg.depoInstan, frac: f } })}>
          <div className="tenor-sel">
            <span className="tl">Tenor:</span>
            {diTenors.map(t => (
              <button key={t} className={'tchip' + (cfg.depoInstan.tenor === t ? ' on' : '')}
                style={cfg.depoInstan.tenor === t ? { background: '#FE2C51', borderColor: '#FE2C51' } : null}
                onClick={() => set({ depoInstan: { ...cfg.depoInstan, tenor: t } })}>{t} bln</button>
            ))}
            <span style={{ fontSize: 11.5, color: 'var(--amar-green-lt)', fontWeight: 700, marginLeft: 4 }}>
              cashback {(diRate * 100).toLocaleString('id-ID', { maximumFractionDigits: 1 })}%
            </span>
          </div>
        </SimpleBlock>

        <SimpleBlock pkey="brankas" grad="linear-gradient(150deg,#2C5BA0,#1A3866)" icon="vault" title="Brankas" rate="3,5% p.a."
          desc="Simpanan ekstra-aman untuk dana jarang disentuh. Penarikan butuh verifikasi berlapis."
          frac={cfg.brankasFrac} mode={mode} cfg={cfg}
          maxFrac={Math.max(0, 1 - (totalFrac(cfg) - cfg.brankasFrac))}
          onFrac={(f) => set({ brankasFrac: f })} />

        <div className="ablock" style={{ background: 'rgba(27,177,237,.1)', borderColor: 'rgba(27,177,237,.3)' }}>
          <div className="ablock-head">
            <span className="ablock-ic" style={{ background: 'linear-gradient(150deg,#1BB1ED,#1253A5)' }}><Icon name="wallet" size={20} color="#fff" /></span>
            <div className="ablock-meta">
              <h4>Saldo Aktif <span className="rate">0,5% p.a.</span></h4>
              <p>Sisa yang tak dialokasikan tinggal di sini — likuid penuh untuk transaksi harian.</p>
            </div>
            <div className="amt-ctrl wide" style={{ background: 'transparent', borderColor: 'transparent' }}>
              <span className="u">{mode === 'pct' ? '' : 'Rp'}</span>
              <input type="text" readOnly value={mode === 'pct' ? Math.round(af * 100) + '%' : grp(cfg.monthly * af)}
                style={{ color: '#fff', opacity: .9 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===================== STEP 3 — TIME =====================
function StepTime({ cfg, set }) {
  const h = cfg.horizon;
  const setH = (patch) => set({ horizon: { ...h, ...patch } });
  const yearChips = [1, 3, 5, 10, 20];
  const months = cfgMonths(cfg);
  const end = cfgEndDate(cfg);
  const endLabel = window.TM.MONTH_NAMES[end.getMonth()] + ' ' + end.getFullYear();
  const minDate = (() => { const d = new Date(cfg.startDate); d.setMonth(d.getMonth() + 1); return d.toISOString().slice(0, 10); })();

  return (
    <div className="wiz-card">
      <span className="wiz-eyebrow"><Icon name="clock" size={13} color="#9CCF69" /> Langkah 3 · Tujuan waktu</span>
      <h1 className="wiz-title">Kapan kamu ingin <span className="g">melihat kekayaanmu?</span></h1>
      <p className="wiz-sub">Setel tujuan mesin waktu. Lompat beberapa tahun ke depan, atau bidik tanggal spesifik yang berarti buatmu.</p>

      <div className="time-modes">
        <button className={'time-mode' + (h.mode === 'relative' ? ' on' : '')} onClick={() => setH({ mode: 'relative' })}>
          <span className="tm-ic"><Icon name="fast-forward" size={22} color="#fff" /></span>
          <h4>Maju sekian tahun</h4>
          <p>Lompat 1, 3, 5, hingga 30 tahun dari sekarang.</p>
        </button>
        <button className={'time-mode' + (h.mode === 'date' ? ' on' : '')} onClick={() => setH({ mode: 'date' })}>
          <span className="tm-ic"><Icon name="calendar-clock" size={22} color="#fff" /></span>
          <h4>Tanggal tertentu</h4>
          <p>Bidik tanggal spesifik — ulang tahun, pensiun, wisuda.</p>
        </button>
      </div>

      {h.mode === 'relative' ? (
        <div className="time-detail">
          <div className="year-chips">
            {yearChips.map(y => (
              <button key={y} className={'year-chip' + (h.years === y ? ' on' : '')} onClick={() => setH({ years: y })}>
                <div className="yn">{y}</div><div className="yl">tahun</div>
              </button>
            ))}
          </div>
          <div className="year-slider">
            <div className="ys-row"><label>Atau geser bebas</label><span className="v">{h.years} tahun ({months} bulan)</span></div>
            <input type="range" className="rng-d" min="1" max="30" step="1" value={h.years} onChange={(e) => setH({ years: +e.target.value })} />
          </div>
        </div>
      ) : (
        <div className="time-detail">
          <div className="date-pick">
            <Icon name="calendar" size={20} color="rgba(255,255,255,.7)" />
            <input type="date" min={minDate} value={h.date || ''} onChange={(e) => setH({ date: e.target.value })} />
          </div>
        </div>
      )}

      <div className="arrive-note">
        <Icon name="sparkles" size={16} color="#9CCF69" />
        Mesin waktu akan membawamu ke <b>{endLabel}</b> — {months} bulan dari sekarang.
      </div>
    </div>
  );
}

// ===================== WIZARD SHELL =====================
function Wizard({ cfg, setCfg, onLaunch, onExit, initialStep = 0, launchLabel = 'Nyalakan Mesin Waktu' }) {
  const [step, setStep] = useS(initialStep);
  const [mode, setMode] = useS('rp'); // rp | pct
  const set = (patch) => setCfg(prev => ({ ...prev, ...patch }));

  const steps = [
    { k: 'monthly', lbl: 'Setoran' },
    { k: 'alloc', lbl: 'Alokasi' },
    { k: 'time', lbl: 'Waktu' },
  ];
  const canNext = step === 0 ? cfg.monthly > 0 : step === 1 ? totalFrac(cfg) <= 1.0001 : true;
  const timeOk = cfgMonths(cfg) >= 1;

  return (
    <div className="tm-scene scene-dark">
      <StarField count={70} />
      <header className="wiz-top">
        <img className="logo" src="assets/logo-bo-white.png" alt="Amar Bank"
          onError={(e) => { e.target.src = 'assets/logo-horizontal.png'; }} />
        <div className="wiz-steps">
          {steps.map((s, i) => (
            <div className="ws" key={s.k} style={{ display: 'contents' }}>
              <div className={'ws' + (i === step ? ' active' : i < step ? ' done' : '')}>
                <span className="dot">{i < step ? <Icon name="check" size={14} color="#06310f" /> : i + 1}</span>
                <span className="lbl">{s.lbl}</span>
              </div>
              {i < steps.length - 1 && <span className={'bar' + (i < step ? ' fill' : '')} />}
            </div>
          ))}
        </div>
        <span className="spacer" />
        {onExit ? (
          <button className="wiz-exit" onClick={onExit}><Icon name="x" size={16} /> Tutup</button>
        ) : (
          <a className="wiz-exit" href="index.html"><Icon name="x" size={16} /> Keluar</a>
        )}
      </header>

      <div className="wiz-body">
        {step === 0 && <StepMonthly key="s0" cfg={cfg} set={set} />}
        {step === 1 && <StepAllocation key="s1" cfg={cfg} set={set} mode={mode} setMode={setMode} />}
        {step === 2 && <StepTime key="s2" cfg={cfg} set={set} />}
      </div>

      <div style={{ position: 'relative', zIndex: 3, padding: '0 clamp(18px,4vw,52px) 34px' }}>
        <div className="wiz-card" style={{ maxWidth: step === 1 ? 880 : 820, animation: 'none' }}>
          <div className="wiz-nav">
            {step > 0 ? (
              <button className="btn-ghost-d" onClick={() => setStep(s => s - 1)}><Icon name="arrow-left" size={16} color="#fff" /> Kembali</button>
            ) : onExit ? (
              <button className="btn-ghost-d" onClick={onExit}><Icon name="arrow-left" size={16} color="#fff" /> Batal</button>
            ) : (
              <a className="btn-ghost-d" href="index.html"><Icon name="arrow-left" size={16} color="#fff" /> Beranda</a>
            )}
            <span className="grow" />
            {step < 2 ? (
              <button className="btn-next" disabled={!canNext} onClick={() => setStep(s => s + 1)}>
                Lanjut <Icon name="arrow-right" size={17} color="#1253A5" />
              </button>
            ) : (
              <button className="btn-launch" disabled={!timeOk} onClick={onLaunch}>
                <Icon name="rocket" size={18} color="#06310f" /> {launchLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Wizard, DEFAULT_CFG, totalFrac, activeFrac, cfgMonths, cfgEndDate, startOfThisMonth, uid });
