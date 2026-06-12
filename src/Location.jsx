// Location / HQ section — full-width embedded 3D map of RDTX Square + address bar
const MAP_SRC = 'kantor-pusat-peta-3d.html';

function Location(){
  const facts = [
    { ic:'building-2',   k:'Gedung',   v:'RDTX Square, Lt. 11' },
    { ic:'map-pin',      k:'Alamat',   v:'Jl. Prof. Dr. Satrio No. 164' },
    { ic:'navigation',   k:'Kawasan',  v:'Karet Semanggi, Setiabudi' },
    { ic:'locate-fixed', k:'Koordinat',v:'-6.21779, 106.81888' },
  ];
  return (
    <section className="section loc" id="lokasi">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Kunjungi Kami</div>
          <h2>Kantor pusat Amar Bank</h2>
          <p>Jelajahi lokasi kami dalam peta 3D interaktif — putar, perbesar, dan ganti suasana siang ke malam.</p>
        </div>

        <div className="loc-stage">
          <iframe src={MAP_SRC+'?embed=1'} title="Peta 3D Kantor Pusat Amar Bank — RDTX Square"></iframe>
          <a className="loc-expand" href={MAP_SRC} target="_blank" rel="noopener">
            <Icon name="maximize-2" size={15} color="var(--amar-blue)"/> Layar penuh
          </a>
        </div>

        <div className="loc-bar">
          <div className="loc-id">
            <img className="loc-logo" src="assets/logo-bo.png" alt=""/>
            <div>
              <h3>RDTX Square</h3>
              <div className="loc-co">PT Bank Amar Indonesia Tbk</div>
            </div>
          </div>
          <ul className="loc-facts">
            {facts.map(f=>(
              <li key={f.k}>
                <span className="fi"><Icon name={f.ic} size={16} color="var(--amar-blue)"/></span>
                <span className="ft"><b>{f.k}</b>{f.v}</span>
              </li>
            ))}
          </ul>
          <div className="loc-actions">
            <a className="loc-btn primary" href="https://www.google.com/maps/search/?api=1&query=RDTX+Square+Jl.+Prof.+Dr.+Satrio+Jakarta" target="_blank" rel="noopener">
              <Icon name="map" size={15} color="#fff"/> Petunjuk Arah
            </a>
            <a className="loc-btn line" href="https://www.google.com/maps/place/RDTX+SQUARE/@-6.2182397,106.8193687,3a,75y,305.69h,126.89t/data=!3m7!1e1!3m5!1sv7cWTi3VBJC7Nu0tYiebEQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-36.893371564583475%26panoid%3Dv7cWTi3VBJC7Nu0tYiebEQ%26yaw%3D305.6892561260987!7i16384!8i8192" target="_blank" rel="noopener">
              <Icon name="eye" size={15}/> Street View
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Location });
