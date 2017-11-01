import showScreen from '../../templates/show-screen.js';
import initReplay from '../replay.js';
import WinResultView from './win-result-view.js';

class ResultWin {
  constructor(state) {
    this.state = state;
    this.view = new WinResultView(this.state);
  }

  init() {
    showScreen(this.view.element);
    initReplay();
  }
}
export default ResultWin;
