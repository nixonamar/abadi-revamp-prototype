# Product Requirement Document (PRD)

## Document Control

* **Project Name:** Amar Bank Homepage Redesign: Smart Gateway & Segmentation Routing
* **Objective:** Optimize conversion across all user segments by turning the corporate homepage into an intelligent traffic router that builds immediate trust and funnels users into the correct product ecosystems.
* **Target Release:** Q3 2026

---

## 1. Background & Problem Statement

The current Amar Bank homepage functions primarily as an informational brochure with a heavy bias toward the Retail Mobile App. This architecture leaves high-value segments—such as High-Net-Worth Individuals (HNWIs), MSMEs, Corporate clients, and tech platforms looking for Embedded Banking—to navigate dense drop-down menus.

This friction leads to high drop-off rates, brand confusion (with users misidentifying Amar Bank as *only* a retail bank), and lost lead-generation opportunities for high-margin B2B and Wealth products.

---

## 2. Core Goals & Success Metrics (KPIs)

* **Primary Metric:** Increase overall Click-Through Rate (CTR) from the homepage to sub-product landing pages by **25%**.
* **Secondary Metrics:**
* Increase B2B and Wealth Management lead capture form submissions by **40%**.
* Increase clickout conversions from the homepage to Tunaiku.com by **15%**.
* Reduce bounce rate on the homepage by **10%**.



---

## 3. User Segments & Product Matrix

The system must dynamically accommodate and triage users into three primary pillars and six distinct product pathways:

| Pillar | Target Segment | Target Product | Primary Conversion Goal |
| --- | --- | --- | --- |
| **1. Untuk Individu** | Retail / Mass Market Consumers | Unsecured Loan (Tunaiku) | Clickout to Tunaiku.com application |
|  | Retail / Digital-Savvy Consumers | Retail Digital Banking | Mobile App Download (App/Play Store) |
|  | HNWIs / Affluent Savers | Retail Relationship Banking | Wealth Manager Consultation Lead Form |
| **2. Untuk Bisnis** | MSMEs & Startups (< Rp5B) | Business Digital Banking | Eligibility Checker / Digital App Setup |
|  | Mid-to-Large Enterprises (> Rp5B) | Corporate Relationship Banking | Corporate RM Contact Form Submission |
| **3. Untuk Platform** | Tech Companies, FinTechs, Platforms | Embedded Banking | Developer API Docs Click / Partnership Form |

---

## 4. Functional Requirements & Feature Specifications

### Epic 1: The "Smart Gateway" Triage Module

* **Description:** A dedicated, highly visible section located immediately beneath the Hero area that forces user self-selection.
* **Requirements:**
* Must feature a 3-tab layout or 3-column structural layout: **[Untuk Individu]**, **[Untuk Bisnis]**, **[Untuk Platform]**.
* Clicking or hovering on a pillar dynamically updates the secondary sub-product options below it without requiring a full page reload.



### Epic 2: Product Interactivity & Segmented CTAs

#### A. Individu Segment Features

* **Tunaiku Mini-Calculator Widget:**
* Include a basic slider for "Jumlah Pinjaman" (Loan Amount) and "Tenor" (Duration).
* **CTA:** "Cek Pinjaman Saya" button that deep-links directly into the Tunaiku application flow with the user’s slider variables pre-filled in the URL parameters.


* **Retail Digital Banking App Section:**
* Display key selling points: *Celengan AI* and *Brankas (Aman dengan Amar)*.
* **CTA:** Render dual download buttons ("App Store" / "Google Play") alongside a **dynamic QR Code** block. When viewed on desktop, users scan the QR to download; when viewed on mobile, the QR code hides and converts into standard app download links.


* **Retail Relationship Banking Hook:**
* Highlight the "Deposito 9%" asset accumulation yield.
* **CTA:** "Hubungi Wealth Manager" opening a modal overlay contact form (Name, Phone, Email, Estimated Investment Amount).



#### B. Bisnis Segment Features

* **Business Digital Banking Eligibility Checker:**
* A micro-form consisting of 3 dropdown steps: *Omset Tahunan* (Annual Turnover), *Lama Usaha* (Time in Business), and *Kebutuhan Modal* (Funding Needs).
* **CTA:** "Cek Kualifikasi Bisnis".


* **Corporate Relationship Banking Module:**
* Premium UI styling distinct from retail. Must display business capability pillars (Treasury, Large Ticket Loans > Rp5 Milyar).
* **CTA:** "Jadwalkan Pertemuan Korporat" linking to a high-intent lead form routing directly to the Corporate Relationship Management CRM.



#### C. Platform Segment Features

* **Embedded Banking Technical Showcase:**
* Frame the product as Banking-as-a-Service (BaaS) and API-first rather than traditional retail financing.
* Include a visual representation or simulated visual code snippet of an API call.
* **Dual CTAs:**
* Primary: "Hubungi Tim Kemitraan" (Contact Partnership Team).
* Secondary: "Lihat Dokumentasi API" (View API Documentation, linking to `embeddedbanking.amarbank.co.id`).





---

### Epic 3: Global Trust & Social Proof Upgrades

#### A. Elevated Regulatory Architecture

* **Requirement:** Move the OJK (Otoritas Jasa Keuangan) and LPS (Lembaga Penjamin Simpanan) trust badges out of the exclusive bottom footer.
* **Implementation:** Place a persistent, micro-trust bar either fixed to the top navigation header or anchored directly under the main Hero text stating: *"PT Bank Amar Indonesia Tbk berizin dan diawasi oleh OJK serta merupakan peserta penjaminan LPS."*

#### B. Segmented Testimonial Tab Switcher

* **Requirement:** Redesign the current single-track video testimonial block into a filterable gallery.
* **Controls:** Users can filter testimonials by clicking tags: `[Cerita Nasabah Individu]`, `[Kisah Sukses UMKM]`, `[Mitra Kolaborasi Platform/API]`.
* **Logic:** Selecting a tag swaps out the embedded YouTube thumbnails to match the target user's context.

---

## 5. Non-Functional & Technical Requirements

### Security & Compliance

* **B2B Data Assurance:** Ensure all lead forms intended for Business and Corporate segments display data confidentiality terms compliant with Indonesian PDPA (UU Pelindungan Data Pribadi).
* Display clear system certifications (e.g., ISO 27001, TUV Rheinland) within the Business and Embedded banking sub-sections to lower corporate risk perception.

### Performance & Core Web Vitals

* The homepage weight must be highly optimized. Dynamic element rendering (the Triage tabs and calculators) must be built using lightweight JS/CSS framework components to ensure a **Largest Contentful Paint (LCP) of < 2.5 seconds** over standard 4G mobile connections.

### Analytics & Event Tracking Architecture

* **Event Tagging Required:**
* `homepage_triage_click` (Label: Individu, Bisnis, Platform)
* `tunaiku_calculator_adjust` (Track initial vs final value adjusted)
* `app_qr_code_scanned`
* `lead_form_submitted` (Label: Wealth, Business_Eligibility, Corporate_RM, API_Partnership)



---

## 6. Out of Scope

* Redesigning the internal application architectures of `tunaiku.com` or the mobile banking app itself. This PRD handles exclusively the triage layer, presentation layout, and outgoing routing links hosted on the main `amarbank.co.id` root domain.