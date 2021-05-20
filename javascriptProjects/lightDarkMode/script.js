const toggleSwitch = document.querySelector('input[type="checkbox"]');

//Switch Theme Dynamically
function switchTheme(e){
  if(e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

//Event listner
toggleSwitch.addEventListener('change', switchTheme)