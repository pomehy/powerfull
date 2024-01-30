const buttonToTop = document.querySelector('[data-button-to-top]');
const pageFooter = document.querySelector('[data-footer]');

const handlerButtonToTop = () => {
  if (!buttonToTop) {
    return;
  }

  const footerTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: pageFooter,
      start: '15%',
      end: '100%',
      scrub: 1,
      toggleClass: {targets: buttonToTop, className: 'is-show'},
    },
  }, {defaults: {duration: 1, ease: 'none'}});
};

export {handlerButtonToTop};
