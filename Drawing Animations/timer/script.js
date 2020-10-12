

//setup timer
class Timer{
  constructor(durationInput, startButton, pauseButton, callbacks){
    this.durationInput =  durationInput;
    this.startButton =  startButton;
    this.pauseButton = pauseButton;

    if(callbacks){
      this.onStart = callbacks.onStart;
      this.onComplete = callbacks.onComplete;
      this.onTick = callbacks.onTick;
    }

    //setting up event listner
    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);

  }

  start = () => {
    if(this.onStart){
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, 1000);
    
  };

  pause = () =>{
    clearInterval(this.interval);
  }

  tick = () => {
    if(this.timeRemaining <= 0){
      this.pause();
      if(this.onComplete){
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      if(this.onTick) {
        this.onTick();
      }
    };
  };

  get timeRemaining(){
      return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
      this.durationInput.value = time;
    }
}

//eventlistner from index
let durationInput = document.querySelector("#duration");
let startButton = document.querySelector("#start");
let pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(){
    console.log('Timer started');
  },
  onTick(){
    console.log('Timer just ticked down');
  },
  onComplete(){
    console.log('Timer is completed');
  }
});
