// Tweaks panel for the 3D HQ map — drives window.MAP3D.applyTweaks
const MAP3D_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "time": "siang",
  "autoRotate": true,
  "labels": true,
  "traffic": true
}/*EDITMODE-END*/;

function Map3DTweaksApp() {
  const [t, setTweak] = useTweaks(MAP3D_TWEAK_DEFAULTS);

  React.useEffect(() => {
    if (window.MAP3D) window.MAP3D.applyTweaks(t);
  }, [t]);

  return (
    <TweaksPanel>
      <TweakSection label="Suasana"></TweakSection>
      <TweakRadio
        label="Waktu"
        value={t.time}
        options={['siang', 'senja', 'malam']}
        onChange={(v) => setTweak('time', v)}
      ></TweakRadio>
      <TweakSection label="Peta"></TweakSection>
      <TweakToggle
        label="Putar otomatis"
        value={t.autoRotate}
        onChange={(v) => setTweak('autoRotate', v)}
      ></TweakToggle>
      <TweakToggle
        label="Label lokasi"
        value={t.labels}
        onChange={(v) => setTweak('labels', v)}
      ></TweakToggle>
      <TweakToggle
        label="Lalu lintas"
        value={t.traffic}
        onChange={(v) => setTweak('traffic', v)}
      ></TweakToggle>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<Map3DTweaksApp></Map3DTweaksApp>);
