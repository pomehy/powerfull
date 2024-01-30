const priceValue = document.querySelector('[data-price="value"]');
const priceButtons = document.querySelectorAll('[data-pricing-button]');

const handlerPrice = () => {
  if (!priceButtons.length) {
    return;
  }

  for (let i = 0; i < priceButtons.length; i++) {
    priceButtons[i].addEventListener('click', (evt) => {
      evt.preventDefault();

      let current = document.querySelector('[data-pricing-button].is-active');

      if (!current) {
        priceButtons[0].classList.add('is-active');
      }

      current.classList.remove('is-active');
      priceButtons[i].classList.add('is-active');
      priceValue.textContent = priceButtons[i].dataset.value;
    });
  }
};

export {handlerPrice};
