import { GameSettings } from './data/game-play.js';

const countScore = answers => {
  return answers.reduce((playerScore, answer) => {
    if (!answer.correct) {
      return playerScore - GameSettings.QUICK_ANSWER_POINT;
    }

    if (answer.time <= GameSettings.MAX_QUICK_ANSWER_TIME) {
      return playerScore + GameSettings.QUICK_ANSWER_POINT;
    }

    return playerScore + GameSettings.SLOW_ANSWER_POINT;
  }, 0);
};

const getPlayerScore = (answers, remainingNotes) => {
  if (answers.length < GameSettings.MAX_COUNT_ANSWERS || remainingNotes < 0) {
    return -1;
  }

  return countScore(answers);
};

export default getPlayerScore;
