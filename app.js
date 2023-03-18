const fristName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const passowrd = document.getElementById('password');
const btn = document.getElementById('button');
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.addEventListener('focus', (e) => {
    input.classList.remove('errorform');

    input.nextElementSibling.classList.remove('errorelement');
    input.previousElementSibling.classList.remove('errorelement');
  });
});

function showError(input, message) {
  const spanMessage = input.nextElementSibling;
  const errorIcon = input.previousElementSibling;
  spanMessage.innerText = message;
  spanMessage.classList.add('errorelement');
  errorIcon.classList.add('errorelement');
  input.classList.add('errorform');
}

function showSuccess(input) {
  input.classList.add('success');
}

function chekEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Email is not valid');
    return false;
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFiledName(input)} is required!`);
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  });
}

function getFiledName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

btn.addEventListener('click', function (e) {
  e.preventDefault();
  checkRequired([fristName, lastName, email, passowrd]);
  chekEmail(email);

  if (checkRequired && chekEmail) {
    inputs.forEach((input) => (input.value = ''));
  }
});
