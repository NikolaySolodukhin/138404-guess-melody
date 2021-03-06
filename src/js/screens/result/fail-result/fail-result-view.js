import AbstractResultView from '../abstract-result-view.js';

class FailResultView extends AbstractResultView {
  constructor(state) {
    super();
    this._time = state.time;
  }

  getInfoTemplate() {
    if (this._time === 0) {
      return `<h2 class="title">Увы и ах!</h2>
               <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;
    }
    return `<h2 class="title">Какая жалость!</h2>
             <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;
  }

  getReplay() {
    return document.querySelector(`.js-main-replay`);
  }
}

export default FailResultView;
