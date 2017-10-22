import {GameSettings} from './data/game-play.js';

const countScore = (answers) => {
  return answers.reduce((playerScore, answer) => {

    if (!answer.correct) {
      return playerScore - 2;
    }

    if (answer.time <= GameSettings.MAX_QUICK_ANSWER_TIME) {
      return playerScore + 2;
    }

    return playerScore + 1;
  }, 0);
};

const getPlayerScore = (answers, remainingNotes) => {

  if (answers.length < GameSettings.MAX_COUNT_ANSWERS || remainingNotes < 0) {
    return -1;
  }

  return countScore(answers);
};

export default getPlayerScore;
