import { GameSettings } from '../data/game-play.js';
import State from '../data/state.js';
import gameControl from '../game-control.js';

const initReplay = replay => {
  const onReplay = () => {
    gameControl(new State(GameSettings.MAX_GAME_TIME));
  };

  replay.addEventListener(`click`, onReplay);
};

export default initReplay;
