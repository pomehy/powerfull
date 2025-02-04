const reviewsSlider = document.querySelector('[data-slider="reviews"]');

let swiper;
let prevButton;
let nextButton;
let pagination;


const initSwiper = (slider) => {
// eslint-disable-next-line no-undef
  prevButton = slider.closest('[data-slider-container]').querySelector('[data-slider-prev]');
  nextButton = slider.closest('[data-slider-container]').querySelector('[data-slider-next]');
  pagination = slider.closest('[data-slider-container]').querySelector('[data-slider="pagination"]');

  swiper = new Swiper(slider, {
    speed: 600,
    allowTouchMove: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: 16,
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

const initReviewsSlider = () => {
  if (!reviewsSlider) {
    return;
  }

  initSwiper(reviewsSlider);
};

export {initReviewsSlider};
