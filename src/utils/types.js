export function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

export function isHtmlElement(o) {
  return (o && o.nodeType === Node.ELEMENT_NODE) && (o instanceof HTMLElement);
};

export function isTextElement(o) {
  return (o && o.nodeType === Node.TEXT_NODE) && (o instanceof Text);
};
