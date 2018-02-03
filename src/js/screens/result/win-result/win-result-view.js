import {GameWords} from '../../../data/game-play.js';
import convertSecondsToMinutes from '../../../convert-sec-to-minutes.js';
import getEndOfWords from '../../../get-end-of-words.js';
import getPlayerResultText from '../../../templates/get-player-result-text.js';
import AbstractResultView from '../abstract-result-view.js';

class WinResultView extends AbstractResultView {
  constructor(state, result) {
    super();
    this.state = state;
    this.currentPlayer = this.state.currentPlayer;
    this.result = result;
  }

  getInfoTemplate() {
    const spentTime = convertSecondsToMinutes(this.currentPlayer.spentTime);
    const minutes = `${spentTime.minutes} ${getEndOfWords(Math.trunc(this.currentPlayer.spentTime / 60), GameWords.MINUTES)}`;
    const seconds = `${spentTime.seconds} ${getEndOfWords(this.currentPlayer.spentTime % 60, GameWords.SECONDS)}`;
    const score = `${this.currentPlayer.score} ${getEndOfWords(this.currentPlayer.score, GameWords.SCORE)}`;
    const quickAnswers = `${this.currentPlayer.numberQuickAnswers} ${getEndOfWords(this.currentPlayer.numberQuickAnswers, GameWords.FAST)}`;
    const mistakes = `${this.state.mistakes} ${getEndOfWords(this.state.mistakes, GameWords.MISTAKES)}`;
    const resultText = getPlayerResultText(this.currentPlayer, this.result);

    return `<h2 class="title">Вы настоящий меломан!</h2>
             <div class="main-stat">
              За ${minutes} и ${seconds}
               <br>
              вы набрали ${score} (${quickAnswers})
               <br>
               совершив ${mistakes}
             </div>
             <span class="main-comparison">${resultText}</span>`;
  }

  getReplay() {
    return document.querySelector(`.js-main-replay`);
  }
}

export default WinResultView;
