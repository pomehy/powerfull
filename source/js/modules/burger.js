import {
  ScrollLock
} from '../vendor/scroll-lock';
import {
  FocusLock
} from '../utils/focus-lock';

export class Burger {
  constructor() {
    this._header = document.querySelector('[data-header]');
    this._links = document.querySelectorAll('[data-main-nav-link]');
    this._burger = document.querySelector('[data-burger]');
    this._scrollLock = new ScrollLock();
    this._focusLock = new FocusLock();
    this._isMenuOpen = false;

    this._onBurgerClick = this._onBurgerClick.bind(this);
    this._onDocumentKeydown = this._onDocumentKeydown.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
  }

  init() {
    if (!this._burger) {
      return;
    }

    this._burger.addEventListener('click', this._onBurgerClick);
    this._handlerLinks();
  }

  _openMenu() {
    this._isMenuOpen = true;
    this._header.classList.add('is-active');
    this._burger.classList.add('is-active');
    this._scrollLock.disableScrolling();
    document.addEventListener('keydown', this._onDocumentKeydown);
    document.addEventListener('click', this._onDocumentClick);
    this._focusLock.lock('[data-header]');
    if (window.ls) {
      window.ls.stop();
    }
  }

  _handlerLinks() {
    this._links.forEach((link) => {
      link.addEventListener('click', () => {
        this._scrollLock.enableScrolling();
        this._focusLock.unlock('[data-header]');
        setTimeout(() => {
          this._isMenuOpen = false;
          // this._closeMenu();
          this._header.classList.remove('is-active');
          this._burger.classList.remove('is-active');
        }, 300);
      });
    });
  }

  _closeMenu() {
    this._isMenuOpen = false;
    this._header.classList.remove('is-active');
    this._burger.classList.remove('is-active');
    this._scrollLock.enableScrolling();
    this._focusLock.unlock('[data-header]');
    document.removeEventListener('keydown', this._onDocumentKeydown);
    document.removeEventListener('click', this._onDocumentClick);
    if (window.ls) {
      window.ls.start();
    }
  }

  _onBurgerClick() {
    if (this._isMenuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  _onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      this._closeMenu();
    }
  }

  _onDocumentClick(evt) {
    if (evt.target.hasAttribute('data-close-menu')) {
      this._closeMenu();
    }
  }
}

const othersArticlesBlock = document.querySelector('[data-others-articles="parent"]');

const handlerVisibleOthersArticles = () => {
  if (!othersArticlesBlock) {
    return;
  }

  const articlesList = othersArticlesBlock.querySelector('[data-others-articles="list"]');

  const hideOthersArticles = () => {
    if (articlesList.children.length === 0) {
      othersArticlesBlock.classList.add('is-hidden');
    }
  };

  let observerOthersArticles = new MutationObserver(hideOthersArticles);

  observerOthersArticles.observe(articlesList, {
    childList: true,
  });


  const articleItems = document.querySelectorAll('[data-others-articles="item"]');

  if (articleItems.length > 4) {
    for (let i = 4; i < articleItems.length; i++) {
      articleItems[i].classList.add('is-hidden');
    }
  }
};

handlerVisibleOthersArticles();
