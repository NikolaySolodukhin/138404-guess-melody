const FAST_ANSWER_TIME = 29;
const FAST_ANSWER_POINTS = 2;
const SLOW_ANSWER_POINTS = 1;
const WRONG_ANSWER_POINTS = -2;
const MAX_ANSWERS = 10;
const MAX_MISTAKE = 4;

const countScore = ({answersList, livesLeft}) => {
  if (answersList.length < MAX_ANSWERS || livesLeft < 0) {
    return -1;
  }

  let totalScores = 0;
  let totalIncorrectAnswer = 0;

  answersList.forEach((answer) => {
    if (answer.correct && answer.time <= FAST_ANSWER_TIME) {
      totalScores = totalScores + FAST_ANSWER_POINTS;
    } else if (answer.correct && answer.time > FAST_ANSWER_TIME) {
      totalScores = totalScores + SLOW_ANSWER_POINTS;
    } else if (!answer.correct) {
      totalScores = totalScores + WRONG_ANSWER_POINTS;
      totalIncorrectAnswer += 1;
    }
  });

  if (totalScores < 0 || totalIncorrectAnswer >= MAX_MISTAKE) {
    totalScores = 0;
  }

  return totalScores;
};

export default countScore;
