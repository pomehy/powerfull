const gallerySlider = document.querySelector('[data-slider="gallery"]');

let swiper;

const initSwiperGallery = (slider) => {
  swiper = new Swiper(slider, {
    speed: 3500,
    loop: true,
    ease: 'linear',
    allowTouchMove: true,
    watchOverflow: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    grabCursor: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });
};

const initGallerySlider = () => {
  if (!gallerySlider) {
    return;
  }

  initSwiperGallery(gallerySlider);
};

export {initGallerySlider};
