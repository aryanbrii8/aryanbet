const password = 'AryanHegzy';
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const checkPassword = function () {
  if (input.value == password) {
    alert('خوش آمدید');
    open('../pages/welcome.html');
  } else {
    alert('رمز اشتباه است');
  }
};
btn.addEventListener('click', checkPassword);
