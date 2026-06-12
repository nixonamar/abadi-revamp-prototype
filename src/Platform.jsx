// PLATFORM segment — dark dev world: Banking-as-a-Service / API showcase
const API_SNIPPET = [
  '<span class="cm"># Buka rekening nasabah secara instan</span>',
  '<span class="pk">curl</span> https://api.amarbank.co.id/<span class="fn2">v1/accounts</span> \\',
  '  -H <span class="st">"Authorization: Bearer $AMAR_KEY"</span> \\',
  '  -d <span class="st">\'{</span>',
  '    <span class="ky">"customer"</span>: <span class="st">"cust_8fa21"</span>,',
  '    <span class="ky">"product"</span>:  <span class="st">"celengan"</span>,',
  '    <span class="ky">"currency"</span>: <span class="st">"IDR"</span>',
  '  <span class="st">}\'</span>',
].join('\n');

function PlatformPanel({ onOpenModal, onToast }){
  const feats = [
    { ic:'plug', b:'API-first, bukan ritel', s:'Buka rekening, KYC, dan dompet via REST API — bukan formulir cabang.' },
    { ic:'layers', b:'Embedded by design', s:'Tanam layanan bank langsung di produkmu dengan white-label penuh.' },
    { ic:'gauge', b:'Skala &amp; uptime bank', s:'Infrastruktur cloud-native, diawasi OJK, siap volume tinggi.' },
  ];
  return (
    <div className="stage-panel">
      <CampaignBanner
        src="uploads/amarbank-x-dailysocial.webp"
        alt="Amar Bank × Daily Social: Unlock Banking Capability For The Growth of Digital Platforms — unduh laporan kolaborasi."
        onToast={onToast}
        toastMsg="Mengunduh laporan Amar Bank × Daily Social…"
      />
      <div className="plat-world">
        <div className="plat-grid">
          <div>
            <span className="plat-tag"><Icon name="terminal" size={13} color="var(--plat)"/> Banking-as-a-Service</span>
            <h3>Jadikan bank sebagai <span className="c">beberapa baris kode.</span></h3>
            <p className="lede">Embedded Banking dari Amar memberi FinTech, marketplace, dan platform teknologi akses langsung ke rekening, pembayaran, dan pinjaman lewat API — tanpa harus jadi bank.</p>
            <div className="plat-feats">
              {feats.map(f=>(
                <div className="pf" key={f.b}>
                  <span className="ic"><Icon name={f.ic} size={17}/></span>
                  <div><b dangerouslySetInnerHTML={{__html:f.b}}/><span dangerouslySetInnerHTML={{__html:f.s}}/></div>
                </div>
              ))}
            </div>
            <div className="plat-actions">
              <button className="btn btn-mint" onClick={()=>onOpenModal('partnership')}><Icon name="handshake" size={16} color="#06231d"/> Hubungi Tim Kemitraan</button>
              <button className="btn btn-codedoc" onClick={()=>onToast('Membuka embeddedbanking.amarbank.co.id …','external-link')}>$ Lihat Dokumentasi API</button>
            </div>
            <div className="plat-certs">
              <span className="lbl">Compliance</span>
              <span className="cert"><Icon name="badge-check" size={14} color="var(--plat)"/> ISO 27001</span>
              <span className="cert"><Icon name="badge-check" size={14} color="var(--plat)"/> TÜV Rheinland</span>
              <span className="cert"><Icon name="shield-check" size={14} color="var(--plat)"/> Diawasi OJK</span>
            </div>
          </div>

          <div className="codewin">
            <div className="bar">
              <span className="dotc" style={{background:'#ff5f57'}}/><span className="dotc" style={{background:'#febc2e'}}/><span className="dotc" style={{background:'#28c840'}}/>
              <span className="fn">create_account.sh</span>
              <span className="method">POST</span>
            </div>
            <pre dangerouslySetInnerHTML={{__html: API_SNIPPET}}/>
            <div className="resp">
              <Icon name="check-circle-2" size={15} color="var(--plat)"/>
              <span className="ok">201 Created</span>
              <span>{'{ "account_id": "acc_x91k", "status": "active" }'}</span>
              <span className="typ">~140ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PlatformPanel });
