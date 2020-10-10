//setup timer
class Timer{
  constructor(durationInput, startButton, pauseButton){
    this.durationInput =  durationInput;
    this.startButton =  startButton;
    this.pauseButton = pauseButton;

    //setting up event listner
    this.startButton.addEventListnere('click', this.start);
  }

  start(){
    console.log('You started')
  }
}