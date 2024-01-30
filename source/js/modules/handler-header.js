const pageHeader = document.querySelector('[data-header]');
const scrollRange = 100;

const paintHeader = () => {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > scrollRange) {
    pageHeader.classList.add('page-header--painted');
  }
  if (scrollRange > scrolled) {
    pageHeader.classList.remove('page-header--painted');
  }
};

const handlerHeader = () => {
  if (pageHeader) {
    paintHeader();
    window.addEventListener('scroll', paintHeader);
  }
};

export {handlerHeader};
