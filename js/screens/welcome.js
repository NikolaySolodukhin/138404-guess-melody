import TimerGame from '../data/timer-game.js';
import showScreen from '../templates/show-screen.js';
import gameControl from '../game-control.js';
import WelcomeView from './welcome-view.js';

class Welcome {
  constructor(state) {
    this.state = state;
    this.view = new WelcomeView();
    this.view.onStartButtonClick = () => {
      this._onStartGame();
    };
  }

  init() {
    showScreen(this.view.element);
  }

  _onStartGame() {
    this.state.timer = new TimerGame(this.state.time);
    this.state.timer.start();
    gameControl(this.state);
  }
}

export default Welcome;
