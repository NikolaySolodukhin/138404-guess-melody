import {GameSettings, questions, currentPlayer, playersStats, QuestionTypes} from './data/game-play.js';
import initReplay from './screens/replay.js';
import Application from './screens/application.js';

// В зависимости от типа вопроса показываем один из двух типов игровых экранов
const checkQuestionType = (state, question, player) => {
  if (question.type === QuestionTypes.QUESTION_ARTIST) {
    Application.initLevelArtist(state, question, player);
    return;
  }

  if (question.type === QuestionTypes.QUESTION_GENRE) {
    Application.initLevelGenre(state, question, player);
  }
};

const gameControl = (state) => {

  // Если игрок совершил максимально возможное количество ошибок
  if (state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    Application.initFailResult(state);
    initReplay();
    return;
  }

  // Если игрок в процессе игры
  if (state.level < GameSettings.MAX_COUNT_LEVELS) {
    checkQuestionType(state, questions[state.level], currentPlayer);
    state.level++;
    return;
  }

  // Если игрок прошел все уровни
  if (state.level === GameSettings.MAX_COUNT_LEVELS) {
    Application.initWinResult(GameSettings.MAX_QUICK_ANSWER_TIME, state.mistakes, currentPlayer, playersStats);
    initReplay();
  }
};

export default gameControl;
