const registeredUsers = [
  ['admin', 'KoI18'],
  ['manager', 'SuperMe108'],
  ['editor', '12345'],
];

const form = document.querySelector('form');
const login = form.login;
const password = form.password;

form.addEventListener('submit', event => {
  event.preventDefault();

  const isValid = registeredUsers.some(
    ([u, p]) =>
      u === login.value.trim() && p === password.value.trim()
  );

  if (isValid) {
    alert("Успешный вход!");
    console.log("Успешный вход!");
    form.reset();
    login.focus();
  } else {
    alert("Неверный логин или пароль");
    console.log("Неверный логин или пароль");
  }
});


const togglePassword = document.querySelector('.toggle-password');

togglePassword.addEventListener('click', () => {
  const isPassword = password.type === 'password';
  password.type = isPassword ? 'text' : 'password';

  togglePassword.innerHTML = isPassword
    ? '<i class="fi fi-rr-eye-crossed"></i>'
    : '<i class="fi fi-rr-eye"></i>';
});
