import TimerGame from '../data/timer-game.js';
import gameControl from '../game-control.js';
import WelcomeView from './welcome-view.js';

const getScreenWelcome = (state) => {
  const screenWelcome = new WelcomeView();

  screenWelcome.onStartButtonClick = () => {

    state.timer = new TimerGame(state.time);
    state.timer.start();
    gameControl(state);
  };

  return screenWelcome.element;
};

export default getScreenWelcome;
