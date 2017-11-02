import {questionsArray, currentPlayer} from '../data/game-play.js';
import testAnswer from '../data/test-answer.js';
import showScreen from '../templates/show-screen.js';
import gameControl from '../game-control.js';
import LevelGenreView from './level-genre-view.js';

class LevelGenre {
  constructor(state) {
    this.state = state;
    this.question = questionsArray[this.state.level];
    this.view = new LevelGenreView(this.state.time, this.state.mistakes, this.question);
    this.answerTimerValue = 0;
    this.answerTimer = null;

    this.view.onSendAnswer = (answer) => {
      clearInterval(this.answerTimer);
      testAnswer(this.state, this.question, answer, this.answerTimerValue, currentPlayer);
      gameControl(this.state);
    };
  }

  init() {
    this.answerTimer = setInterval(() => this.answerTimerValue, 1000);
    this.state.timer.onTick = (seconds) => {
      this.state.time = seconds;
      this.view.updateTime(seconds, this.state);
    };
    showScreen(this.view.element);
    this.state.level++;
  }
}

export default LevelGenre;
