// Location / HQ section — full-width embedded 3D map of RDTX Square + address bar
const MAP_SRC = 'kantor-pusat-peta-3d.html';

function Location(){
  const { lang } = useLang();
  const s = STRINGS[lang].location;
  return (
    <section className="section loc" id="lokasi">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">{s.eyebrow}</div>
          <h2>{s.h2}</h2>
          <p>{s.p}</p>
        </div>

        <div className="loc-stage">
          <iframe src={MAP_SRC+'?embed=1'} title={s.map_title}></iframe>
          <a className="loc-expand" href={MAP_SRC} target="_blank" rel="noopener">
            <Icon name="maximize-2" size={15} color="var(--amar-blue)"/> {s.expand}
          </a>
        </div>

        <div className="loc-bar">
          <div className="loc-id">
            <img className="loc-logo" src="assets/logo-bo.png" alt=""/>
            <div>
              <h3>RDTX Square</h3>
              <div className="loc-co">{s.company}</div>
            </div>
          </div>
          <ul className="loc-facts">
            {s.facts.map(f=>(
              <li key={f.k}>
                <span className="fi"><Icon name={f.ic} size={16} color="var(--amar-blue)"/></span>
                <span className="ft"><b>{f.k}</b>{f.v}</span>
              </li>
            ))}
          </ul>
          <div className="loc-actions">
            <a className="loc-btn primary" href="https://www.google.com/maps/search/?api=1&query=RDTX+Square+Jl.+Prof.+Dr.+Satrio+Jakarta" target="_blank" rel="noopener">
              <Icon name="map" size={15} color="#fff"/> {s.dir}
            </a>
            <a className="loc-btn line" href="https://www.google.com/maps/place/RDTX+SQUARE/@-6.2182397,106.8193687,3a,75y,305.69h,126.89t/data=!3m7!1e1!3m5!1sv7cWTi3VBJC7Nu0tYiebEQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-36.893371564583475%26panoid%3Dv7cWTi3VBJC7Nu0tYiebEQ%26yaw%3D305.6892561260987!7i16384!8i8192" target="_blank" rel="noopener">
              <Icon name="eye" size={15}/> {s.sv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Location });
