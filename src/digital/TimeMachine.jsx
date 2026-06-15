// Amar Bank Time Machine — orchestrator (wizard → warp → dashboard)
const { useState: useST, useEffect: useET, useMemo: useMT, useCallback: useCT, useRef: useRT } = React;

const LS_CFG = 'amar_tm_cfg_v1';

function serialize(cfg) { try { return JSON.stringify({ ...cfg, startDate: cfg.startDate.toISOString() }); } catch (e) { return null; } }
function deserialize(str) {
  try {
    const o = JSON.parse(str);
    o.startDate = o.startDate ? new Date(o.startDate) : startOfThisMonth();
    // re-anchor startDate to this month so projections stay "from now"
    o.startDate = startOfThisMonth();
    return o;
  } catch (e) { return null; }
}

function TimeMachine() {
  const [cfg, setCfg] = useST(() => {
    const saved = localStorage.getItem(LS_CFG);
    const d = saved && deserialize(saved);
    return d || DEFAULT_CFG;
  });
  // Always begin the journey at the wizard's first step (monthly deposit input).
  const [phase, setPhase] = useST('wizard');
  const [warpKey, setWarpKey] = useST(0);
  const [editing, setEditing] = useST(false);
  const [toast, setToast] = useST(null);
  const [confetti, setConfetti] = useST(0);
  const toastTimer = useRT(null);
  const reduced = useMT(() => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);

  // persist cfg
  useET(() => { const s = serialize(cfg); if (s) localStorage.setItem(LS_CFG, s); }, [cfg]);

  const months = cfgMonths(cfg);
  const endDate = useMT(() => cfgEndDate(cfg), [cfg]);
  const result = useMT(() => window.TM.project({
    monthly: cfg.monthly, initial: cfg.initial, startDate: cfg.startDate, months,
    celengans: cfg.celengans, brankasFrac: cfg.brankasFrac, deposito: cfg.deposito, depoInstan: cfg.depoInstan,
  }), [cfg, months]);

  const notify = useCT((msg, icon, tone) => {
    setToast({ msg, icon, tone });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2800);
    if (tone === 'celebrate') setConfetti(Date.now());
  }, []);

  const launch = useCT(() => { setEditing(false); setWarpKey(k => k + 1); setPhase('warp'); }, []);

  const onArrive = useCT(() => {
    setPhase('dash');
    setTimeout(() => notify('Selamat datang di ' + endDate.getFullYear() + '! 🚀', 'party-popper', 'celebrate'), 250);
  }, [endDate]);

  return (
    <div className="tm">
      {phase === 'wizard' && (
        <Wizard cfg={cfg} setCfg={setCfg} onLaunch={launch} />
      )}

      {phase === 'warp' && (
        <Warp key={warpKey} startDate={cfg.startDate} endDate={endDate} onArrive={onArrive} reduced={reduced} />
      )}

      {phase === 'dash' && (
        <Dashboard cfg={cfg} setCfg={setCfg} result={result}
          onRestart={launch}
          onEditFull={() => setEditing(true)}
          notify={notify} />
      )}

      {/* full-edit overlay (reuses the wizard over the dashboard) */}
      {editing && phase === 'dash' && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 350, overflow: 'auto' }}>
          <Wizard cfg={cfg} setCfg={setCfg} initialStep={1} launchLabel="Lompat lagi ke masa depan"
            onLaunch={launch} onExit={() => setEditing(false)} />
        </div>
      )}

      {/* toast + confetti */}
      <div className={'tm-toast' + (toast ? ' show' : '')}>
        {toast && <>
          <span className="ti" style={{ background: toast.tone === 'warn' ? 'var(--warning)' : 'var(--grad-mark)' }}>
            <Icon name={toast.icon} size={15} color="#fff" />
          </span>{toast.msg}</>}
      </div>
      <Confetti seed={confetti} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('tm-root')).render(<TimeMachine />);
