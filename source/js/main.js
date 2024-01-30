import {mobileVhFix} from './utils/mobile-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {handlerStickyCard} from './modules/sticky-card';
import {Burger} from './modules/burger';
import {handlerHeader} from './modules/handler-header';
import {handlerPrice} from './modules/handler-price';
import {initReviewsSlider} from './modules/init-reviews-slider';
import {initAnimateTitle} from './modules/init-anim-title';
import {initExeprtiseFooterText} from './modules/init-expertise-text';
import {initGallerySlider} from './modules/init-gallery-slider';
import {initAnimatePhone} from './modules/init-phone-animate';
// import {initSmoothScroll} from './modules/init-smoothscroll';
import {initMoveToLinks} from './modules/init-move-to-link';
import {handlerIntroCover} from './modules/init-intro-bg';
import {handlerStepMainForm} from './modules/init-handler-form-step';
import {initColoredLinks} from './modules/init-active-header-link';
import {handlerButtonToTop} from './modules/handler-button-to-top';
import {initPreloader} from './modules/init-preloader';
import {initServicesSlider} from './modules/init-services-slider';
import {initLazyImage} from './modules/init-lazy-load';
import {initVideoIntro} from './modules/init-intro-video';
// ---------------------------------

window.sal({
  once: true,
  threshold: 0.5,
});


window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------
  initVideoIntro();
  initLazyImage();
  initModals();
  mobileVhFix();
  handlerStepMainForm();
  initPreloader();
  const form = new Form();
  window.form = form;
  form.init();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const burger = new Burger();
    burger.init();
    handlerHeader();
    // initSmoothScroll();
    initMoveToLinks();
    handlerStickyCard();
    handlerPrice();
    initReviewsSlider();
    initAnimateTitle();
    initGallerySlider();
    initExeprtiseFooterText();
    initAnimatePhone();
    handlerIntroCover();
    initColoredLinks();
    handlerButtonToTop();
    initServicesSlider();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
