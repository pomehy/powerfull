const offerTimer = document.querySelector('[data-timer="parent"]');

const initTimer = () => {
  if (!offerTimer) {
    return;
  }

  const time = offerTimer.querySelector('[data-timer="time"]');
  const closeTimer = offerTimer.querySelector('[data-timer="close"]');

  let currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + 1);

  let year = currentDate.getFullYear();
  let month = String(currentDate.getMonth() + 1).padStart(2, '0');
  let day = String(currentDate.getDate()).padStart(2, '0');

  let countdownDate = new Date(`${year}-${month}-${day}T00:00:00`).getTime();

  const x = setInterval(function () {
    const now = new Date().getTime();

    const distance = countdownDate - now;

    // const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    time.textContent = `${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(x);
      time.textContent = 'Time out!';
    }
  }, 1000);

  setTimeout(() => {
    offerTimer.classList.remove('is-hide');
  }, 1000);

  closeTimer.addEventListener('click', (evt) => {
    evt.preventDefault();

    offerTimer.classList.add('is-hide');
  });
};

export {
  initTimer
};
