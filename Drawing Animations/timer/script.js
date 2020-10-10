//setup timer
class Timer{
  constructor(durationInput, startButton, pauseButton){
    this.durationInput =  durationInput;
    this.startButton =  startButton;
    this.pauseButton = pauseButton;

    //setting up event listner
    this.startButton.addEventListener('click', this.start);
  }

  start(){
    console.log('You started')
  }
}

//eventlistner from index
let durationInput = document.querySelector("#duration");
let startButton = document.querySelector("#start");
let pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
