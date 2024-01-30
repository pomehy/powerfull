const mainNavLinks = document.querySelectorAll('[data-main-nav-link]');
const sections = document.querySelectorAll('[data-section]');

const initColoredLinks = () => {
  for (let i = 0; i < mainNavLinks.length; i++) {

    let phoneTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: sections[i],
        start: '-1%',
        end: '99%',
        scrub: 1,
        toggleClass: {targets: mainNavLinks[i], className: 'is-active'},
      },
    }, {defaults: {duration: 2, ease: 'none'}});
  }
};

export {initColoredLinks};
