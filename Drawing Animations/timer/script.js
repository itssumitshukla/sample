
//eventlistner from index
let durationInput = document.querySelector("#duration");
let startButton = document.querySelector("#start");
let pauseButton = document.querySelector("#pause");
let circle = document.querySelector('circle');

let perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration){
    duration = totalDuration;
    console.log('Timer started');
  },
  onTick(timeRemaining){
    circle.setAttribute('stroke-dashoffset', 
    perimeter * timeRemaining / duration - perimeter
    );
  },
  onComplete(){
    console.log('Timer is completed');
  }
});
