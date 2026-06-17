// Time Machine — i18n strings + TMLangToggle
// Must load after src/i18n.jsx (needs LangContext + useLang on window)

window.TM_STRINGS = {
  id: {
    // Wizard steps
    steps: ['Setoran', 'Alokasi', 'Waktu'],
    // AllocInput
    alloc_mo: '/bln',
    // Step 1
    s1_eyebrow: 'Langkah 1 · Setoran',
    s1_h1a: 'Berapa yang akan kamu ', s1_h1b: 'sisihkan tiap bulan?',
    s1_sub: 'Ini mesin waktu kekayaanmu. Mulai dengan setoran rutin bulanan — sekecil apa pun, biarkan bunga majemuk dan kelima produk Amar Bank bekerja melontarkannya ke masa depan.',
    per_month: '/ bulan',
    initial_q: 'Punya dana awal untuk memulai?',
    optional: 'opsional',
    // Step 2
    s2_eyebrow: 'Langkah 2 · Alokasi',
    s2_h1: (amt) => `Sebar ${amt}/bulan`,
    rp_mode: 'Rupiah', pct_mode: 'Persen',
    over100: 'Melebihi 100%',
    allocated: (pct, rem) => `${pct}% teralokasi · sisa ${rem}% ke Aktif`,
    // Celengan
    cel_h: 'Celengan', cel_rate: '5,5% p.a.',
    cel_desc: 'Tabungan bertujuan, bunga cair harian. Buat beberapa celengan dengan target masing-masing.',
    cel_placeholders: ['Dana Darurat','Liburan ke Jepang','DP Rumah','Mobil Baru','Dana Pendidikan','Modal Nikah','Gadget Impian','Naik Haji'],
    cel_purpose_ph: (p) => `Tujuan, mis. ${p}`,
    cel_delete: 'Hapus celengan',
    cel_setor: 'Setor', cel_target: 'Target',
    cel_months: (n) => `±${n} bln tercapai`,
    cel_no_target: 'tanpa target',
    cel_add: 'Tambah celengan',
    // Deposito
    depo_h: 'Deposito', depo_rate: 'hingga 9% p.a.',
    depo_desc: 'Bunga tertinggi, cair tiap bulan. Tempatkan rutin atau saat saldomu menembus tonggak tertentu.',
    depo_monthly:   ['Tiap bulan',       'Porsi di atas dikunci jadi deposito baru setiap bulan.'],
    depo_milestone: ['Saat capai tonggak','Dana menumpuk dulu, lalu dikunci saat saldo capai target.'],
    tenor_label: 'Tenor:',
    tenor_unit: (tn, r) => `${tn} bln · ${r}%`,
    ms_when: 'Saat saldo capai', ms_lock: 'kunci', ms_tenor: 'tenor',
    ms_unit: (tn) => `${tn} bln`,
    ms_add: 'Tambah tonggak',
    // Depo Instan
    di_h: 'Depo Instan', di_rate: 'cashback di muka',
    di_desc: 'Bunga dibayar di muka langsung ke Saldo Aktif begitu dana ditempatkan.',
    di_cashback: (r) => `cashback ${r}%`,
    // Brankas
    bk_h: 'Brankas', bk_rate: '3,5% p.a.',
    bk_desc: 'Simpanan ekstra-aman untuk dana jarang disentuh. Penarikan butuh verifikasi berlapis.',
    // Saldo Aktif
    sa_h: 'Saldo Aktif', sa_rate: '0,5% p.a.',
    sa_desc: 'Sisa yang tak dialokasikan tinggal di sini — likuid penuh untuk transaksi harian.',
    // Step 3
    s3_eyebrow: 'Langkah 3 · Tujuan waktu',
    s3_h1a: 'Kapan kamu ingin ', s3_h1b: 'melihat kekayaanmu?',
    s3_sub: 'Setel tujuan mesin waktu. Lompat beberapa tahun ke depan, atau bidik tanggal spesifik yang berarti buatmu.',
    time_rel:  ['Maju sekian tahun',  'Lompat 1, 3, 5, hingga 30 tahun dari sekarang.'],
    time_date: ['Tanggal tertentu',   'Bidik tanggal spesifik — ulang tahun, pensiun, wisuda.'],
    or_slide: 'Atau geser bebas',
    years_months: (y, m) => `${y} tahun (${m} bulan)`,
    yr: 'tahun',
    arrive_note: (lbl, m) => `Mesin waktu akan membawamu ke <b>${lbl}</b> — ${m} bulan dari sekarang.`,
    // Wizard nav
    back: 'Kembali', next: 'Lanjut',
    launch: 'Nyalakan Mesin Waktu',
    re_launch: 'Lompat lagi ke masa depan',
    exit: 'Keluar', cancel: 'Batal', home: 'Beranda',
    // Dashboard nav
    arrived: (lbl) => `Tiba di ${lbl}`,
    dash_home: 'Beranda', download_app: 'Download Amar Bank',
    months_from_now: 'bulan dari sekarang',
    dash_h1: 'Total kekayaanmu kalau konsisten mulai hari ini',
    deposited_lbl: 'Modal disetor', interest_lbl: 'Bunga & cashback', tax_lbl: 'Pajak',
    // Chart
    chart_h: 'Perjalanan kekayaanmu',
    lg_total: 'Total saldo', lg_change: 'Perubahan aturan', lg_milestone: 'Tonggak',
    pause: 'Jeda', play: 'Putar', replay: 'Ulangi',
    now: 'kini',
    // Stats
    stat_final: 'Saldo akhir', stat_interest: 'Bunga + cashback',
    stat_from_modal: (p) => `${p}% dari modal`,
    stat_capital: 'Modal disetor', stat_from_pocket: 'dari kantongmu',
    stat_tax: 'Total pajak',
    stat_tax_note: (hasTax) => hasTax ? 'pajak 20% bunga' : 'belum kena pajak',
    // Where money
    where_h: 'Di mana uangmu berada',
    // Goals
    goals_h: 'Tujuan Celengan', unnamed: 'Tanpa nama', goal_reached: 'Target tercapai!',
    // Feed
    feed_h: 'Catatan perjalanan',
    feed_empty: 'Tekan play untuk memutar ulang perjalanan dan melihat tonggak, perubahan bunga, dan pajak muncul di sini.',
    // Edit panel
    edit_h: 'Setel ulang mesin', edit_sub: 'Ubah, lalu lompat lagi',
    monthly_dep: 'Setoran bulanan', time_goal: 'Tujuan waktu', yr_unit: 'tahun',
    rerun: 'Jalankan ulang mesin waktu',
    edit_alloc: 'Ubah alokasi & celengan',
    edit_hint: 'Geser setoran atau ganti tujuan waktu — grafik di sebelah ikut berubah seketika. Tekan tombol di atas untuk perjalanan waktu yang baru.',
    // CTA
    cta_h: 'Masa depan ini bisa kamu mulai hari ini.',
    cta_p: 'Buka rekening Amar Bank Digital dalam hitungan menit dan kelola Celengan, Deposito, Brankas, hingga Depo Instan langsung dari ponsel — diawasi OJK, dijamin LPS.',
    // Footer
    footer: '© 2026 PT Bank Amar Indonesia Tbk — simulasi ilustratif berbasis asumsi bunga saat ini, bukan jaminan imbal hasil.',
    seal_ojk: 'Diawasi OJK', seal_lps: 'Dijamin LPS',
    // Toasts
    toast_arrive: (yr) => `Selamat datang di ${yr}! 🚀`,
    toast_app: 'Mengarahkan ke halaman unduh aplikasi…',
    // Products (for display)
    products: {
      active:    { name: 'Saldo Aktif',  rate: '0,5% p.a.' },
      celengan:  { name: 'Celengan',     rate: '5,5% p.a.' },
      brankas:   { name: 'Brankas',      rate: '3,5% p.a.' },
      deposito:  { name: 'Deposito',     rate: 'hingga 9%' },
      depoInstan:{ name: 'Depo Instan',  rate: 'cashback'  },
    },
    // Warp sequence
    warp_status: [
      { at: 0.00, t: 'Mengisi kapasitor waktu',    s: 'Menghitung bunga majemuk…'         },
      { at: 0.26, t: 'Melontar ke masa depan',      s: 'Celengan & Deposito bekerja…'      },
      { at: 0.55, t: 'Melewati tonggak kekayaan',   s: 'Bunga menggulung bunga…'           },
      { at: 0.82, t: 'Menstabilkan lini masa',      s: 'Hampir tiba…'                      },
    ],
  },

  en: {
    steps: ['Deposit', 'Allocation', 'Time'],
    alloc_mo: '/mo',
    s1_eyebrow: 'Step 1 · Deposit',
    s1_h1a: 'How much will you ', s1_h1b: 'set aside each month?',
    s1_sub: "This is your wealth time machine. Start with a regular monthly deposit — no matter how small, let compound interest and Amar Bank's five products launch it into the future.",
    per_month: '/ month',
    initial_q: 'Have initial funds to start with?',
    optional: 'optional',
    s2_eyebrow: 'Step 2 · Allocation',
    s2_h1: (amt) => `Spread ${amt}/month`,
    rp_mode: 'Rupiah', pct_mode: 'Percent',
    over100: 'Over 100%',
    allocated: (pct, rem) => `${pct}% allocated · ${rem}% remaining to Active`,
    cel_h: 'Savings Goals', cel_rate: '5.5% p.a.',
    cel_desc: 'Goal-based savings, interest disbursed daily. Create multiple goals with individual targets.',
    cel_placeholders: ['Emergency Fund','Japan Trip','House Down Payment','New Car','Education Fund','Wedding Fund','Dream Gadget','Hajj Fund'],
    cel_purpose_ph: (p) => `Goal, e.g. ${p}`,
    cel_delete: 'Delete savings goal',
    cel_setor: 'Deposit', cel_target: 'Goal',
    cel_months: (n) => `±${n} mo to reach`,
    cel_no_target: 'no target',
    cel_add: 'Add savings goal',
    depo_h: 'Deposits', depo_rate: 'up to 9% p.a.',
    depo_desc: 'Highest interest, disbursed monthly. Place regularly or when balance hits milestones.',
    depo_monthly:   ['Monthly',       'The allocation above is locked into a new deposit every month.'],
    depo_milestone: ['At milestone',  'Funds accumulate first, then locked when balance hits the target.'],
    tenor_label: 'Tenor:',
    tenor_unit: (tn, r) => `${tn} mo · ${r}%`,
    ms_when: 'When balance reaches', ms_lock: 'lock', ms_tenor: 'tenor',
    ms_unit: (tn) => `${tn} mo`,
    ms_add: 'Add milestone',
    di_h: 'Instant Deposit', di_rate: 'upfront cashback',
    di_desc: 'Interest paid upfront directly to Active Balance as soon as funds are placed.',
    di_cashback: (r) => `${r}% cashback`,
    bk_h: 'Vault', bk_rate: '3.5% p.a.',
    bk_desc: 'Extra-safe savings for funds you rarely touch. Withdrawal requires multi-layer verification.',
    sa_h: 'Active Balance', sa_rate: '0.5% p.a.',
    sa_desc: 'Unallocated remainder stays here — fully liquid for daily transactions.',
    s3_eyebrow: 'Step 3 · Time goal',
    s3_h1a: 'When do you want to ', s3_h1b: 'see your wealth?',
    s3_sub: "Set your time machine destination. Jump a few years ahead, or aim for a specific date that means something to you.",
    time_rel:  ['Jump ahead X years',  'Jump 1, 3, 5, up to 30 years from now.'],
    time_date: ['Specific date',        'Aim for a specific date — birthday, retirement, graduation.'],
    or_slide: 'Or slide freely',
    years_months: (y, m) => `${y} year${y !== 1 ? 's' : ''} (${m} months)`,
    yr: 'years',
    arrive_note: (lbl, m) => `The time machine will take you to <b>${lbl}</b> — ${m} months from now.`,
    back: 'Back', next: 'Next',
    launch: 'Start Time Machine',
    re_launch: 'Jump to the future again',
    exit: 'Exit', cancel: 'Cancel', home: 'Home',
    arrived: (lbl) => `Arrived at ${lbl}`,
    dash_home: 'Home', download_app: 'Download Amar Bank',
    months_from_now: 'months from now',
    dash_h1: 'Your total wealth if you stay consistent starting today',
    deposited_lbl: 'Total deposited', interest_lbl: 'Interest & cashback', tax_lbl: 'Tax',
    chart_h: 'Your wealth journey',
    lg_total: 'Total balance', lg_change: 'Rule change', lg_milestone: 'Milestone',
    pause: 'Pause', play: 'Play', replay: 'Replay',
    now: 'now',
    stat_final: 'Final balance', stat_interest: 'Interest + cashback',
    stat_from_modal: (p) => `${p}% of capital`,
    stat_capital: 'Total deposited', stat_from_pocket: 'from your pocket',
    stat_tax: 'Total tax',
    stat_tax_note: (hasTax) => hasTax ? '20% interest tax' : 'not yet taxed',
    where_h: 'Where your money is',
    goals_h: 'Savings Goals', unnamed: 'Unnamed', goal_reached: 'Goal reached!',
    feed_h: 'Journey log',
    feed_empty: 'Press play to replay your journey and watch milestones, interest changes, and tax appear here.',
    edit_h: 'Reset the machine', edit_sub: 'Adjust, then jump again',
    monthly_dep: 'Monthly deposit', time_goal: 'Time goal', yr_unit: 'years',
    rerun: 'Re-run time machine',
    edit_alloc: 'Change allocation & goals',
    edit_hint: 'Slide the deposit or change the time goal — the chart updates instantly. Press the button above for a new time journey.',
    cta_h: 'This future can start today.',
    cta_p: 'Open an Amar Bank Digital account in minutes and manage Savings, Deposits, Vault, and Instant Deposits directly from your phone — supervised by OJK, guaranteed by LPS.',
    footer: '© 2026 PT Bank Amar Indonesia Tbk — illustrative simulation based on current interest rate assumptions, not a guarantee of returns.',
    seal_ojk: 'OJK-supervised', seal_lps: 'LPS-guaranteed',
    toast_arrive: (yr) => `Welcome to ${yr}! 🚀`,
    toast_app: 'Redirecting to app download page…',
    products: {
      active:    { name: 'Active Balance',   rate: '0.5% p.a.' },
      celengan:  { name: 'Savings',          rate: '5.5% p.a.' },
      brankas:   { name: 'Vault',            rate: '3.5% p.a.' },
      deposito:  { name: 'Deposits',         rate: 'up to 9%'  },
      depoInstan:{ name: 'Instant Deposit',  rate: 'cashback'  },
    },
    warp_status: [
      { at: 0.00, t: 'Charging time capacitors',   s: 'Calculating compound interest…'  },
      { at: 0.26, t: 'Launching into the future',   s: 'Savings & Deposits at work…'     },
      { at: 0.55, t: 'Passing wealth milestones',   s: 'Interest compounding on interest…'},
      { at: 0.82, t: 'Stabilizing the timeline',    s: 'Almost there…'                   },
    ],
  },
};

// Hook — call inside any component that is a descendant of LangContext.Provider
window.useTMLang = () => {
  const { lang } = useLang();
  return window.TM_STRINGS[lang] || window.TM_STRINGS.id;
};

// Compact lang toggle for the dark TM UI
function TMLangToggle() {
  const { lang, setLang } = useLang();
  const base = {
    appearance:'none', border:'none', cursor:'pointer', fontFamily:'inherit',
    fontSize:11, fontWeight:700, letterSpacing:'.04em', padding:'5px 13px',
    borderRadius:999, transition:'background .15s, color .15s',
  };
  const on  = { background:'rgba(255,255,255,.9)', color:'#1253A5' };
  const off = { background:'transparent', color:'rgba(255,255,255,.6)' };
  return (
    <div style={{ display:'flex', gap:2, background:'rgba(255,255,255,.1)', borderRadius:999, padding:3, flexShrink:0 }}>
      <button style={{ ...base, ...(lang==='id' ? on : off) }} onClick={() => setLang('id')} aria-pressed={lang==='id'}>ID</button>
      <button style={{ ...base, ...(lang==='en' ? on : off) }} onClick={() => setLang('en')} aria-pressed={lang==='en'}>EN</button>
    </div>
  );
}

window.TMLangToggle = TMLangToggle;
