
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
