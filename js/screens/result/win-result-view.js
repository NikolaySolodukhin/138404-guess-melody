import {GameWords} from '../../data/game-play.js';
import convertSecondsToMinutes from '../../convert-sec-to-minutes.js';
import getEndOfWords from '../../get-end-of-words.js';
import AbstractResultView from './abstract-result-view.js';

class WinResultView extends AbstractResultView {
  constructor(state) {
    super();
    this.state = state;
    this.currentPlayer = this.state.currentPlayer;
  }

  getInfoTemplate() {
    const spentTime = convertSecondsToMinutes(this.currentPlayer.spentTime);

    return `<h2 class="title">Вы настоящий меломан!</h2>
             <div class="main-stat">
               За
               ${spentTime.minutes} ${getEndOfWords(Math.trunc(this.currentPlayer.spentTime / 60), GameWords.MINUTES)}
               и
               ${spentTime.seconds} ${getEndOfWords(this.currentPlayer.spentTime % 60, GameWords.SECONDS)}
               <br>
               вы набрали ${this.currentPlayer.score} ${getEndOfWords(this.currentPlayer.score, GameWords.SCORE)}
               (${this.currentPlayer.numberQuickAnswers} ${getEndOfWords(this.currentPlayer.numberQuickAnswers, GameWords.FAST)})
               <br>
               совершив ${this.state.mistakes} ${getEndOfWords(this.state.mistakes, GameWords.MISTAKES)}
             </div>
             <span class="main-comparison">${this.currentPlayer.result}</span>`;
  }
}

export default WinResultView;
