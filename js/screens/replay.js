import {initialState, currentPlayer} from '../data/game-play.js';
import showScreen from '../templates/show-screen.js';
import getScreenWelcome from '../screens/welcome.js';

const initReplay = () => {
  const replay = document.querySelector(`.js-main-replay`);

  const onReplay = () => {
    initialState.resetToDefault();
    currentPlayer.resetToDefault();
    showScreen(getScreenWelcome(initialState));
  };

  replay.addEventListener(`click`, onReplay);
};

export default initReplay;
