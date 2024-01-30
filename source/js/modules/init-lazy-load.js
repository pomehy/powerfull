const lazyImages = document.querySelectorAll('[data-image-lazy]');

const initLazyImage = () => {
  if (!lazyImages.length) {
    return;
  }

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const imageElements = entry.target.querySelectorAll('img');
        const webpImagesElements = entry.target.querySelectorAll('source');

        imageElements.forEach((img) => {
          img.src = img.dataset.src;
        });

        webpImagesElements.forEach((source) => {
          source.srcset = source.dataset.srcset;
        });
        observer.unobserve(entry.target);
      }
    });
  };

  const options = {
    // root: по умолчанию window, но можно задать любой элемент-контейнер
    rootMargin: '0px 0px 300px 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver(callback, options);

  lazyImages.forEach((image) => observer.observe(image));
};

export {initLazyImage};
