const bgTitles = document.querySelectorAll('[data-title-bg]');
// const sectionTriggers = document.querySelectorAll('[data-section-trigger]');

const initAnimateTitle = () => {
  // eslint-disable-next-line no-undef
  gsap.registerPlugin(ScrollTrigger);

  bgTitles.forEach((title, index) => {
    // eslint-disable-next-line no-undef
    gsap.set(title, {xPercent: 100});

    // eslint-disable-next-line no-undef
    gsap.to(title, {
      scrollTrigger: {
        trigger: title,
        start: 'bottom bottom',
        end: 'top+=500% top',
        scrub: 1,
      },
      xPercent: -100,
    });
  });

};

export {initAnimateTitle};


