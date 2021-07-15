/**
 * 懒加载
 * @param {HTMLElement} parent 需要对内容进行懒加载的容器
 */
 export default function lazyLoad(parent = document.body) {
  if (typeof IntersectionObserver === 'undefined') {
    console.warn('[lazyLoad] 当前浏览器版本不支持 `IntersectionObserver`.');
    return;
  };

  const images = document.querySelectorAll('img.nt-image__inner.is-lazy');
  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const src = entry.target.dataset.src;
        entry.target.src = src;
        observer.unobserve(entry.target);
      }
    })
  }, {
    root: parent,
    rootMargin: '0px 0px 0px 0px',
    threshold: [0]
  });

  const length = images.length;
  for (let i = 0; i < length; ++i) {
    let image = images[i];
    intersectionObserver.observe(image);
  }
}