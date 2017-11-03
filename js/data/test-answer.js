import {QuestionTypes} from '../data/game-play.js';
// Проверяем элемент в массиве
const checkArrayHasElement = (element, array) => {
  const elementIndex = array.indexOf(element);

  // Если элемент в массиве есть, возвращаем true, если нет, возвращаем false
  return elementIndex > -1;
};

const testGenreAnswer = (answer, correctAnswer) => {
  if (answer.length === correctAnswer.length) {
    return answer.every((answerItem) => checkArrayHasElement(answerItem, correctAnswer));
  }
  return false;
};

// Добавляем ответ к остальным ответам игрока
const addPlayerAnswer = (state, currentPlayer, answerBoolean, answerTime) => {

  // Если ответ неправильный, увеличиваем количество ошибок
  if (!answerBoolean) {
    state.mistakes++;
  }

  currentPlayer.answers.push({
    correct: answerBoolean,
    time: answerTime
  });
};

const testAnswer = (state, question, answer, answerTime, currentPlayer) => {
  let answerBoolean;

  // Проверка ответа для игрового экрана с выбором исполнителя
  if (question.type === QuestionTypes.QUESTION_ARTIST) {

    // Узнаем правильный ответ или нет
    answerBoolean = answer === question.correctAnswer;

    addPlayerAnswer(state, currentPlayer, answerBoolean, answerTime);

    return;
  }

  // Проверка ответа для игрового экрана с музыкальным жанром
  if (question.type === QuestionTypes.QUESTION_GENRE) {

    // Узнаем правильный ответ или нет
    answerBoolean = testGenreAnswer(answer, question.correctAnswer);

    addPlayerAnswer(state, currentPlayer, answerBoolean, answerTime);
  }
};

export default testAnswer;
