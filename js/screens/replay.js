import {initialState, currentPlayer} from '../data/game-play.js';
import TimerGame from '../data/timer-game.js';
import gameControl from '../game-control.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  initialState.timer.stop();

  const onReplay = () => {
    initialState.resetToDefault();
    currentPlayer.resetToDefault();
    initialState.timer = new TimerGame(initialState.time);
    initialState.timer.start();
    gameControl(initialState);
  };

  replay.addEventListener(`click`, onReplay);
};

export default initReplay;
