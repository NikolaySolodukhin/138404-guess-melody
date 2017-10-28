import {GameWords} from '../../data/game-play.js';
import getPlayerScore from '../../count-score.js';
import getPlayerResult from '../../game-play-result.js';
import convertSecondsToMinutes from '../../convert-sec-to-minutes.js';
import getEndOfWords from '../../get-end-of-words.js';
import AbstractResultView from './abstract-result-view.js';

class WinResultView extends AbstractResultView {
  constructor(maxQuickAnswerTime, mistakeNumbers, currentPlayer, resultsOtherPlayers) {
    super();
    this.maxQuickAnswerTime = maxQuickAnswerTime;
    this.mistakesNumber = mistakeNumbers;
    this.currentPlayer = currentPlayer;
    this.resultsOtherPlayers = resultsOtherPlayers;
  }

  getInfoTemplate() {
    const spentTime = convertSecondsToMinutes(this.currentPlayer.spentTime);
    const numberQuickAnswers = this.currentPlayer.answers.filter((answer) => answer.time < this.maxQuickAnswerTime).length;

    this.currentPlayer.score = getPlayerScore(this.currentPlayer.answers, this.currentPlayer.remainingNotes);

    return `<h2 class="title">Вы настоящий меломан!</h2>
             <div class="main-stat">
               За
               ${spentTime.minutes} ${getEndOfWords(Math.trunc(this.currentPlayer.spentTime / 60), GameWords.MINUTES)}
               и
               ${spentTime.seconds} ${getEndOfWords(this.currentPlayer.spentTime % 60, GameWords.SECONDS)}
               <br>
               вы набрали ${this.currentPlayer.score} ${getEndOfWords(this.currentPlayer.score, GameWords.SCORE)}
               (${numberQuickAnswers} ${getEndOfWords(numberQuickAnswers, GameWords.FAST)})
               <br>
               совершив ${this.mistakesNumber} ${getEndOfWords(this.mistakesNumber, GameWords.MISTAKES)}
             </div>
             <span class="main-comparison">${getPlayerResult(this.resultsOtherPlayers, this.currentPlayer)}</span>`;
  }
}

export default WinResultView;
