import GetTimer from '../get-timer.js';

class TimerGame {
  constructor(seconds) {
    this.timer = new GetTimer(seconds);
    this.timerInterval = null;
    this.seconds = seconds;
  }

  get value() {
    return this.seconds;
  }

  start() {
    this.timerInterval = setInterval(() => {
      this.seconds = this.timer.tick();

      if (this.seconds === 0) {
        this.stop();
      }

      this.onTick(this.seconds);
    }, 1000);
  }

  stop() {
    clearInterval(this.timerInterval);
  }

  onTick() {}
}

export default TimerGame;
