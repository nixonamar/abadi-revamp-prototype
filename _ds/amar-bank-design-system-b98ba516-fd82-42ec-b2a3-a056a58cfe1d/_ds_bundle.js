/* @ds-bundle: {"format":3,"namespace":"AmarBankDesignSystem_b98ba5","components":[],"sourceHashes":{"ui_kits/app/Home.jsx":"47dde1cd0b72","ui_kits/app/Icon.jsx":"c3a264cb5bdf","ui_kits/app/Screens.jsx":"642c6f73f375","ui_kits/website/Hero.jsx":"46097cbb35a4","ui_kits/website/Icon.jsx":"c3a264cb5bdf","ui_kits/website/Nav.jsx":"61fa792d3a8d","ui_kits/website/Sections.jsx":"ca74de278f7c","ui_kits/website/image-slot.js":"9309434cb09c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AmarBankDesignSystem_b98ba5 = window.AmarBankDesignSystem_b98ba5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/Home.jsx
try { (() => {
// Amar Bank app — Home (Beranda) screen
function Home({
  hideBalance,
  onToggleBalance,
  onCopyRek,
  onOpen
}) {
  const balance = '20.000.000';
  const services = [{
    icon: 'wallet',
    color: 'var(--amar-teal)',
    label: 'Ewallet'
  }, {
    icon: 'smartphone',
    color: 'var(--amar-sky)',
    label: 'Pulsa & Paket Data'
  }, {
    icon: 'zap',
    color: 'var(--amar-blue)',
    label: 'PLN'
  }, {
    icon: 'hand-coins',
    color: 'var(--amar-green)',
    label: 'Ajukan Pinjaman'
  }, {
    icon: 'send',
    color: 'var(--amar-teal)',
    label: 'Kirim Uang'
  }, {
    icon: 'file-text',
    color: 'var(--amar-sky)',
    label: 'Tagihan'
  }, {
    icon: 'credit-card',
    color: 'var(--amar-blue)',
    label: 'Kartu'
  }, {
    icon: 'layout-grid',
    color: 'var(--amar-green)',
    label: 'Lainnya'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "appbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "swoosh"
  }), /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-white.png",
    alt: "amar bank",
    style: {
      height: 30
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "balance"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalband"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "total saldo"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "Rp 20.000.000")), /*#__PURE__*/React.createElement("div", {
    className: "balcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "aktif"
  }, "saldo aktif"), /*#__PURE__*/React.createElement("button", {
    className: "eye",
    onClick: onToggleBalance,
    "aria-label": "toggle balance"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: hideBalance ? 'eye' : 'eye-off',
    size: 22
  }))), /*#__PURE__*/React.createElement("div", {
    className: "big"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rp"
  }, "Rp"), hideBalance ? '••••••••' : balance), /*#__PURE__*/React.createElement("div", {
    className: "rek"
  }, /*#__PURE__*/React.createElement("span", null, "No. Rek"), /*#__PURE__*/React.createElement("b", null, "200 126 5545"), /*#__PURE__*/React.createElement("button", {
    className: "copy",
    onClick: onCopyRek,
    "aria-label": "copy"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "copy",
    size: 17
  }))), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "act",
    onClick: () => onOpen('topup')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 25,
    color: "#fff",
    stroke: 2.6
  })), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Tambah Saldo")), /*#__PURE__*/React.createElement("button", {
    className: "act",
    onClick: () => onOpen('transfer')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 25,
    color: "#fff",
    stroke: 2.6
  })), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Transfer")), /*#__PURE__*/React.createElement("button", {
    className: "act",
    onClick: () => onOpen('mutasi')
  }, /*#__PURE__*/React.createElement("span", {
    className: "ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-down-up",
    size: 25,
    color: "#fff",
    stroke: 2.6
  })), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, "Mutasi"))))), /*#__PURE__*/React.createElement("div", {
    className: "section"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "sec-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "a"
  }, "amar "), /*#__PURE__*/React.createElement("span", {
    className: "b"
  }, "saving")), /*#__PURE__*/React.createElement("div", {
    className: "saving-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pcard celengan",
    onClick: () => onOpen('product')
  }, /*#__PURE__*/React.createElement("div", {
    className: "blob"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pt"
  }, "Celengan"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 22,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd"
  }, /*#__PURE__*/React.createElement("b", null, "CUAN hingga 5,75%"), /*#__PURE__*/React.createElement("br", null), "cair tiap hari.", /*#__PURE__*/React.createElement("br", null), "Tarik kapanpun!"), /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Lihat Info")), /*#__PURE__*/React.createElement("div", {
    className: "right-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pcard deposito",
    onClick: () => onOpen('product')
  }, /*#__PURE__*/React.createElement("div", {
    className: "blob"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pt"
  }, "Deposito"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd"
  }, "Mulai dari 1 bulan", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "CUAN hingga 9%")), /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Lihat Info")), /*#__PURE__*/React.createElement("div", {
    className: "pcard depo",
    onClick: () => onOpen('product')
  }, /*#__PURE__*/React.createElement("div", {
    className: "blob"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ph"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pt",
    style: {
      fontSize: 17
    }
  }, "Depo Instan"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    className: "pd"
  }, /*#__PURE__*/React.createElement("b", null, "Cashback"), " langsung cair", /*#__PURE__*/React.createElement("br", null), "tenor mulai 6 bulan"), /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "Lihat Info"))))), /*#__PURE__*/React.createElement("div", {
    className: "svc-grid"
  }, services.map(s => /*#__PURE__*/React.createElement("button", {
    className: "svc",
    key: s.label,
    onClick: () => onOpen('service')
  }, /*#__PURE__*/React.createElement("span", {
    className: "si"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 29,
    color: s.color
  })), /*#__PURE__*/React.createElement("span", {
    className: "sl"
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Icon.jsx
try { (() => {
// Lucide icon wrapper for React (UMD lucide must be loaded first).
// Each Icon owns its own container so React reconciliation stays clean.
function Icon({
  name,
  size = 24,
  stroke = 2,
  color = 'currentColor',
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': stroke
      }
    });
    const svg = el.querySelector('svg');
    if (svg) svg.style.color = color;
  }, [name, size, stroke, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Screens.jsx
try { (() => {
// Amar Bank app — sub-screens (Transfer flow + generic placeholder)
function SubHead({
  title,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "swoosh"
  }), /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("h2", null, title));
}
function fmt(n) {
  const digits = String(n).replace(/\D/g, '');
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
function TransferScreen({
  onBack,
  onToast
}) {
  const [step, setStep] = React.useState(1); // 1 form, 2 confirm, 3 success
  const [rek, setRek] = React.useState('088 201 7788');
  const [amount, setAmount] = React.useState('2.000.000');
  const [note, setNote] = React.useState('');
  if (step === 3) {
    return /*#__PURE__*/React.createElement("div", {
      className: "subscreen"
    }, /*#__PURE__*/React.createElement(SubHead, {
      title: "Transfer Berhasil",
      onBack: onBack
    }), /*#__PURE__*/React.createElement("div", {
      className: "success-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "success-ring"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inner"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 34,
      color: "#fff",
      stroke: 3
    }))), /*#__PURE__*/React.createElement("h3", null, "Transfer Berhasil!"), /*#__PURE__*/React.createElement("p", null, "Dana berhasil dikirim ke"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontWeight: 600,
        color: 'var(--ink)'
      }
    }, "BCA \xB7 ", rek), /*#__PURE__*/React.createElement("div", {
      className: "amt"
    }, "Rp ", amount), /*#__PURE__*/React.createElement("button", {
      className: "btn-primary",
      onClick: onBack
    }, "Kembali ke Beranda")));
  }
  if (step === 2) {
    return /*#__PURE__*/React.createElement("div", {
      className: "subscreen"
    }, /*#__PURE__*/React.createElement(SubHead, {
      title: "Konfirmasi Transfer",
      onBack: () => setStep(1)
    }), /*#__PURE__*/React.createElement("div", {
      className: "subbody"
    }, /*#__PURE__*/React.createElement("div", {
      className: "summary"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "Tujuan"), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, "BCA \xB7 ", rek)), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "Nominal"), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, "Rp ", amount)), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "Biaya Admin"), /*#__PURE__*/React.createElement("span", {
      className: "v",
      style: {
        color: 'var(--success)'
      }
    }, "Gratis")), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "Catatan"), /*#__PURE__*/React.createElement("span", {
      className: "v"
    }, note || '—')), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "k"
    }, "Total"), /*#__PURE__*/React.createElement("span", {
      className: "v",
      style: {
        fontSize: 16
      }
    }, "Rp ", amount))), /*#__PURE__*/React.createElement("button", {
      className: "btn-primary",
      onClick: () => setStep(3)
    }, "Konfirmasi & Transfer")));
  }
  const valid = rek.replace(/\D/g, '').length >= 6 && amount.replace(/\D/g, '').length >= 4;
  return /*#__PURE__*/React.createElement("div", {
    className: "subscreen"
  }, /*#__PURE__*/React.createElement(SubHead, {
    title: "Transfer",
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "subbody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Nomor Rekening Tujuan"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    value: rek,
    onChange: e => setRek(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Nominal Transfer"), /*#__PURE__*/React.createElement("div", {
    className: "amtbox"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rp"
  }, "Rp"), /*#__PURE__*/React.createElement("input", {
    value: amount,
    onChange: e => setAmount(fmt(e.target.value)),
    inputMode: "numeric"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", null, "Catatan"), /*#__PURE__*/React.createElement("input", {
    className: "inp",
    placeholder: "Tambahkan catatan (opsional)",
    value: note,
    onChange: e => setNote(e.target.value)
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-primary",
    disabled: !valid,
    onClick: () => setStep(2)
  }, "Lanjutkan")));
}
const PLACEHOLDERS = {
  topup: {
    title: 'Tambah Saldo',
    icon: 'plus-circle',
    msg: 'Top up via virtual account, kartu debit, atau gerai retail.'
  },
  mutasi: {
    title: 'Mutasi',
    icon: 'arrow-down-up',
    msg: 'Riwayat transaksi masuk & keluar akan tampil di sini.'
  },
  product: {
    title: 'amar saving',
    icon: 'piggy-bank',
    msg: 'Detail produk tabungan & investasi — Celengan, Deposito, Depo Instan.'
  },
  service: {
    title: 'Layanan',
    icon: 'layout-grid',
    msg: 'Pembelian pulsa, token PLN, top up e-wallet, dan lainnya.'
  }
};
function Placeholder({
  kind,
  onBack
}) {
  const p = PLACEHOLDERS[kind] || PLACEHOLDERS.service;
  return /*#__PURE__*/React.createElement("div", {
    className: "subscreen"
  }, /*#__PURE__*/React.createElement(SubHead, {
    title: p.title,
    onBack: onBack
  }), /*#__PURE__*/React.createElement("div", {
    className: "placeholder"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 48,
    color: "var(--ink-3)",
    stroke: 1.6
  }), /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.msg), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "(Layar contoh \u2014 UI kit)")));
}
window.TransferScreen = TransferScreen;
window.Placeholder = Placeholder;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Amar Bank website — hero
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("h1", null, "Sambut Generasi Tanpa Cemas Bersama kita ", /*#__PURE__*/React.createElement("span", {
    className: "hash"
  }, "#AMANdenganAMAR")), /*#__PURE__*/React.createElement("p", null, "Generasi gemas kini lebih tenang tanpa cemas. Amar selalu jadi andalan, jaga tabungan tetap aman!"), /*#__PURE__*/React.createElement("button", {
    className: "btn ghost",
    onClick: onCta
  }, "Download Amar Bank"), /*#__PURE__*/React.createElement("div", {
    className: "stores"
  }, /*#__PURE__*/React.createElement("a", {
    className: "store",
    onClick: onCta
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 22,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "s1"
  }, "Get it on"), /*#__PURE__*/React.createElement("span", {
    className: "s2"
  }, "Google Play"))), /*#__PURE__*/React.createElement("a", {
    className: "store",
    onClick: onCta
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "smartphone",
    size: 22,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "s1"
  }, "Download on the"), /*#__PURE__*/React.createElement("span", {
    className: "s2"
  }, "App Store"))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-art"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flagdot"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-white.png",
    alt: ""
  }), " #AMANdenganAMAR"), /*#__PURE__*/React.createElement("image-slot", {
    id: "amar-hero",
    shape: "rounded",
    radius: "28",
    placeholder: "Drop brand ambassador photo"
  }))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
// Lucide icon wrapper for React (UMD lucide must be loaded first).
// Each Icon owns its own container so React reconciliation stays clean.
function Icon({
  name,
  size = 24,
  stroke = 2,
  color = 'currentColor',
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': stroke
      }
    });
    const svg = el.querySelector('svg');
    if (svg) svg.style.color = color;
  }, [name, size, stroke, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      ...style
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Amar Bank website — top navigation
function Nav({
  onCta
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("img", {
    className: "logo",
    src: "../../assets/logo-horizontal.png",
    alt: "Amar Bank"
  }), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", null, "Tentang Kami"), /*#__PURE__*/React.createElement("a", null, "FAQ"), /*#__PURE__*/React.createElement("a", null, "Tunaiku"), /*#__PURE__*/React.createElement("a", null, "Embedded Banking"), /*#__PURE__*/React.createElement("span", {
    className: "navlink",
    onClick: () => setOpen(o => !o),
    style: {
      position: 'relative'
    }
  }, "Lainnya ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 16
  }), /*#__PURE__*/React.createElement("div", {
    className: 'dropdown' + (open ? ' open' : '')
  }, /*#__PURE__*/React.createElement("span", null, "Celengan"), /*#__PURE__*/React.createElement("span", null, "Deposito"), /*#__PURE__*/React.createElement("span", null, "Karier"), /*#__PURE__*/React.createElement("span", null, "Hubungi Kami")))), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-teal",
    onClick: onCta
  }, "Download Amar Bank"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
// Amar Bank website — products + trust + footer
function Products({
  onCta
}) {
  const items = [{
    cap: 'cap-purple',
    rate: 'rate-purple',
    icon: 'piggy-bank',
    name: 'Celengan',
    rateText: '5,5% p.a.',
    desc: 'Simpan dana berharga di Celengan. Tabungan fleksibel yang cair tiap hari.'
  }, {
    cap: 'cap-blue',
    rate: 'rate-blue',
    icon: 'hand-coins',
    name: 'Pinjaman Tunaiku',
    rateText: 'Rp30 juta',
    desc: 'Dapatkan pinjaman hingga Rp30 juta dengan tenor sampai 30 bulan. Syarat hanya KTP!'
  }, {
    cap: 'cap-green',
    rate: 'rate-green',
    icon: 'trending-up',
    name: 'Deposito',
    rateText: '9% p.a.',
    desc: 'Deposito dengan bunga kompetitif hingga 9% per tahun untuk jamin masa depanmu.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Produk Kami"), /*#__PURE__*/React.createElement("h2", null, "Satu aplikasi untuk semua kebutuhan finansialmu"), /*#__PURE__*/React.createElement("p", null, "Menabung, investasi, dan pinjaman \u2014 semua dalam satu genggaman, bebas biaya admin.")), /*#__PURE__*/React.createElement("div", {
    className: "prod-grid"
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    className: "prod",
    key: p.name,
    onClick: onCta
  }, /*#__PURE__*/React.createElement("div", {
    className: 'cap ' + p.cap
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 46,
    color: "#fff",
    stroke: 1.8
  })), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("h3", null, p.name), /*#__PURE__*/React.createElement("div", {
    className: 'rate ' + p.rate
  }, p.rateText), /*#__PURE__*/React.createElement("p", null, p.desc), /*#__PURE__*/React.createElement("span", {
    className: "more"
  }, "Lihat Info ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    color: "var(--amar-blue)"
  }))))))));
}
function Trust() {
  const stats = [{
    n: '14 jt+',
    l: 'Pengajuan pinjaman Tunaiku'
  }, {
    n: 'Rp9 T+',
    l: 'Total pinjaman tersalurkan'
  }, {
    n: '0',
    l: 'Biaya admin bulanan'
  }, {
    n: '100%',
    l: 'Pembukaan rekening online'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "section alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Dipercaya & Aman"), /*#__PURE__*/React.createElement("h2", null, "Bank digital yang berdampak nyata")), /*#__PURE__*/React.createElement("div", {
    className: "trust"
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: s.l
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    className: "badges"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 18,
    color: "var(--success)"
  }), " Berizin & diawasi OJK"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "landmark",
    size: 18,
    color: "var(--amar-blue)"
  }), " Peserta penjaminan LPS"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 18,
    color: "var(--amar-teal-deep)"
  }), " ISO 27001 Certified"))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "logo",
    src: "../../assets/logo-mark-white.png",
    alt: "Amar Bank"
  }), /*#__PURE__*/React.createElement("p", null, "PT Bank Amar Indonesia Tbk. RDTX Square Lt.11, Jl. Prof. DR. Satrio No.164, Setiabudi, Jakarta Selatan 12930.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Produk"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Celengan")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Deposito")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Tunaiku")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Depo Instan")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Perusahaan"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Tentang Kami")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Karier")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Embedded Banking")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "FAQ")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Bantuan"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Hubungi Kami")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Kebijakan Privasi")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Syarat & Ketentuan"))))), /*#__PURE__*/React.createElement("div", {
    className: "legal"
  }, "PT Bank Amar Indonesia Tbk berizin dan diawasi oleh OJK, serta merupakan peserta penjaminan LPS. Maksimum nilai simpanan yang dijamin LPS per nasabah per bank adalah Rp 2 miliar. \xA9 2026 Amar Bank.")));
}
window.Products = Products;
window.Trust = Trust;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/image-slot.js", error: String((e && e.message) || e) }); }

})();
