const registeredUsers = [
  ['admin', 'KoI18'],
  ['manager', 'SuperMe108'],
  ['editor', '12345'],
];

const form = document.querySelector('form');
const login = document.querySelector('[name="login"]');
const password = document.querySelector('[name="password"]');
const submitButton = document.querySelector('button[type="submit"]');

const inputsArray = [login, password, submitButton];

inputsArray.forEach(el => el.addEventListener('keydown', handleEvent));

function handleEvent(event) {
  if (event.key === 'Enter') {
    event.preventDefault();

    const currentIndex = inputsArray.indexOf(event.target);

    if (currentIndex > -1 && currentIndex < inputsArray.length - 1) {
      inputsArray[currentIndex + 1].focus();
    } else if (currentIndex === inputsArray.length - 1) {
      form.requestSubmit();
    }
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (validate()) {
    alert("Успешный вход!");
    console.log("Успешный вход!");
    form.reset();
    login.focus();
  }
}

function validate() {
  for (let user of registeredUsers) {
    if (login.value.trim() === user[0] && password.value.trim() === user[1]) {
      return true;
    }
  }

  alert("Неверный логин или пароль");
  console.log("Неверный логин или пароль");
  return false;
}