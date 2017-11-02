import {GameSettings, questionsArray, currentPlayer, playersStats, QuestionTypes} from './data/game-play.js';
import getPlayerScore from './count-score.js';
import getPlayerResult from './game-play-result.js';
import Application from './screens/application.js';

// В зависимости от типа вопроса показываем один из двух типов игровых экранов
const checkQuestionType = (state, question) => {
  if (question.type === QuestionTypes.QUESTION_ARTIST) {
    Application.initLevelArtist(state);
    return;
  }

  if (question.type === QuestionTypes.QUESTION_GENRE) {
    Application.initLevelGenre(state);
  }
};

const drawFinalState = (state) => {
  const finalState = {
    timer: state.timer,
    mistakes: state.mistakes,
    currentPlayer: {
      remainingTime: state.time,
      remainingNotes: GameSettings.MAX_COUNT_NOTES - state.mistakes,
      numberQuickAnswers: currentPlayer.answers.filter((answer) => answer.time < GameSettings.MAX_QUICK_ANSWER_TIME).length
    }
  };

  finalState.currentPlayer.spentTime = GameSettings.MAX_GAME_TIME - finalState.currentPlayer.remainingTime;
  finalState.currentPlayer.score = getPlayerScore(currentPlayer.answers, finalState.currentPlayer.remainingNotes);
  finalState.currentPlayer.result = getPlayerResult(playersStats, finalState.currentPlayer);

  return finalState;
};

const gameControl = (state) => {

  // Если игрок совершил максимально возможное количество ошибок
  if (state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    Application.initFailResult(state);
    return;
  }

  // Если игрок в процессе игры
  if (state.level < GameSettings.MAX_COUNT_LEVELS) {
    checkQuestionType(state, questionsArray[state.level]);
    return;
  }

  // Если игрок прошел все уровни
  if (state.level === GameSettings.MAX_COUNT_LEVELS) {
    const finalState = drawFinalState(state);
    Application.initWinResult(finalState);
  }
};

export default gameControl;
