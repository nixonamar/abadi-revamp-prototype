// PLATFORM segment — dark dev world: Banking-as-a-Service / API showcase

function PlatformPanel({ onOpenModal, onToast }){
  const { lang } = useLang();
  const s = STRINGS[lang].platform;

  const API_SNIPPET = [
    `<span class="cm">${s.api_comment}</span>`,
    '<span class="pk">curl</span> https://api.amarbank.co.id/<span class="fn2">v1/accounts</span> \\',
    '  -H <span class="st">"Authorization: Bearer $AMAR_KEY"</span> \\',
    '  -d <span class="st">\'{ </span>',
    '    <span class="ky">"customer"</span>: <span class="st">"cust_8fa21"</span>,',
    '    <span class="ky">"product"</span>:  <span class="st">"celengan"</span>,',
    '    <span class="ky">"currency"</span>: <span class="st">"IDR"</span>',
    '  <span class="st">}\'</span>',
  ].join('\n');

  return (
    <div className="stage-panel">
      <CampaignBanner
        src="uploads/amarbank-x-dailysocial.webp"
        alt="Amar Bank × Daily Social: Unlock Banking Capability For The Growth of Digital Platforms."
        onToast={onToast}
        toastMsg={s.banner_toast}
      />
      <div className="plat-world">
        <div className="plat-grid">
          <div>
            <span className="plat-tag"><Icon name="terminal" size={13} color="var(--plat)"/> {s.tag}</span>
            <h3>{s.h3} <span className="c">{s.h3c}</span></h3>
            <p className="lede">{s.p}</p>
            <div className="plat-feats">
              {s.feats.map(f=>(
                <div className="pf" key={f.b}>
                  <span className="ic"><Icon name={f.ic} size={17}/></span>
                  <div><b>{f.b}</b><span>{f.s}</span></div>
                </div>
              ))}
            </div>
            <div className="plat-actions">
              <button className="btn btn-mint" onClick={()=>onOpenModal('partnership')}><Icon name="handshake" size={16} color="#06231d"/> {s.btn1}</button>
              <button className="btn btn-codedoc" onClick={()=>onToast(s.toast_doc,'external-link')}>{s.btn2}</button>
            </div>
            <div className="plat-certs">
              <span className="lbl">{s.compliance}</span>
              <span className="cert"><Icon name="badge-check" size={14} color="var(--plat)"/> ISO 27001</span>
              <span className="cert"><Icon name="badge-check" size={14} color="var(--plat)"/> TÜV Rheinland</span>
              <span className="cert"><Icon name="shield-check" size={14} color="var(--plat)"/> {s.ojk_cert}</span>
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
