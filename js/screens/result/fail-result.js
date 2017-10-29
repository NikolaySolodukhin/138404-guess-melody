import showScreen from '../../templates/show-screen.js';
import FailResultView from './fail-result-view.js';

class ResultFail {
  constructor(state) {
    this.state = state;
    this.view = new FailResultView(this.state);
  }

  init() {
    showScreen(this.view.element);
  }
}

export default ResultFail;
