import Loader from '../data/data-loader.js';
import {QuestionTypes} from '../data/game-play.js';
import questions from '../data/questions.js';
import TimerGame from '../data/timer-game.js';
import Welcome from './welcome/welcome.js';
import LevelArtist from './level-artist/level-artist.js';
import LevelGenre from './level-genre/level-genre.js';
import ResultWin from './result/win-result/win-result.js';
import ResultFail from './result/fail-result/fail-result.js';


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
  return window.btoa(encodeURIComponent(JSON.stringify(state)));
};

const loadState = (dataString) => {
  return JSON.parse(decodeURIComponent(window.atob(dataString)));
};

const testTimerGame = (state) => {
  if (state.level === 0) {
    state.timer = new TimerGame(state.time);
    state.timer.start();
  }
};

const getSource = async (src) => {
  const response = await fetch(src);

  return await URL.createObjectURL(await response.blob());
};

const preloadQuestionSongs = async (question) => {
  if (question.type === QuestionTypes.QUESTION_ARTIST) {
    question.song.url = await getSource(question.song.src);

    return;
  }

  question.answerList.forEach(async (answer) => {
    answer.url = await getSource(answer.src);
  });
};

class Application {
  static async init(state) {
    Application._questionsArray = [];
    try {
      const loadedData = await this.loadData();

      this.addHashListener();
      await this.start(state, loadedData);

    } catch (e) {
      Loader.onError(e.message);
    }
  }

  static addHashListener() {
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
    } else {
      this.initWelcome();
    }
  }

  static async loadData() {
    const loadedData = await Loader.loadData();

    return questions(loadedData);
  }

  static async preloadAllSongs(questionsAll) {
    const promises = [];

    questionsAll.forEach((question) => {
      promises.push(preloadQuestionSongs(question));
    });

    await Promise.all(promises);
  }

  static getLevelQuestion(levelNumber) {
    return Application._questionsArray[levelNumber];
  }

  static async start(state, loadedData) {
    Application._questionsArray = loadedData;

    this.initWelcome(state);
    await this.preloadAllSongs(Application._questionsArray);
    document.querySelector(`.js-main-start`).disabled = false;
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

  static async initWinResult(state) {
    state.timer.stop();
    await Loader.saveResults(state);
    location.hash = `${ControllerId.RESULT_WIN}?${saveState(null)}`;
  }

  static initFailResult(state) {
    state.timer.stop();
    location.hash = `${ControllerId.RESULT_FAIL}?${saveState(state)}`;
  }
}


export default Application;
