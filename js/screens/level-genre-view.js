import AbstractView from '../abstract-view.js';
import TimerView from '../timer-view.js';
import {getMistakeTemplate, getPlayerWrapperTemplate} from '../templates/blocks.js';

const answerSendButtonTemplate = `<button class="genre-answer-send js-genre-answer-send" type="submit" disabled>Ответить</button>`;

const getTitleTemplate = (text) => {
  return `<h2 class="title">${text}</h2>`;
};

const getGenreAnswerTemplate = (answerNumber, questionType, songSrc) => {
  return `<div class="genre-answer">
             ${getPlayerWrapperTemplate(questionType, songSrc)}
             <input class="js-genre-answer-input" type="checkbox" name="answer" value="${songSrc}" id="a-${answerNumber}">
             <label class="genre-answer-check" for="a-${answerNumber}"></label>
           </div>`;
};

const getScreenLevelGenreTemplate = (timerTemplate, mistakesNumber, question) => {
  return `<section class="main main--level main--level-genre js-main">
             ${timerTemplate}
             ${getMistakeTemplate(mistakesNumber)}
             <div class="main-wrap">
               ${getTitleTemplate(question.title)}
                <form class="genre js-genre">
                 ${question.answerList.reduce((answers, answer, answerIndex) => answers + getGenreAnswerTemplate(answerIndex + 1, question.type, answer), ``)}
                 ${answerSendButtonTemplate}
                </form>
             </div>
           </section>`;
};

class LevelGenreView extends AbstractView {
  constructor(time, mistakesNumber, question) {
    super();
    this.mistakesNumber = mistakesNumber;
    this.question = question;
    this.timerView = new TimerView(time);
  }

  get template() {
    return getScreenLevelGenreTemplate(this.timerView.template, this.mistakesNumber, this.question);
  }

  bind() {
    const genreForm = this._element.querySelector(`.js-genre`);
    const genrePlayButtons = Array.from(genreForm.querySelectorAll(`.js-song-play`));
    const genreAnswersInputs = Array.from(genreForm.querySelectorAll(`.js-genre-answer-input`));
    const sendButton = genreForm.querySelector(`.js-genre-answer-send`);

    genreForm.addEventListener(`click`, (evt) => this._onGenreFormClick(evt, genrePlayButtons));

    genreForm.addEventListener(`change`, (evt) => this._onGenreFormChange(evt, genreAnswersInputs, sendButton));

    sendButton.addEventListener(`click`, (evt) => this._onSendButtonClick(evt, genreForm));
  }

  updateTime(seconds, state) {
    this.timerView.updateTime(seconds, state);
  }

  _onGenreFormClick(evt, playButtons) {
    if (evt.target.closest(`.js-song-play`)) {
      const currentPlayButton = evt.target;
      const otherPlayButtons = playButtons.slice().filter((playButton) => playButton !== currentPlayButton);

      evt.preventDefault();

      otherPlayButtons.forEach((playButton) => {
        playButton.classList.remove(`player-control--pause`);
        playButton.previousElementSibling.pause();
      });

      currentPlayButton.classList.toggle(`player-control--pause`);

      if (currentPlayButton.classList.contains(`player-control--pause`)) {
        currentPlayButton.previousElementSibling.play();
        return;
      }

      currentPlayButton.previousElementSibling.pause();
    }
  }

  _onGenreFormChange(evt, checkboxes, button) {
    if (evt.target.closest(`.js-genre-answer-input`)) {
      button.disabled = !checkboxes.some((checkbox) => checkbox.checked);
    }
  }

  _onSendButtonClick(evt, form) {
    const genreAnswersCheckedInputs = Array.from(form.querySelectorAll(`.js-genre-answer-input:checked`));
    const answers = genreAnswersCheckedInputs.map((checkedInput) => checkedInput.value);

    evt.preventDefault();
    this.onSendAnswer(answers);
  }

  onSendAnswer() {}
}

export default LevelGenreView;
