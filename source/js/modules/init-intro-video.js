const videoIntro = document.querySelector('[data-intro-video]');

const initVideoIntro = () => {
  if (!videoIntro) {
    return;
  }

  videoIntro.src = videoIntro.dataset.src;
};

export {initVideoIntro};
