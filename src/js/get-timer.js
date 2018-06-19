import { GameSettings } from './data/game-play.js';
class GetTimer {
  constructor(seconds) {
    this._seconds = seconds;
  }

  tick() {
    if (this._seconds <= GameSettings.TIME_END) {
      return -1;
    }

    return --this._seconds;
  }
}

export default GetTimer;
