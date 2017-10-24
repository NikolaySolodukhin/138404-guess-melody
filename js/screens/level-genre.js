import testAnswer from '../data/test-answer.js';
import gameControl from '../game-control.js';
import LevelGenreView from './level-genre-view.js';

const getScreenLevelGenre = (state, question, currentPlayer) => {
  const screenLevelGenre = new LevelGenreView(state.mistakes, question);

  let answerTimerValue = 0;

  const answerTimer = setInterval(() => answerTimerValue++, 1000);

  state.timer.onTick = (seconds) => {
    screenLevelGenre.updateTime(seconds, state);
  };


  screenLevelGenre.onSendAnswer = (answer) => {
    clearInterval(answerTimer);
    testAnswer(state, question, answer, answerTimerValue, currentPlayer);
    gameControl(state);
  };

  return screenLevelGenre.element;
};

export default getScreenLevelGenre;
