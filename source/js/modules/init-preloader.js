const preloader = document.querySelector('[data-preloader]');
const introVideo = document.querySelector('[data-intro-video]');

const initPreloader = () => {
  if (!preloader) {
    return;
  }

  document.body.classList.add('scroll-lock');

  const handlerPreloader = (delayTime) => {
    setTimeout(() => {
      preloader.classList.add('is-hidden');
      document.body.classList.remove('scroll-lock');
    }, delayTime);
  };

  introVideo.addEventListener('timeupdate', handlerPreloader(1500));
};

export {initPreloader};
