import {GameSettings, questions, currentPlayer, playersStats, QuestionTypes} from './data/game-play.js';
import showScreen from './templates/show-screen.js';
import initReplay from './screens/replay.js';
import getScreenLevelArtist from './screens/level-artist.js';
import getScreenLevelGenre from './screens/level-genre.js';
import getScreenResultWin from './screens/result-win.js';
import getScreenResultTimeOver from './screens/result-time-over.js';
import getScreenResultAttemptsEnd from './screens/result-attempts-end.js';

// В зависимости от типа вопроса показываем один из двух типов игровых экранов
const checkQuestionType = (state, question, player) => {
  if (question.type === QuestionTypes.QUESTION_ARTIST) {
    showScreen(getScreenLevelArtist(state, question, player));
    return;
  }

  if (question.type === QuestionTypes.QUESTION_GENRE) {
    showScreen(getScreenLevelGenre(state, question, player));
  }
};

const gameControl = (state) => {

  // Если кончилось время
  if (state.time === 0) {
    showScreen(getScreenResultTimeOver());
    initReplay();
    return;
  }

  // Если игрок совершил максимально возможное количество ошибок
  if (state.mistakes > GameSettings.MAX_COUNT_MISTAKES) {
    showScreen(getScreenResultAttemptsEnd());
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
    showScreen(getScreenResultWin(GameSettings.MAX_QUICK_ANSWER_TIME, state, currentPlayer, playersStats));
    initReplay();
  }
};

export default gameControl;