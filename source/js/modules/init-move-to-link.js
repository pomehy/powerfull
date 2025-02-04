const moveToLinks = document.querySelectorAll('[data-move-to]');
const breakpointMD = window.matchMedia('(max-width:1023px)');

gsap.registerPlugin(ScrollToPlugin);

const initMoveToLinks = () => {
  if (!moveToLinks.length) {
    return;
  }

  let delayTime = breakpointMD.matches ? 0.3 : 0;

  moveToLinks.forEach((link) => {

    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      const hash = link.hash;

      gsap.to(window, {
        duration: 1,
        ease: 'power3',
        // delay: delayTime,
        scrollTo: {
          y: hash,
          offsetY: 0,
        },
      });
    });
  });
};

export {initMoveToLinks};
