/* ============================================================
   Amar Bank — TIME MACHINE wealth engine (pure JS, no React)
   ------------------------------------------------------------
   Month-stepped projection across the five Amar Bank Digital
   products, supporting:
     • multiple Celengan buckets, each with a purpose + goal
     • Deposito placed monthly OR on wealth milestones
     • a date horizon (months between now and a target date)
   Exposes window.TM.
   ============================================================ */
(function () {
  // ---- annual rates ----
  const RATES = {
    active: 0.005,
    celengan: 0.055,
    celenganCapped: 0.035,
    brankas: 0.035,
  };
  const DEPO_RATES = { 1: 0.0575, 3: 0.060, 6: 0.0625, 12: 0.070, 18: 0.075, 24: 0.080, 36: 0.090 };
  const DEPO_CAPPED = 0.035;
  const DEPO_TENORS = [1, 3, 6, 12, 18, 24, 36];
  const DI_TENORS = [6, 12, 18, 24, 36];

  const CAP_2B = 2_000_000_000;
  const TAX_FLOOR = 7_500_000;
  const TAX_RATE = 0.20;
  const DEPO_MIN = 100_000;

  function depoInstanRate(tenor, amount) {
    const base = { 6: 0.02, 12: 0.04, 18: 0.055, 24: 0.07, 36: 0.10 };
    let r = base[tenor] != null ? base[tenor] : 0.02;
    let bonus = 0;
    if (amount >= 100_000_000) bonus = 0.015;
    else if (amount >= 50_000_000) bonus = 0.010;
    else if (amount >= 10_000_000) bonus = 0.005;
    return r + bonus;
  }

  const fmt = (n) => 'Rp\u00A0' + Math.round(n).toLocaleString('id-ID');
  const fmtShort = (n) => {
    const a = Math.abs(n);
    if (a >= 1e12) return (n / 1e12).toLocaleString('id-ID', { maximumFractionDigits: 2 }) + ' T';
    if (a >= 1e9) return (n / 1e9).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + ' M';
    if (a >= 1e6) return (n / 1e6).toLocaleString('id-ID', { maximumFractionDigits: 1 }) + ' jt';
    if (a >= 1e3) return Math.round(n / 1e3) + ' rb';
    return Math.round(n).toString();
  };

  const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  function dateForMonth(startDate, m) {
    const d = new Date(startDate.getFullYear(), startDate.getMonth() + m, 1);
    return d;
  }
  function labelForMonth(startDate, m) {
    const d = dateForMonth(startDate, m);
    return MONTH_NAMES[d.getMonth()] + ' ' + d.getFullYear();
  }

  // ---- core projection ----
  // cfg = {
  //   monthly, initial, startDate, months,
  //   celengans: [{ id, purpose, goal, frac }],
  //   brankasFrac,
  //   deposito: { mode:'monthly'|'milestone', frac, tenor, milestones:[{threshold,tenor,amount}] },
  //   depoInstan: { frac, tenor },
  // }
  function project(cfg) {
    const months = Math.max(1, Math.round(cfg.months));
    const monthly = Math.max(0, cfg.monthly || 0);
    const startDate = cfg.startDate || new Date();
    const dep = cfg.deposito || { mode: 'monthly', frac: 0, tenor: 12, milestones: [] };

    // running balances
    let active = 0, brankas = 0, depoHold = 0; // depoHold accumulates for milestone mode
    let depoInstan = 0;
    const celBuckets = (cfg.celengans || []).map(c => ({
      id: c.id, purpose: c.purpose, goal: +c.goal || 0, frac: +c.frac || 0,
      balance: 0, done: false,
    }));
    const depositoBook = []; // { principal, rate, tenor, start }

    let cumInterest = 0, cumTax = 0, cumDeposited = 0, cumCashback = 0;
    const series = [];
    const events = [];
    const milestonesHit = {};
    const wealthHit = {};
    let taxOn = false, capOn = false;

    const depositoTotal = () => depositoBook.reduce((s, d) => s + d.principal, 0);
    const celTotal = () => celBuckets.reduce((s, c) => s + c.balance, 0);
    // threshold balance per cap rule: Active + Celengan + Deposito
    const thresholdBal = () => active + celTotal() + depositoTotal();
    const grandTotal = () => active + celTotal() + brankas + depoHold + depoInstan + depositoTotal();

    const ev = (m, type, title, desc, icon, tone) => events.push({ month: m, type, title, desc, icon, tone });

    function placeDeposito(amount, tenor, m) {
      if (amount < DEPO_MIN) return 0;
      const rate = thresholdBal() > CAP_2B ? DEPO_CAPPED : (DEPO_RATES[tenor] || DEPO_RATES[12]);
      depositoBook.push({ principal: amount, rate, tenor, start: m });
      return amount;
    }

    function contribute(amount, m) {
      if (amount <= 0) return;
      cumDeposited += amount;
      active += amount;
      // celengan buckets
      celBuckets.forEach(c => {
        if (c.frac <= 0) return;
        let give = amount * c.frac;
        if (c.done) { return; } // already reached goal → stays in Active
        if (c.goal > 0 && c.balance + give >= c.goal) {
          give = Math.max(0, c.goal - c.balance);
        }
        active -= give; c.balance += give;
        if (c.goal > 0 && !c.done && c.balance >= c.goal - 1) {
          c.done = true;
          ev(m, 'goal', 'Celengan "' + (c.purpose || 'Tanpa nama') + '" tercapai!',
            'Target ' + fmt(c.goal) + ' untuk tujuan ini sudah penuh. Setoran berikutnya mengalir ke Saldo Aktif.',
            'party-popper', 'celebrate');
        }
      });
      // brankas
      const toBrk = amount * (cfg.brankasFrac || 0);
      if (toBrk > 0) { active -= toBrk; brankas += toBrk; }
      // deposito
      const toDepo = amount * (dep.frac || 0);
      if (toDepo > 0) {
        if (dep.mode === 'monthly') {
          const placed = placeDeposito(toDepo, dep.tenor, m);
          active -= placed; // remainder under min stays in active
        } else {
          active -= toDepo; depoHold += toDepo; // hold for milestone placement
        }
      }
      // depo instan — upfront cashback
      const toDI = amount * ((cfg.depoInstan && cfg.depoInstan.frac) || 0);
      if (toDI > 0) {
        const tnr = (cfg.depoInstan && cfg.depoInstan.tenor) || 12;
        const cb = toDI * depoInstanRate(tnr, toDI);
        active -= toDI; depoInstan += toDI;
        active += cb; cumCashback += cb; cumInterest += cb;
      }
    }

    function checkMilestonePlacements(m) {
      if (dep.mode !== 'milestone') return;
      (dep.milestones || []).forEach((ms, idx) => {
        const key = 'ms' + idx;
        if (milestonesHit[key]) return;
        if (grandTotal() >= ms.threshold) {
          milestonesHit[key] = true;
          // place from depoHold first, then Active
          let want = ms.amount || depoHold;
          let fromHold = Math.min(want, depoHold);
          let fromActive = Math.min(want - fromHold, active);
          const total = fromHold + fromActive;
          if (total >= DEPO_MIN) {
            depoHold -= fromHold; active -= fromActive;
            placeDeposito(total, ms.tenor, m);
            ev(m, 'placement', 'Deposito ' + ms.tenor + ' bulan dibuat',
              'Saldo menembus ' + fmt(ms.threshold) + ' — ' + fmt(total) + ' dikunci jadi Deposito tenor ' + ms.tenor + ' bulan (bunga ' + ((DEPO_RATES[ms.tenor] || 0) * 100).toLocaleString('id-ID', { maximumFractionDigits: 2 }) + '% p.a.).',
              'lock', 'celebrate');
          }
        }
      });
    }

    function checkWealth(m) {
      const t = grandTotal();
      const tiers = [
        { k: 'w50', v: 50_000_000, t: 'Saldo tembus Rp 50 juta', i: 'gem' },
        { k: 'w100', v: 100_000_000, t: 'Saldo tembus Rp 100 juta', i: 'gem' },
        { k: 'w500', v: 500_000_000, t: 'Saldo tembus Rp 500 juta', i: 'trophy' },
        { k: 'w1b', v: 1_000_000_000, t: 'Selamat, kamu miliarder! 💎', i: 'crown' },
        { k: 'w5b', v: 5_000_000_000, t: 'Saldo menembus Rp 5 miliar', i: 'crown' },
      ];
      tiers.forEach(tr => {
        if (t >= tr.v && !wealthHit[tr.k]) {
          wealthHit[tr.k] = true;
          ev(m, 'wealth', tr.t, 'Sebuah tonggak kekayaan baru di ' + labelForMonth(startDate, m) + '.', tr.i, 'celebrate');
        }
      });
    }

    function maturityRollovers(m) {
      // roll matured deposito lots into a fresh lot of same tenor at current rate
      for (let i = 0; i < depositoBook.length; i++) {
        const d = depositoBook[i];
        if (m > d.start && (m - d.start) % d.tenor === 0) {
          d.rate = thresholdBal() > CAP_2B ? DEPO_CAPPED : (DEPO_RATES[d.tenor] || d.rate);
          d.start = m; // re-anchor
        }
      }
    }

    function snapshot(m) {
      series.push({
        month: m,
        date: dateForMonth(startDate, m),
        active, brankas, depoHold, depoInstan,
        deposito: depositoTotal(),
        celengan: celTotal(),
        celBuckets: celBuckets.map(c => ({ id: c.id, purpose: c.purpose, goal: c.goal, balance: c.balance, done: c.done })),
        depoLots: depositoBook.length,
        total: grandTotal(),
        cumInterest, cumTax, cumDeposited, cumCashback,
        taxOn, capOn,
      });
    }

    // ---- month 0 ----
    if (cfg.initial > 0) contribute(cfg.initial, 0);
    checkMilestonePlacements(0);
    checkWealth(0);
    snapshot(0);

    for (let m = 1; m <= months; m++) {
      // 1) contribution
      contribute(monthly, m);
      // 2) milestone placements (after new money lands)
      checkMilestonePlacements(m);
      // 3) cap check before accrual
      if (thresholdBal() > CAP_2B && !capOn) {
        capOn = true;
        ev(m, 'cap', 'Bunga menyesuaikan di atas Rp 2 M',
          'Saldo (Aktif + Celengan + Deposito) melampaui Rp 2 miliar — bunga Celengan & penempatan Deposito baru kini 3,5% p.a.',
          'badge-alert', 'warn');
      }
      // 4) accrue gross interest
      const celRate = capOn ? RATES.celenganCapped : RATES.celengan;
      let gross = 0;
      gross += active * (RATES.active / 12);
      gross += depoHold * (RATES.active / 12);
      celBuckets.forEach(c => { gross += c.balance * (celRate / 12); });
      gross += brankas * (RATES.brankas / 12);
      gross += depositoBook.reduce((s, d) => s + d.principal * (d.rate / 12), 0);
      // 5) tax
      if (grandTotal() >= TAX_FLOOR && !taxOn) {
        taxOn = true;
        ev(m, 'tax', 'Pajak bunga mulai berlaku',
          'Total saldo mencapai Rp 7,5 juta — pajak 20% atas bunga kini dipotong otomatis tiap bulan.',
          'receipt-text', 'warn');
      }
      const taxNow = grandTotal() >= TAX_FLOOR ? gross * TAX_RATE : 0;
      const net = gross - taxNow;
      const f = gross > 0 ? net / gross : 0;
      // 6) credit net interest back to buckets
      active += active * (RATES.active / 12) * f;
      depoHold += depoHold * (RATES.active / 12) * f;
      celBuckets.forEach(c => { c.balance += c.balance * (celRate / 12) * f; });
      brankas += brankas * (RATES.brankas / 12) * f;
      active += depositoBook.reduce((s, d) => s + d.principal * (d.rate / 12), 0) * f; // deposito interest liquid → active
      cumInterest += net; cumTax += taxNow;
      // 7) maturity rollovers
      maturityRollovers(m);
      // 8) milestones + snapshot
      checkWealth(m);
      snapshot(m);
    }

    const last = series[series.length - 1];
    const summary = {
      finalTotal: last.total,
      totalDeposited: last.cumDeposited,
      totalInterest: last.cumInterest,
      totalTax: last.cumTax,
      totalCashback: last.cumCashback,
      growthPct: last.cumDeposited > 0 ? (last.cumInterest / last.cumDeposited) * 100 : 0,
      byProduct: {
        active: last.active, celengan: last.celengan, brankas: last.brankas,
        deposito: last.deposito + last.depoHold, depoInstan: last.depoInstan,
      },
      celBuckets: last.celBuckets,
      startDate, endDate: last.date, months,
    };
    return { series, events, summary, months, startDate };
  }

  window.TM = {
    project, RATES, DEPO_RATES, DEPO_TENORS, DI_TENORS, depoInstanRate,
    fmt, fmtShort, labelForMonth, dateForMonth, MONTH_NAMES,
    CAP_2B, TAX_FLOOR, DEPO_MIN,
  };
})();
