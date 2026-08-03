export class Timer {
  constructor(onComplete, onTick) {
    this.duration = 0;
    this.remaining = 0;
    this.intervalId = null;
    this.onComplete = onComplete;
    this.onTick = onTick;
    this.isRunning = false;
  }
  //Start timer with duration in minutes
  start(minutes) {
    if (minutes <= 0) {
      this.stop();
      return;
    }

    this.duration = minutes * 60; //convert to seconds
    this.remaining = this.duration;
    this.isRunning = true;

    //Clear any existing interval
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    //Update Display
    this.updateDisplay();

    //Start countdown
    this.intervalId = setInterval(() => {
      this.remaining--;
      this.updateDisplay();
      if (this.remaining <= 0) {
        this.onComplete();
      }
    }, 1000);
  }

  //Stop Timer
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.duration = 0;
    this.remaining = 0;
    this.isRunning = false;
    this.updateDisplay();
  }

  //Timer completed
  complte() {
    this.stop();
    if (this.onComplete) {
      this.onComplete();
    }
  }
}
