import TimerGame from '../data/timer-game.js';
import Welcome from './welcome.js';
import LevelArtist from './level-artist.js';
import LevelGenre from './level-genre.js';
import ResultWin from './result/win-result.js';
import ResultFail from './result/fail-result.js';


const ControllerId = {
  WELCOME: `welcome`,
  LEVEL_ARTIST: `levelArtist`,
  LEVEL_GENRE: `levelGenre`,
  RESULT_WIN: `resultWin`,
  RESULT_FAIL: `resultFail`
};

const routes = {
  [ControllerId.WELCOME]: Welcome,
  [ControllerId.LEVEL_ARTIST]: LevelArtist,
  [ControllerId.LEVEL_GENRE]: LevelGenre,
  [ControllerId.RESULT_WIN]: ResultWin,
  [ControllerId.RESULT_FAIL]: ResultFail
};

const saveState = (state) => {
  return JSON.stringify(state);
};

const loadState = (dataString) => {
  return JSON.parse(dataString);
};

class Application {
  static init() {
    const onHashChange = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };

    window.addEventListener(`hashchange`, onHashChange);
    onHashChange();
  }

  static changeHash(id, data) {
    const Controller = routes[id];

    if (Controller) {
      new Controller(loadState(data)).init();
    }
  }

  static initWelcome(state) {
    location.hash = `${ControllerId.WELCOME}?${saveState(state)}`;
  }

  static initLevelArtist(state) {
    if (state.level === 0) {
      state.timer = new TimerGame(state.time);
      state.timer.start();
    }
    location.hash = `${ControllerId.LEVEL_ARTIST}?${saveState(state)}`;
    new LevelArtist(state).init();
  }

  static initLevelGenre(state) {
    location.hash = `${ControllerId.LEVEL_GENRE}?${saveState(state)}`;
    new LevelGenre(state).init();
  }

  static initWinResult(state) {
    state.timer.stop();
    location.hash = `${ControllerId.RESULT_WIN}?${saveState(state)}`;
  }

  static initFailResult(state) {
    state.timer.stop();
    location.hash = `${ControllerId.RESULT_FAIL}?${saveState(state)}`;
  }
}

Application.init();

export default Application;
