import showScreen from '../../templates/show-screen.js';
import WinResultView from './win-result-view.js';

class ResultWin {
  constructor(maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers) {
    this.maxQuickAnswerTime = maxQuickAnswerTime;
    this.state = state;
    this.currentPlayer = currentPlayer;
    this.resultsOtherPlayers = resultsOtherPlayers;
    this.view = new WinResultView(this.maxQuickAnswerTime, this.state, this.currentPlayer, this.resultsOtherPlayers);
  }

  init() {
    showScreen(this.view.element);
  }
}
export default ResultWin;
