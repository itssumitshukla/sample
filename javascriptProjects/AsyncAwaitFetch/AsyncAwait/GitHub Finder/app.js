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
              } else {
                //Show profile
              }
              ui.showProfile(data.profile);
                console.log(data);
            })
    } else {
      //Clear profile

    }
});  