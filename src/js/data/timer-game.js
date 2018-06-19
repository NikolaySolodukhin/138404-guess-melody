import GetTimer from '../get-timer.js';
import { GameSettings } from './game-play.js';

const oneSecondInterval = 1000;
class TimerGame {
  constructor(seconds) {
    this._timer = new GetTimer(seconds);
    this._timerInterval = null;
    this._seconds = seconds;
  }

  get value() {
    return this.seconds;
  }

  start() {
    this._timerInterval = setInterval(() => {
      this._seconds = this._timer.tick();

      if (this._seconds === GameSettings.TIME_END) {
        this.stop();
      }

      this.onTick(this._seconds);
    }, oneSecondInterval);
  }

  stop() {
    clearInterval(this._timerInterval);
  }

  onTick() {}
}

export default TimerGame;
