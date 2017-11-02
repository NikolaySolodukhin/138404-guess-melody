import Loader from '../data/data-loader.js';
import questions from '../data/questions.js';
import {allDataQuestions} from '../data/game-play.js';
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

const testTimerGame = (state) => {
  if (state.level === 0) {
    state.timer = new TimerGame(state.time);
    state.timer.start();
  }
};

class Application {
  static init(loadedData) {
    allDataQuestions(loadedData);

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
    testTimerGame(state);
    new LevelArtist(state).init();
  }

  static initLevelGenre(state) {
    testTimerGame(state);
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

Loader.loadData().
    then((loadedData) => questions(loadedData)).
    then((adaptedLoadedData) => Application.init(adaptedLoadedData)).
    catch(Loader.onError);

export default Application;
