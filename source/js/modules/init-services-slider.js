const servicesSlider = document.querySelector('[data-slider="services"]');
const breakpointMD = window.matchMedia('(max-width:1023px)');

let swiperServices;

const initSwiper = (slider) => {
  swiperServices = new Swiper(slider, {
    speed: 600,
    allowTouchMove: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: 16,
  });
};


const initServicesSlider = () => {
  if (!servicesSlider) {
    return;
  }

  const breakpointChecker = () => {
    if (breakpointMD.matches) {
      initSwiper(servicesSlider);
    } else {
      if (swiperServices) {
        swiperServices.destroy();
      }
    }
  };
  breakpointMD.addListener(breakpointChecker);
  breakpointChecker();
};

export {initServicesSlider};
