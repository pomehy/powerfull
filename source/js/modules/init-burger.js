import {Burger} from './burger';

const headerToggle = document.querySelector('[data-header-toggle]');
const breakpointMD = window.matchMedia('(max-width:1023px)');

let burger = null;

const initBurger = () => {
  const breakpointChecker = () => {
    if (breakpointMD.matches) {
      headerToggle.setAttribute('data-burger', '');
      burger = new Burger();
      burger.init();
    } else {
      headerToggle.removeAttribute('data-burger', '');
      burger = null;
    }
  };
  breakpointMD.addListener(breakpointChecker);
  breakpointChecker();
};
export {initBurger};
