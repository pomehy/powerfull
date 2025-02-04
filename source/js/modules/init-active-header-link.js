const mainNavLinks = document.querySelectorAll('[data-main-nav-link]');
const sections = document.querySelectorAll('[data-section]');

const initColoredLinks = () => {
  for (let i = 0; i < mainNavLinks.length; i++) {
    const hash = mainNavLinks[i].hash;

    let colorLinks = gsap.timeline({
      scrollTrigger: {
        trigger: document.querySelector(`${hash}`),
        start: '-1%',
        end: '99%',
        scrub: 1,
        toggleClass: {targets: mainNavLinks[i], className: 'is-active'},
      },
    }, {defaults: {duration: 2, ease: 'none'}});
  }
};

export {initColoredLinks};
