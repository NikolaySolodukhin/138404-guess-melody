import testAnswer from '../data/test-answer.js';
import gameControl from '../game-control.js';
import LevelArtistView from './level-artist-view.js';

const getScreenLevelArtist = (state, question, currentPlayer) => {
  const screenLevelArtist = new LevelArtistView(state.mistakes, question);

  let answerTimerValue = 0;

  const answerTimer = setInterval(() => answerTimerValue++, 1000);

  state.timer.onTick = (seconds) => {
    screenLevelArtist.updateTime(seconds, state);
  };

  screenLevelArtist.onAnswersListClick = (evt) => {
    if (evt.target.closest(`.js-main-answer-r`)) {
      const answer = evt.target.closest(`.js-main-answer-r`).value;

      clearInterval(answerTimer);
      testAnswer(state, question, answer, answerTimerValue, currentPlayer);
      gameControl(state);
    }
  };

  return screenLevelArtist.element;
};

export default getScreenLevelArtist;
