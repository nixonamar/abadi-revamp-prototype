// Amar Bank Time Machine — orchestrator (wizard → warp → dashboard)
const { useState: useST, useEffect: useET, useMemo: useMT, useCallback: useCT, useRef: useRT } = React;

const LS_CFG = 'amar_tm_cfg_v1';

function serialize(cfg) { try { return JSON.stringify({ ...cfg, startDate: cfg.startDate.toISOString() }); } catch (e) { return null; } }
function deserialize(str) {
  try {
    const o = JSON.parse(str);
    o.startDate = o.startDate ? new Date(o.startDate) : startOfThisMonth();
    o.startDate = startOfThisMonth();
    return o;
  } catch (e) { return null; }
}

function TimeMachine() {
  // ── Language state — shared across all pages via localStorage ──
  const [lang, setLangState] = useST(() => {
    try { return localStorage.getItem('amar_lang') || 'id'; } catch(e) { return 'id'; }
  });
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem('amar_lang', l); } catch(e) {}
    document.documentElement.lang = l;
  };
  useET(() => { document.documentElement.lang = lang; }, []);

  const [cfg, setCfg] = useST(() => {
    const saved = localStorage.getItem(LS_CFG);
    const d = saved && deserialize(saved);
    return d || DEFAULT_CFG;
  });
  const [phase, setPhase] = useST('wizard');
  const [warpKey, setWarpKey] = useST(0);
  const [editing, setEditing] = useST(false);
  const [toast, setToast] = useST(null);
  const [confetti, setConfetti] = useST(0);
  const toastTimer = useRT(null);
  const reduced = useMT(() => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);

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
    const tl = window.TM_STRINGS[lang] || window.TM_STRINGS.id;
    setTimeout(() => notify(tl.toast_arrive(endDate.getFullYear()), 'party-popper', 'celebrate'), 250);
  }, [endDate, lang]);

  // Current translations for TimeMachine-level labels (launchLabel props)
  const tl = window.TM_STRINGS[lang] || window.TM_STRINGS.id;

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="tm">
        {phase === 'wizard' && (
          <Wizard cfg={cfg} setCfg={setCfg} onLaunch={launch} launchLabel={tl.launch} />
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

        {editing && phase === 'dash' && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 350, overflow: 'auto' }}>
            <Wizard cfg={cfg} setCfg={setCfg} initialStep={1} launchLabel={tl.re_launch}
              onLaunch={launch} onExit={() => setEditing(false)} />
          </div>
        )}

        <div className={'tm-toast' + (toast ? ' show' : '')}>
          {toast && <>
            <span className="ti" style={{ background: toast.tone === 'warn' ? 'var(--warning)' : 'var(--grad-mark)' }}>
              <Icon name={toast.icon} size={15} color="#fff" />
            </span>{toast.msg}</>}
        </div>
        <Confetti seed={confetti} />
      </div>
    </LangContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('tm-root')).render(<TimeMachine />);
