//setup timer
class Timer{
  constructor(durationInput, startButton, pauseButton){
    this.durationInput =  durationInput;
    this.startButton =  startButton;
    this.pauseButton = pauseButton;

    //setting up event listner
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);

  }

  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
    
  };

  pause = () =>{
    clearInterval(this.interval);
  }

  tick = ()=>{
    let timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining-1;
    console.log('TICK')
  }
}

//eventlistner from index
let durationInput = document.querySelector("#duration");
let startButton = document.querySelector("#start");
let pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
