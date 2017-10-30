import {initialState, currentPlayer} from '../data/game-play.js';
import gameControl from '../game-control.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  const onReplay = () => {
    initialState.resetToDefault();
    currentPlayer.resetToDefault();
    gameControl(initialState);
  };

  replay.addEventListener(`click`, onReplay);
};

export default initReplay;
