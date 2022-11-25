const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');

function onLoginSubmit() {
  const username = loginInput.value;
  console.log(username);
  // input option에 다 넣어줌
  //   if (username === '') {
  //     alert('Please write your name');
  //   } else if (username.length > 15) {
  //     alert('Your name is too long.');
  //   }
}

loginForm.addEventListener('submit', onLoginSubmit);
