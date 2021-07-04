export function addClass(el, cls) {
  if (!(el instanceof Element)) return;
  const classes = (cls || '').split(' ');
  for (let i = 0, length = classes.length; i < length; ++i) {
    const clsName = classes[i];
    if (!clsName) continue;
    el.classList.add(clsName);
  }
}

export function removeClass(el, cls) {
  if (!(el instanceof Element) || !cls) return;
  const classes = (cls || '').split(' ');
  for (let i = 0, length = classes.length; i < length; ++i) {
    const clsName = classes[i];
    if (!clsName) continue;
    el.classList.remove(clsName);
  }
}