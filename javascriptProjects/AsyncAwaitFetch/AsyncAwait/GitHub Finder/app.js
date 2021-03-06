// Init github
const github = new GitHub();
//INIT UI
const ui = new UI();
 
// search Input 
const searchUser = document.getElementById("searchUser");
 
// Search input event Listener
searchUser.addEventListener("keyup", (e) => {
    // get Input value
    const userText = e.target.value
 
    if (userText !== "") {
        // Make http call
        github.getUser(userText)
            .then(data => {
              if(data.profile.message === 'Not Found'){
                //Show Alert
                ui.showAlert('User not found', 'alert alert-danger');
              } else {
                //Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                console.log(data);
              }
            })
    } else {
      //Clear profile
      ui.clearProfile();
    }
});  