const priceSplash = document.querySelector('[data-price="splash"]');
const priceSection = document.querySelector('#pricing');

const initSplash = () => {
  if (!priceSplash) {
    return;
  }

  gsap.to(priceSplash, {
    scrollTrigger: {
      trigger: priceSection,
      start: 'top top+=40%',
      end: 'top center',
      // markers: true,
      // id: 'splash',
      onEnter: () => priceSplash.classList.add('is-active'),
      scrub: 1,
    },
    duration: 1,
  });
};

export {
  initSplash
};
