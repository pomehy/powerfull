const mainForm = document.querySelector('[data-main-form="parent"]');
const formSteps = document.querySelectorAll('[data-main-form-step]');
const nextButton = document.querySelector('[data-main-form="step-next"]');
const prevButton = document.querySelector('[data-main-form="step-prev"]');
const submitButton = document.querySelector('[data-main-form="submit"]');
const progress = document.querySelector('[data-main-form-progress]');
const errorMessage = document.querySelector('[data-main-form="error"]');

let stepCounter = 0;
let totalIndicator = 1;

const errorStatus = () => {
  errorMessage.classList.add('is-show');
};

const resetFormStep = () => {
  totalIndicator = 1;
  progress.style.transform = `scaleX(${totalIndicator}%)`;
  stepCounter = 0;

  formSteps.forEach((step) => {
    step.classList.remove('is-active');
  });
  formSteps[stepCounter].classList.add('is-active');
  prevButton.classList.add('is-shrink');
  prevButton.classList.remove('is-short');
  nextButton.classList.remove('is-hidden');
  prevButton.parentElement.classList.remove('is-gap');
  submitButton.classList.add('is-hidden');
};

const successStatus = () => {
  modals.open('success-form');
  setTimeout(() => {
    resetFormStep();
  }, 1000);
};

const handlerStepMainForm = () => {
  if (!mainForm) {
    return;
  }

  const inputs = mainForm.querySelectorAll('input');

  const counterPlus = () => stepCounter++;
  const counterMinus = () => stepCounter--;

  let stepInicator = 100 / (formSteps.length - 1);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      if (errorMessage.classList.contains('is-show')) {
        errorMessage.classList.remove('is-show');
      }

      formSteps.forEach((step) => {
        if (step.classList.contains('is-empty')) {
          step.classList.remove('is-empty');
        }
      });

    });
  });

  nextButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    const checkedInput = function () {
      let inputsStep = formSteps[stepCounter].querySelectorAll('input');

      let checkedInputs = [];

      for (let i = 0; i < inputsStep.length; i++) {
        if (inputsStep[i].type === 'checkbox' || inputsStep[i].type === 'radio') {
          if (inputsStep[i].checked) {
            checkedInputs.push(inputsStep[i]);
          }
        } else {
          if (inputsStep[i].value !== '') {
            checkedInputs.push(inputsStep[i]);
          }
        }
      }

      if (checkedInputs.length > 0) {
        return true;
      }
    };

    if (checkedInput() === true) {
      counterPlus();

      totalIndicator = totalIndicator + stepInicator;

      if (totalIndicator > 100) {
        totalIndicator = 100;
      }

      progress.style.transform = `scaleX(${totalIndicator}%)`;

      if (stepCounter >= formSteps.length - 1) {
        stepCounter = formSteps.length - 1;
        submitButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
        prevButton.classList.add('is-short');
      }

      prevButton.classList.remove('is-hidden');
      if (prevButton.classList.contains('is-shrink')) {
        prevButton.classList.remove('is-shrink');
        prevButton.parentElement.classList.add('is-gap');
      }

      formSteps.forEach((step) => {
        step.classList.remove('is-active');
      });
      formSteps[stepCounter].classList.add('is-active');
    } else {
      formSteps[stepCounter].classList.add('is-empty');
    }
  });

  prevButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    counterMinus();

    totalIndicator = totalIndicator - stepInicator;

    if (totalIndicator <= 0) {
      totalIndicator = 1;
    }

    progress.style.transform = `scaleX(${totalIndicator}%)`;

    if (stepCounter <= 0) {
      stepCounter = 0;
      prevButton.classList.add('is-shrink');
      prevButton.parentElement.classList.remove('is-gap');
    }

    if (!submitButton.classList.contains('is-hidden')) {
      submitButton.classList.add('is-hidden');
    }

    if (nextButton.classList.contains('is-hidden')) {
      nextButton.classList.remove('is-hidden');
    }

    if (prevButton.classList.contains('is-short')) {
      prevButton.classList.remove('is-short');
    }

    formSteps.forEach((step) => {
      step.classList.remove('is-active');
    });
    formSteps[stepCounter].classList.add('is-active');
  });
};

export {
  successStatus,
  errorStatus,
  handlerStepMainForm
};
