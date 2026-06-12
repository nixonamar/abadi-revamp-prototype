# Amar Bank — Design System

A working design system for **Amar Bank** (PT Bank Amar Indonesia Tbk), Indonesia's
first pure-play, born-digital bank. This repository captures the brand's visual
foundations, voice, iconography, and high-fidelity UI-kit recreations of its two
primary surfaces — the **mobile banking app** and the **marketing website** — so
design agents can produce on-brand interfaces, mocks, decks, and prototypes.

> ⚠️ **Font substitution flag:** Amar Bank's production typeface is a proprietary
> rounded geometric sans. This system uses **Poppins** (Google Fonts) as the closest
> free match throughout. If you have the real brand font files, drop them in `/fonts`
> and update `colors_and_type.css`.

---

## 1. Company & product context

**Amar Bank** (ticker **AMAR** on the IDX) was founded in 1991 in Surabaya as
Anglomas International Bank; acquired by the **Tolaram Group** in 2014 and
transformed into a technology-led digital bank. It positions itself as *"a bank that
acts like a fintech but thinks like a bank."* Its mission skews social: serving the
**unbanked and underbanked** — individuals and MSMEs — and bringing financial health
to more Indonesians. (Headquarters: RDTX Square, Jakarta Selatan. Regulated by OJK,
deposits guaranteed by LPS.)

### Products represented in this system

| Surface | What it is | In this repo |
|---|---|---|
| **Amar Bank app** ("Amar Bank Digital", formerly **Senyumku**) | The consumer mobile bank — savings, transfers, bill pay, loans. Indonesia's first digital-only bank on the cloud (Google Cloud, 2020). | `ui_kits/app/` |
| **Marketing website** (amarbank.co.id) | Acquisition site — hero, product explainers, app-download CTAs. | `ui_kits/website/` |
| **Tunaiku** | Flagship app-based microloan platform (since 2014); surfaced inside the app as "Ajukan Pinjaman". | Referenced, not a standalone kit |

### Core in-app products (savings family)
- **Celengan** (Piggy Bank) — flexible savings, interest up to ~5.5%/yr, withdraw daily. **Purple.**
- **Deposito** — term deposit, competitive interest up to 9%/yr. **Green.**
- **Depo Instan** — instant deposit with cashback, tenor from 6 months. **Coral/red.**
- **Safe / Save** — extra protection (video-call verification before withdrawal).
- Plus utility rails: Ewallet top-up, Pulsa & Paket Data, PLN, QRIS, Transfer, Mutasi.

### Sources used to build this system
- Uploaded brand logos (`uploads/lg-amarbank@3x*.png`) — primary logo lockups & the "bo" infinity mark.
- Uploaded screenshots: `uploads/App.png` (home dashboard) and `uploads/Website.png` (homepage hero).
- Public web references: amarbank.co.id, Google Play listing, press coverage (The Asian Banker, Iconomics, MIX Marcomm).
- No codebase or Figma file was provided — UI kits are reconstructed from the screenshots + logo assets + public copy. **Treat the screenshots as the source of truth; flag anything beyond them as inferred.**

---

## 2. Content fundamentals (voice & tone)

**Language:** Bahasa Indonesia, casual-friendly register aimed at *generasi gemas* /
young millennials & Gen-Z. English creeps in for product/feature names where natural.

- **Warm, reassuring, optimistic.** The whole brand orbits the word **AMAN** (safe) —
  a pun on "Amar". Hero line: *"Sambut Generasi Tanpa Cemas Bersama kita
  #AMANdenganAMAR"* ("Welcome the worry-free generation — Safe with Amar"). Supporting:
  *"Generasi gemas kini lebih tenang tanpa cemas. Amar selalu jadi andalan, jaga
  tabungan tetap aman!"*
- **Second person, inclusive "we".** Speaks to *kamu* (informal you) and signs as
  *kami/kita* (we/us together). Friendly, not corporate.
- **Casing:** UI labels are **lowercase** and short — `total saldo`, `saldo aktif`,
  `No. Rek`. Action buttons use **Title Case** — `Tambah Saldo`, `Transfer`, `Lihat
  Info`. Marketing headlines use Title Case / Sentence case.
- **Money formatting:** Indonesian — `Rp` prefix (smaller, raised), `.` as thousands
  separator: `Rp 20.000.000`. Percentages highlighted in **gold/amber** inside cards
  (`CUAN hingga 5.75%`). "CUAN" = slang for profit/gains.
- **Verbs are punchy & benefit-led:** *cair tiap hari* (disburses daily), *Tarik
  kapanpun!* (withdraw anytime!), *langsung cair* (instantly disbursed).
- **Hashtag activation:** `#AMANdenganAMAR`. Trust signals always present (OJK / LPS).
- **No emoji** in the core product UI. Tone carried by warm illustration + color, not emoji.
- **Vibe:** approachable neobank — playful but trustworthy, never stiff or jargon-heavy.

---

## 3. Visual foundations

### Color
The identity is built on the **"bo" infinity mark**, a continuous sweep from
**lime-green → teal/cyan → blue**. That gradient *is* the brand.
- **Primary blue `#1253A5`** — wordmark, primary buttons, links, active states.
- **Lime green `#7BC143`** + **teal `#33B2BF`** — the energetic accent end; used in the
  mark, illustration highlights, and the green corner-swoosh on the app header.
- **Sky blue `#1BB1ED`** → blue header gradient on the app; **deep navy `#0A2E5C`** for
  the "total saldo" band and dark surfaces.
- **Website hero:** a moody radial blue, bright center (`#277DDB`) falling to near-black
  (`#050E1B`) — a premium, cinematic backdrop for the brand ambassador.
- **Product accents** are bold full-bleed gradients per savings product: **purple**
  (Celengan), **green** (Deposito), **coral/red** (Depo Instan). See `colors_and_type.css`.

### Type
- **Poppins** (substitute) everywhere — geometric, rounded, friendly. Headings 600–800,
  body 400–500. Tight negative letter-spacing on big display/balances.
- Balances are the typographic hero: large, bold, near-black, with a small raised `Rp`.
- Lowercase for ambient UI labels; weight (not just size) carries hierarchy.

### Backgrounds & surfaces
- App canvas is a cool off-white `#F4F6F9`. Content sits on **white rounded cards**.
- The app header is a **blue gradient** with an organic **green/lime swoosh** bleeding
  in from the top-right corner — a signature motif echoing the logo gradient.
- Website uses **full-bleed photographic heroes** (brand ambassador + waving flag) over
  the cinematic blue radial. Imagery is **cool-toned, polished, confident** — real
  people, studio lighting, often holding/wearing brand green.

### Cards
- **Rounded corners** (`--r-lg` 20px for primary cards; tiles ~14px).
- **Soft blue-tinted shadows** (`--sh-card: 0 6px 22px rgba(18,83,165,.10)`) — never
  harsh black. Mostly **borderless**, separated by elevation + the off-white canvas.
- Product cards are **full-bleed gradient** with white text + a spot illustration in the
  bottom corner and a small white pill CTA (`Lihat Info`).

### Buttons
- **Primary action tiles** (app): solid blue **rounded-square** with a centered white
  icon, label below in blue (`Tambah Saldo`, `Transfer`, `Mutasi`).
- **Pill buttons:** website "Download Amar Bank" = teal `#2CA6B5` filled pill; secondary
  = white outline pill on dark. In-card CTA = small white pill with blue text.
- **States:** hover/press darken ~6–10% and/or lift shadow; pressed tiles scale down
  slightly (~0.97). No neon glows.

### Radii, spacing, motion
- Radii: tiles 14px, cards 20px, sheets 28px, pills fully round.
- Spacing on a **4pt grid** (`--sp-*`). Generous card padding (20–24px).
- **Motion:** smooth and gentle — ease-out fades/slides (~200–300ms), modest press-scale.
  Friendly, not bouncy or flashy. Respect `prefers-reduced-motion`.
- Transparency/blur: used sparingly (the QRIS center nav button, frosted sheets).

### Iconography
See **§4** below. (Colorful filled glyph tiles in-app; clean line icons for nav/system.)

---

## 4. Iconography

- **Two registers.** (1) **Brand/product tiles** — small, colorful, semi-illustrative
  filled icons on white rounded tiles for the services grid (Ewallet, Pulsa & Paket
  Data, PLN, Ajukan Pinjaman, QRIS, etc.). These are multi-color, friendly, slightly
  3D/gradient. (2) **System/navigation** — simpler, single-weight glyphs (eye/hide
  balance, copy, plus, arrow, bell, profile, transfer arrows).
- **QRIS** appears as a branded center action in the bottom tab bar (filled blue circle,
  white "QRIS" wordmark) — Indonesia's national QR payment standard.
- **No emoji** used as iconography. No reliance on unicode glyphs.
- **Substitution:** the original colorful product tiles are bespoke illustrations not
  available to us. For system/line icons this kit links **Lucide** (CDN) — clean,
  rounded, single-weight, matching the friendly geometric feel. Product-tile icons in
  the UI kit use Lucide glyphs tinted in brand colors as stand-ins and are **flagged**;
  swap in real artwork when available. Logos & the "bo" mark are real PNGs in `/assets`.

---

## 5. Index / manifest

**Root**
- `README.md` — this file.
- `colors_and_type.css` — CSS variables: brand + product colors, gradients, type scale,
  radii, shadows, spacing. Import this everywhere.
- `SKILL.md` — Agent-Skill manifest (for use in Claude Code).

**`/assets`** — real brand imagery
- `logo-horizontal.png` — primary lockup (mark + "amar bank", on light).
- `logo-full.png` — stacked lockup.
- `logo-mark.png` — the "bo" infinity mark (gradient).
- `logo-mark-white.png` — white mark for dark backgrounds.
- `ref-app.png`, `ref-website.png` — original screenshots (source of truth).

**`/preview`** — Design System tab cards (small HTML specimens: colors, type, spacing,
components, brand).

**`/ui_kits`**
- `app/` — mobile banking app recreation (`index.html` + JSX components).
- `website/` — marketing site recreation (`index.html` + JSX components).

**`/fonts`** — drop real brand font files here (currently empty; using Poppins via CDN).
