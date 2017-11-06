import {QuestionTypes} from '../data/game-play.js';
import PlayerAnswer from './player-answer.js';

const testGenreAnswer = (answer, correctAnswer) => {
  if (answer.length !== correctAnswer.length) {
    return false;
  }
  return answer.every((answerItem) => correctAnswer.includes(answerItem));
};

// Добавляем ответ к остальным ответам игрока
const addPlayerAnswer = (state, isAnswerCorrect, answerTime) => {

  // Если ответ неправильный, увеличиваем количество ошибок
  if (!isAnswerCorrect) {
    state.mistakes++;
  }

  state.currentPlayer.answers.push(new PlayerAnswer(isAnswerCorrect, answerTime));
};

const testAnswer = (state, question, answer, answerTime) => {
  let isAnswerCorrect;

  if (question.type === QuestionTypes.QUESTION_ARTIST) {
    isAnswerCorrect = answer === question.correctAnswer;
  }
  // Проверка ответа для игрового экрана с музыкальным жанром
  if (question.type === QuestionTypes.QUESTION_GENRE) {
    isAnswerCorrect = testGenreAnswer(answer, question.correctAnswer);
  }

  addPlayerAnswer(state, isAnswerCorrect, answerTime);
};

export default testAnswer;
