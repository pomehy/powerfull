const introCover = document.querySelector('[data-intro-cover]');

const handlerIntroCover = () => {
  if (!introCover) {
    return;
  }

  const wrapper = document.querySelector('.intro__video-bg-wrapper');

  const introCoverTimeLine = gsap.timeline({
    scrollTrigger: {
      trigger: introCover,
      start: '30%',
      end: '90%',
      scrub: 1,
    },
  }, {defaults: {duration: 1, ease: 'none'}});


  introCoverTimeLine.to(introCover, {opacity: '1'});
  introCoverTimeLine.to(wrapper, {opacity: '0'});
};

export {handlerIntroCover};


