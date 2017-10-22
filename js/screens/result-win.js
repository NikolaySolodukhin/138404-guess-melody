import getPlayerScore from '../count-score.js';
import getPlayerResult from '../game-play-result.js';
import convertSecondsToMinutes from '../convert-sec-to-minutes.js';
import getNode from '../templates/get-node.js';
import {logoTemplate, playButtonTemplate} from '../templates/blocks.js';

const getInfoTemplate = (maxQuickAnswerTime, state, currentPlayer, spentTime, resultsOtherPlayers) => {
  currentPlayer.score = getPlayerScore(currentPlayer.answers, currentPlayer.remainingNotes);

  return `<h2 class="title">Вы настоящий меломан!</h2>
           <div class="main-stat">
             За ${spentTime.minutes} минуты и ${spentTime.seconds} секунд
             <br>
             вы набрали ${currentPlayer.score} баллов
             (${currentPlayer.answers.filter((answer) => answer.time < maxQuickAnswerTime).length} быстрых)
             <br>
             совершив ${state.mistakes} ошибки
           </div>
           <span class="main-comparison">${getPlayerResult(resultsOtherPlayers, currentPlayer)}</span>`;
};

const getScreenResultWinTemplate = (maxQuickAnswerTime, state, currentPlayer, spentTime, resultsOtherPlayers) => {
  return `<section class="main main--result js-main">
             ${logoTemplate}
             ${getInfoTemplate(maxQuickAnswerTime, state, currentPlayer, spentTime, resultsOtherPlayers)}
             ${playButtonTemplate}
           </section>`;
};

const getScreenResultWin = (maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers) => {
  const spentTime = convertSecondsToMinutes(currentPlayer.spentTime);
  const screenTemplate = getNode(getScreenResultWinTemplate(maxQuickAnswerTime, state, currentPlayer, spentTime, resultsOtherPlayers));

  return screenTemplate;
};

export default getScreenResultWin;
