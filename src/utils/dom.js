const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

const camelCase = function(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

export function addClass(el, cls) {
  if (!(el instanceof Element)) return;
  const classes = (cls || '').split(' ');
  for (let i = 0, length = classes.length; i < length; ++i) {
    const clsName = classes[i];
    if (!clsName) continue;
    el.classList.add(clsName);
  }
};

export function removeClass(el, cls) {
  if (!(el instanceof Element) || !cls) return;
  const classes = (cls || '').split(' ');
  for (let i = 0, length = classes.length; i < length; ++i) {
    const clsName = classes[i];
    if (!clsName) continue;
    el.classList.remove(clsName);
  }
};

export function getStyle(element, styleName) {
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

export function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

export function isScroll(el, vertical) {
  const determinedDirection = (vertical !== null) && (vertical !== undefined);
  const overflow = determinedDirection
    ? vertical
    ? getStyle(el, 'overflow-y')
    : getStyle(el, 'overflow-x')
    : getStyle(el, 'overflow');

  return overflow.match(/(scroll|auto|overlay)/);
};

export function getScrollContainer(el, vertical) {
  let parent = el;
  while(parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return parent;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
};
