const howItWorkItems = document.querySelectorAll('[data-how-it-work="item"]');
const phoneImgs = document.querySelectorAll('[data-phone="image"]');
const breakpointMD = window.matchMedia('(max-width:1023px)');


const initAnimatePhone = () => {
  for (let i = 0; i < phoneImgs.length; i++) {
    let topPosition;
    let botPosition;

    if (i === 0) {
      topPosition = '-100%';
      botPosition = '100%';
    } else {
      topPosition = '-80%';
      botPosition = '100%';

      if (breakpointMD.matches) {
        topPosition = '-60%';
        botPosition = '100%';
      }
    }

    let phoneTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: howItWorkItems[i],
        start: topPosition,
        end: botPosition,
        scrub: 1,
        toggleClass: {targets: phoneImgs[i], className: 'is-show'},
        fastScrollEnd: true,
      },
    }, {defaults: {duration: 2, ease: 'none'}});
  }
};

export {initAnimatePhone};
