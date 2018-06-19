import Loader from '../../../data/data-loader.js';
import getPlayerResult from '../../../game-play-result.js';
import showScreen from '../../../templates/show-screen.js';
import initReplay from '../../replay.js';
import WinResultView from './win-result-view.js';

const getOtherPlayersResults = loadedResults => {
  const otherPlayers = loadedResults.slice(1, loadedResults.length - 1);

  return otherPlayers.map(item => item.currentPlayer.score);
};

class ResultWin {
  async init() {
    try {
      const loadedResults = await Loader.loadResults();
      const otherPlayersResults = getOtherPlayersResults(loadedResults);
      const state = loadedResults[loadedResults.length - 1];
      const playerResult = getPlayerResult(
        otherPlayersResults,
        state.currentPlayer
      );
      const view = new WinResultView(state, playerResult);

      showScreen(view.element);
      initReplay(view.getReplay());
    } catch (e) {
      Loader.onError(e.message);
    }
  }
}
export default ResultWin;
