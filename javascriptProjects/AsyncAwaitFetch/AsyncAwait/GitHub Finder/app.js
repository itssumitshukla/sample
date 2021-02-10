//Search input
let searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=>{
  //getinput text
  let userText = e.target.value;

  if(userText !== ''){
    console.log(userText)
  }
})