import Welcome from './welcome.js';
import LevelArtist from './level-artist.js';
import LevelGenre from './level-genre.js';
import ResultWin from './result/win-result.js';
import ResultFail from './result/fail-result.js';

class Application {
  static initWelcome(state) {
    new Welcome(state).init();
  }

  static initLevelArtist(state, question, currentPlayer) {
    new LevelArtist(state, question, currentPlayer).init();
  }

  static initLevelGenre(state, question, currentPlayer) {
    new LevelGenre(state, question, currentPlayer).init();
  }

  static initWinResult(maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers) {
    new ResultWin(maxQuickAnswerTime, state, currentPlayer, resultsOtherPlayers).init();
  }

  static initFailResult(state) {
    new ResultFail(state).init();
  }
}

export default Application;
