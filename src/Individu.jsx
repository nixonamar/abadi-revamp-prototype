// INDIVIDU segment — Tunaiku calculator, app download + dynamic QR, wealth hook
const INDIV_SUBS = [
{ key: 'tunaiku', label: 'Pinyaman Tunaiku', color: '#1FA82C' },
{ key: 'app', label: 'Banking Digital', color: 'var(--amar-teal-deep)' },
{ key: 'wealth', label: 'Relationship Banking', color: 'var(--deposito-from)' }];


function TunaikuCalc({ onTrack, onToast, banner }) {
  const [amount, setAmount] = useState(8000000);
  const [tenor, setTenor] = useState(12);
  const touched = useRef(false);
  // flat-ish monthly rate model for illustration (~3% / mo)
  const monthly = useMemo(() => {
    const rate = 0.03;
    return Math.round(amount * (1 + rate * tenor) / tenor);
  }, [amount, tenor]);
  const onAdj = (setter) => (e) => {touched.current = true;setter(+e.target.value);onTrack && onTrack('tunaiku_calculator_adjust');};
  // green fill to match tunaiku.com sliders
  const amtPct = (amount - 2000000) / (30000000 - 2000000) * 100;
  const tenPct = (tenor - 6) / (30 - 6) * 100;
  const fill = (p) => ({ background: `linear-gradient(90deg,#1FA82C ${p}%, #E6E8EC ${p}%)` });
  const apply = () => {
    const url = `https://www.tunaiku.com/apply?amount=${amount}&tenor=${tenor}&utm_source=amarbank_home`;
    onToast(`Membuka Tunaiku · ${rpShort(amount)} / ${tenor} bln`, 'arrow-up-right');
  };
  return (
    <div className="module t-indiv t-tunaiku">
      {banner && <CampaignBanner {...banner} onToast={onToast} inCard />}
      <div className="pad">
        <span className="tag"><Icon name="shield-check" size={14} /> Pinyaman · Nyaman &amp; Aman</span>
        <h3><span className="pinyaman-mark">Pi<em>nyaman</em></span> Tunaiku — pinjam lebih nyaman, cair tanpa drama.</h3>
        <p className="lede">Satu kata merangkum segalanya: <b>nyaman</b>. Pinjaman hingga Rp 30 juta, tenor sampai 30 bulan — proses 100% online, cukup KTP, dana langsung cair ke rekeningmu.</p>
        <div className="feat">
          <div className="row"><span className="ic"><Icon name="smile" size={16} /></span><div><b>Pinyaman = Pinjam + Nyaman.</b> <span>Pengajuan semudah mungkin, tanpa stres, tanpa antre.</span></div></div>
          <div className="row"><span className="ic"><Icon name="zap" size={16} /></span><div><b>Cair langsung.</b> <span>Disetujui? Dana masuk rekening saat itu juga.</span></div></div>
          <div className="row"><span className="ic"><Icon name="lock-keyhole" size={16} /></span><div><b>Aman &amp; berizin OJK.</b> <span>Tunaiku beroperasi di bawah pengawasan regulator.</span></div></div>
        </div>
      </div>
      <div className="calc">
        <div className="top">
          <div className="h">Simulasi pinjamanmu</div>
          <div className="badge"><Icon name="sparkles" size={12} /> Estimasi</div>
        </div>
        <div className="amount"><span className="rp">Rp</span>{amount.toLocaleString('id-ID')}</div>
        <div className="sub">Jumlah pinjaman yang kamu pilih</div>

        <div className="field">
          <div className="lab"><span>Jumlah Pinjaman</span><span className="v">{rpShort(amount)}</span></div>
          <input className="rng" type="range" min="2000000" max="30000000" step="500000" value={amount} onChange={onAdj(setAmount)} style={fill(amtPct)} />
        </div>
        <div className="field">
          <div className="lab"><span>Tenor (Durasi)</span><span className="v">{tenor} bulan</span></div>
          <input className="rng" type="range" min="6" max="30" step="1" value={tenor} onChange={onAdj(setTenor)} style={fill(tenPct)} />
        </div>
        <div className="est">
          <span className="k">Estimasi angsuran / bulan</span>
          <span className="val">{rp(monthly)} <small>/bln</small></span>
        </div>
        <button className="btn btn-amber btn-block" onClick={apply}>Ajukan Pinyaman Sekarang <Icon name="arrow-up-right" size={17} color="#fff" /></button>
        <a className="btn btn-tunaiku-ghost btn-block" href="https://tunaiku.com/" target="_blank" rel="noopener noreferrer">
          Pelajari lebih lanjut di Tunaiku.com <Icon name="external-link" size={15} />
        </a>
        <div className="note">Estimasi ilustratif. Bunga &amp; persetujuan final mengikuti penilaian Tunaiku.</div>
      </div>
    </div>);

}

function AppDownload({ onToast, banner }) {
  return (
    <div className="module t-indiv t-app">
      {banner && <CampaignBanner {...banner} onToast={onToast} inCard />}
      <div className="appdl">
        <div className="pad">
          <span className="tag"><Icon name="smartphone" size={14} /> Aplikasi Amar Bank</span>
          <h3>Tabunganmu, lebih pintar dari sebelumnya.</h3>
          <p className="lede">Buka rekening dalam menit dan kelola semuanya dari satu aplikasi — gratis biaya admin bulanan.</p>
          <div className="feat">
            <div className="row"><span className="ic"><Icon name="zap" size={16} /></span><div><b>Onboarding cepat &amp; mudah.</b> <span>Buka rekening selesai dalam 3 menit — tanpa antre, tanpa ribet.</span></div></div>
            <div className="row"><span className="ic"><Icon name="lock-keyhole" size={16} /></span><div><b>Brankas — tabungan makin aman.</b> <span>Verifikasi video-call sebelum tarik dana. Tenang, uangmu terjaga.</span></div></div>
            <div className="row"><span className="ic"><Icon name="sparkles" size={16} /></span><div><b>Nabung cerdas, perencanaan pintar.</b> <span>Semua dalam satu aplikasi — dibantu AI supaya tujuanmu tercapai.</span></div></div>
            <div className="row"><span className="ic"><Icon name="percent" size={16} /></span><div><b>Deposito bunga hingga 9% p.a.</b> <span>Langsung dari app, minimal Rp100 ribu, tenor 1–36 bulan.</span></div></div>
          </div>
          <a className="btn btn-teal btn-lg" href="digital.html" style={{marginTop:'8px',textDecoration:'none'}}>
            <Icon name="play-circle" size={17} color="#fff" /> Coba Simulasi Aplikasi
          </a>
        </div>
        <div className="qr">
          <div className="qrbox"><QR payload="amarbank-app-dl" color="#093C69" /></div>
          <div className="ql">Scan untuk download</div>
          <div className="qs">Arahkan kamera ponselmu untuk memasang aplikasi Amar Bank.</div>
          <div className="qr-mobilehint">Pilih toko aplikasimu di bawah ini.</div>
          <StoreButtons onClick={() => onToast('Mengarahkan ke toko aplikasi…', 'smartphone')} />
        </div>
      </div>
    </div>);

}

function WealthHook({ onOpenModal }) {
  return (
    <div className="module t-wealth">
      <div className="pad">
        <span className="tag"><Icon name="user-round-cog" size={14} /> Relationship Banking · Layanan Personal</span>
        <h3>Produk simpanan Amar Bank dengan layanan <span className="hi-yield">Relationship Manager</span> pribadi.</h3>
        <p className="lede">Dari tabungan harian hingga deposito berjangka — setiap produk dirancang untuk kebutuhan berbeda dan didampingi oleh Relationship Manager yang memahami tujuan finansialmu.</p>
        <div className="feat">
          <div className="row"><span className="ic"><Icon name="shield-check" size={16} /></span><div><b>Aman &amp; terjamin LPS.</b> <span>Seluruh simpanan terdaftar OJK dan dijamin LPS hingga Rp2 miliar per nasabah.</span></div></div>
          <div className="row"><span className="ic"><Icon name="phone" size={16} /></span><div><b>Layanan personal via RM.</b> <span>Konsultasi langsung untuk pilih produk dan suku bunga terbaik sesuai kebutuhanmu.</span></div></div>
        </div>
        <button className="btn btn-blue btn-lg" style={{ background: 'var(--deposito-from)', boxShadow: '0 8px 22px rgba(4,131,63,.3)' }} onClick={onOpenModal}>
          <Icon name="phone" size={16} color="#fff" /> Hubungi Relationship Manager
        </button>
      </div>
      <div className="rb-products">
        <div className="rbp-label">Pilihan produk simpanan</div>
        <div className="rbp-list">
          <div className="rbp-item">
            <div className="rbp-ic"><Icon name="piggy-bank" size={16}/></div>
            <div><div className="rbp-nm">Aster</div><div className="rbp-ds">Tabungan perorangan — setoran awal ringan, cocok untuk transaksi harian.</div></div>
          </div>
          <div className="rbp-item">
            <div className="rbp-ic"><Icon name="wallet" size={16}/></div>
            <div><div className="rbp-nm">Amar Dana</div><div className="rbp-ds">Tabungan fleksibel untuk perorangan maupun badan usaha, saldo awal Rp5 juta.</div></div>
          </div>
          <div className="rbp-item">
            <div className="rbp-ic"><Icon name="calendar-check" size={16}/></div>
            <div><div className="rbp-nm">TAMARA</div><div className="rbp-ds">Tabungan berjangka dengan setoran rutin bulanan untuk tujuan finansial tertentu.</div></div>
          </div>
          <div className="rbp-item">
            <div className="rbp-ic"><Icon name="landmark" size={16}/></div>
            <div><div className="rbp-nm">Giro</div><div className="rbp-ds">Rekening giro untuk menunjang transaksi bisnis dengan cek dan bilyet giro.</div></div>
          </div>
          <div className="rbp-item rbp-item-hl">
            <div className="rbp-ic"><Icon name="trending-up" size={16}/></div>
            <div><div className="rbp-nm">Deposito</div><div className="rbp-ds">Penempatan berjangka dengan suku bunga kompetitif — hubungi RM untuk rate terbaik.</div></div>
          </div>
        </div>
      </div>
    </div>);

}

function IndividuPanel({ sub, setSub, onToast, onTrack, onOpenModal }) {
  return (
    <div className="stage-panel">
      <div className="subnav">
        {INDIV_SUBS.map((s) =>
        <button key={s.key} className={'subchip' + (sub === s.key ? ' on' : '')}
        style={sub === s.key ? { background: s.color } : null} onClick={() => setSub(s.key)}>
            <span className="d" />{s.label}
          </button>
        )}
      </div>
      {sub === 'tunaiku' && <TunaikuCalc onTrack={onTrack} onToast={onToast} banner={{
          src: 'uploads/tunaiku-banner.webp',
          alt: 'pinyAMAN bikin enteng — beresin urusan segambreng. Tunaiku by Amar Bank, pinjam hingga Rp 30 juta.',
          toastMsg: 'Membuka Tunaiku — ajukan pinyaman sekarang…'
        }} />}
      {sub === 'app' && <AppDownload onToast={onToast} banner={{
          src: 'uploads/depo-instant.webp',
          alt: 'Rasain Cashback Langsung Depo Instan — nabung mulai IDR 20 juta, tenor 6 bulan.',
          toastMsg: 'Membuka Depo Instan di aplikasi Amar Bank…'
        }} />}
      {sub === 'wealth' && <WealthHook onOpenModal={() => onOpenModal('wealth')} />}
    </div>);

}

Object.assign(window, { IndividuPanel, INDIV_SUBS });