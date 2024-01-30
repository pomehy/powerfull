const bgTitles = document.querySelectorAll('[data-title-bg]');
const sectionTriggers = document.querySelectorAll('[data-section-trigger]');

const initAnimateTitle = () => {
  gsap.registerPlugin(ScrollTrigger);

  for (let i = 0; i < bgTitles.length; i++) {
    let botPosition;
    let topPosition = '-40%';

    if (bgTitles[i].dataset.titleBg === 'pricing') {
      botPosition = '30%';
    } else {
      botPosition = '80%';
    }

    if (bgTitles[i].dataset.titleBg === 'services') {
      topPosition = '0%';
      botPosition = '120%';
    } else {
      topPosition = '-40%';
      botPosition = '80%';
    }

    let titleLine = gsap.timeline({
      scrollTrigger: {
        trigger: sectionTriggers[i],
        start: topPosition,
        end: botPosition,
        scrub: 1,
        fastScrollEnd: true,
      },
    }, {defaults: {duration: 2, ease: 'none'}});


    const getPosition = () => {
      let position;

      if (i % 2 === 0) {
        position = '-100%';
      } else {
        position = '100%';
      }

      return position;
    };

    titleLine.to(bgTitles[i], {x: `${getPosition()}`});
  }
};

export {initAnimateTitle};


