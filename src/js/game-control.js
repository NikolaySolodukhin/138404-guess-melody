import { GameSettings, QuestionTypes } from './data/game-play.js';
import getPlayerScore from './count-score.js';
import Application from './screens/application.js';

// В зависимости от типа вопроса показываем один из двух типов игровых экранов
const showLevel = (state, question) => {
  if (question.type === QuestionTypes.QUESTION_ARTIST) {
    Application.initLevelArtist(state);
    return;
  }

  if (question.type === QuestionTypes.QUESTION_GENRE) {
    Application.initLevelGenre(state);
  }
};

const drawFinalState = state => {
  const numberQuickAnswers = state.currentPlayer.answers.filter(
    answer => answer.time < GameSettings.MAX_QUICK_ANSWER_TIME
  ).length;

  state.currentPlayer.remainingTime = state.time;
  state.currentPlayer.remainingNotes =
    GameSettings.MAX_COUNT_NOTES - state.mistakes;
  state.currentPlayer.numberQuickAnswers = numberQuickAnswers;
  state.currentPlayer.spentTime =
    GameSettings.MAX_GAME_TIME - state.currentPlayer.remainingTime;
  state.currentPlayer.score = getPlayerScore(
    state.currentPlayer.answers,
    state.currentPlayer.remainingNotes
  );

  return state;
};

const gameControl = state => {
  // Если игрок совершил максимально возможное количество ошибок
  if (state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    Application.initFailResult(state);
    return;
  }

  // Если игрок в процессе игры
  if (state.level < GameSettings.MAX_COUNT_LEVELS) {
    showLevel(state, Application.getLevelQuestion(state.level));
    return;
  }

  // Если игрок прошел все уровни
  if (state.level === GameSettings.MAX_COUNT_LEVELS) {
    const finalState = drawFinalState(state);
    Application.initWinResult(finalState);
  }
};

export default gameControl;
