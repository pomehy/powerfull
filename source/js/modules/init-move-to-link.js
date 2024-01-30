const moveToLinks = document.querySelectorAll('[data-move-to]');
const breakpointMD = window.matchMedia('(max-width:1023px)');

const initMoveToLinks = () => {
  if (!moveToLinks.length) {
    return;
  }

  let delayTime = breakpointMD.matches ? 0.3 : 0;

  gsap.registerPlugin(ScrollToPlugin);

  moveToLinks.forEach((link) => {
    const hash = link.hash;

    link.addEventListener('click', (evt) => {
      evt.preventDefault();

      gsap.to(window, {
        duration: 2,
        ease: 'power3',
        delay: delayTime,
        scrollTo: {
          y: hash,
        },
      });
    });
  });
};

export {initMoveToLinks};
