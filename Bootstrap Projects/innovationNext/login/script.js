// samplelogin

let emailAddress = document.getElementById('inputEmail'),
  passWord = document.getElementById('inputPassword'),
  mainButton = document.getElementById('mainButton');

mainButton.addEventListener('click', function (e) {
  e.preventDefault();
  if (emailAddress.value === 'test@test.com' && passWord.value === 'test') {
    window.location.href = 'page2.html';
  } else if (emailAddress.value === '') {
    window.location.href = 'errorPage.html';
  } else {
    console.log('ERROR')
  }
  e.preventDefault();
}, false);