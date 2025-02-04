import {
  successStatus
} from './init-handler-form-step';
import {
  errorStatus
} from './init-handler-form-step';

const dataPostMainForm = (evt) => {
  const form = evt.target;
  let userName = form.querySelector('input[name="user-name"]').value;
  let userLastName = form.querySelector('input[name="user-last-name"]').value;
  let userEmail = form.querySelector('input[name="user-email"]').value;
  let userPhone = form.querySelector('input[name="user-phone"]').value;
  let userAge = form.querySelector('input[name="user-age"]').value;
  let fitnessGoals = form.querySelectorAll('input[name="fitness-goal"]');

  let userGender = form.querySelector('input[name="gender"]:checked').value;
  let fitnessChalenge = form.querySelector('input[name="fitness-challenge"]:checked').value;
  let sportDays = form.querySelector('input[name="sport-day-value"]:checked').value;
  // let coachGender = form.querySelector('input[name="gender-coach"]:checked').value;
  // let coachStyle = form.querySelector('input[name="style-coach"]:checked').value;
  let nutrition = form.querySelector('input[name="nutrition"]:checked').value;

  const dataForm = new FormData(form);

  let checkedFintessGoals = [];

  if (fitnessGoals) {
    fitnessGoals.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedFintessGoals.push(checkbox.value);
      }
    });
  }

  // body: JSON.stringify({
  //   'user-name': userName,
  //   'user-last-name': userLastName,
  //   'user-email': userEmail,
  //   'user-phone': userPhone,
  //   'user-age': userAge,
  //   'gender': userGender,
  //   'fitness-goal': checkedFintessGoals,
  //   'fitness-challenge': fitnessChalenge,
  //   'sport-day-value': sportDays,
  //   'gender-coach': coachGender,
  //   'style-coach': coachStyle,
  //   'nutrition': nutrition,
  // }),


  dataForm.append('user-name', userName);
  dataForm.append('user-last-name', userLastName);
  dataForm.append('user-email', userEmail);
  dataForm.append('user-phone', userPhone);
  if (userAge) {
    dataForm.append('user-age', userAge);
  }
  if (userGender) {
    dataForm.append('gender', userGender);
  }

  if (checkedFintessGoals) {
    dataForm.append('fitness-goal', checkedFintessGoals);
  }

  if (checkedFintessGoals) {
    dataForm.append('fitness-goal', checkedFintessGoals);
  }

  if (fitnessChalenge) {
    dataForm.append('fitness-challenge', fitnessChalenge);
  }
  if (sportDays) {
    dataForm.append('sport-day-value', sportDays);
  }
  // if (coachGender) {
  //   dataForm.append('gender-coach', coachGender);
  // }
  // if (coachStyle) {
  //   dataForm.append('style-coach', coachStyle);
  // }
  if (nutrition) {
    dataForm.append('nutrition', nutrition);
  }

  const dataJSON = JSON.stringify(Object.fromEntries(dataForm));

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: dataJSON,
  };

  fetch('https://hook.us1.make.com/cybu3vbarac9d52eflg48kl610fs74x5', requestOptions)
    .then((response) => {
      if (response.ok) {
        successStatus();
        console.log('success');
        return;
      }
      throw new Error();
    })
    .catch(() => {
      errorStatus();
    });
};

export {
  dataPostMainForm
};
