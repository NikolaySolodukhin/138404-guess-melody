import Loader from '../../data/data-loader.js';
import showScreen from '../../templates/show-screen.js';
import initReplay from '../replay.js';
import WinResultView from './win-result-view.js';

class ResultWin {
  init() {
    Loader.loadResults().then((loadedResults) => {
      const state = loadedResults[loadedResults.length - 1];
      const view = new WinResultView(state);

      showScreen(view.element);
      initReplay();
    });
  }
}
export default ResultWin;
