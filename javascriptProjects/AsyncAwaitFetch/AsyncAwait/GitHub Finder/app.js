//Init Github
let gitHub = new GitHub;

//Search input
let searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e)=>{
  //getinput text
  let userText = e.target.value;

  if(userText !== ''){
    //make Hhtp call
    gitHub.getUser(userText)
      .then(data => {
        console.log(data);
      })
  }
})