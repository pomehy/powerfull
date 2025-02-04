const beforeAfterSlider = document.querySelector('[data-slider="before-after"]');

let swiper;
let prevButton;
let nextButton;
let pagination;


const initSwiper = (slider) => {
// eslint-disable-next-line no-undef

  prevButton = slider.closest('[data-slider-container]').querySelector('[data-slider-prev]');
  nextButton = slider.closest('[data-slider-container]').querySelector('[data-slider-next]');
  pagination = slider.closest('[data-slider-container]').querySelector('[data-slider="pagination"]');

  // eslint-disable-next-line no-undef
  swiper = new Swiper(slider, {
    speed: 600,
    allowTouchMove: true,
    touchMoveStopPropagation: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    watchOverflow: true,
    spaceBetween: 20,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    pagination: {
      el: pagination,
      clickable: true,
      bulletActiveClass: 'is-active',
    },
  });
};

const initBeforeAfterSlider = () => {
  if (!beforeAfterSlider) {
    return;
  }

  initSwiper(beforeAfterSlider);
};

export {initBeforeAfterSlider};
