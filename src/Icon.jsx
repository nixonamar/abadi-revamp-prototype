// Lucide icon wrapper for React (UMD lucide must be loaded first).
// Each Icon owns its own container so React reconciliation stays clean.
function Icon({ name, size = 24, stroke = 2, color = 'currentColor', style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const i = document.createElement('i');
    i.setAttribute('data-lucide', name);
    el.appendChild(i);
    window.lucide.createIcons({ attrs: { width: size, height: size, 'stroke-width': stroke } });
    const svg = el.querySelector('svg');
    if (svg) svg.style.color = color;
  }, [name, size, stroke, color]);
  return <span ref={ref} style={{ display: 'inline-flex', lineHeight: 0, ...style }} />;
}
window.Icon = Icon;
