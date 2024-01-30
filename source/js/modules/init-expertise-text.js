const expertiseFooterText = document.querySelector('[data-expertise-footer-text]');
const expertiseFooterTextTop = document.querySelector('[data-expertise-footer-text-top]');
const expertiseFooterTextBot = document.querySelector('[data-expertise-footer-text-bot]');


const initExeprtiseFooterText = () => {
  const expertiseFooter = gsap.timeline({
    scrollTrigger: {
      trigger: expertiseFooterText,
      start: '-30%',
      end: '10%',
      scrub: 1,
      fastScrollEnd: true,
    },
  }, {defaults: {duration: 1, ease: 'none'}});

  const expertiseFooterTopText = gsap.timeline({
    scrollTrigger: {
      trigger: expertiseFooterText,
      start: '15%',
      end: '100%',
      scrub: 1,
      toggleClass: {targets: expertiseFooterTextTop, className: 'is-show'},
      fastScrollEnd: true,
    },
  }, {defaults: {duration: 1, ease: 'none'}});


  expertiseFooter.to(expertiseFooterTextTop, {x: '0%'});
  expertiseFooter.to(expertiseFooterTextBot, {x: '0%'}, '-=0.5');
};

export {initExeprtiseFooterText};
