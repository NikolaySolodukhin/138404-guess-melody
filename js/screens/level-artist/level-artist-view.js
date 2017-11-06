import AbstractView from '../../abstract-view.js';
import TimerView from '../../timer-view.js';
import {getMistakeTemplate, getPlayerWrapperTemplate} from '../../templates/blocks.js';

const getTitleTemplate = (text) => {
  return `<h2 class="title main-title">${text}</h2>`;
};

const getAnswerWrapperTemplate = (answerNumber, artistName, artistImage) => {
  return `<div class="main-answer-wrapper">
             <input class="main-answer-r js-main-answer-r" type="radio" id="answer-${answerNumber}" name="answer" value="${artistName}"/>
             <label class="main-answer" for="answer-${answerNumber}">
               <img class="main-answer-preview" src="${artistImage}" alt="${artistName}" width="134" height="134">
               ${artistName}
             </label>
           </div>`;
};

const getScreenLevelArtistTemplate = (timerTemplate, mistakesNumber, question) => {
  const answersTemplate = question.answerList
      .map((answer, answerIndex) => getAnswerWrapperTemplate(answerIndex++, answer.artist, answer.image))
      .join(``);
  return `<section class="main main--level main--level-artist js-main">
             ${timerTemplate}
             ${getMistakeTemplate(mistakesNumber)}
             <div class="main-wrap">
               ${getTitleTemplate(question.title)}
              ${getPlayerWrapperTemplate(question.type, question.song.url)}
              <form class="main-list js-main-list">${answersTemplate}</form>
             </div>
           </section>`;
};

class LevelArtistView extends AbstractView {
  constructor(time, mistakesNumber, question) {
    super();
    this.mistakesNumber = mistakesNumber;
    this.question = question;
    this.timerView = new TimerView(time);
  }

  get template() {
    return getScreenLevelArtistTemplate(this.timerView.template, this.mistakesNumber, this.question);
  }

  bind() {
    const playButton = this._element.querySelector(`.js-song-play`);
    const answersList = this._element.querySelector(`.js-main-list`);

    playButton.addEventListener(`click`, () => this._playButtonClick(playButton));

    answersList.addEventListener(`click`, (evt) => this._answersListClick(evt));
  }

  updateTime(seconds, state) {
    this.timerView.updateTime(seconds, state);
  }

  _playButtonClick(playButton) {
    playButton.classList.toggle(`player-control--pause`);

    if (playButton.classList.contains(`player-control--pause`)) {
      playButton.previousElementSibling.play();
      return;
    }

    playButton.previousElementSibling.pause();
  }

  _answersListClick(evt) {
    if (evt.target.closest(`.js-main-answer-r`)) {
      const answer = evt.target.closest(`.js-main-answer-r`).value;

      this.sendAnswer(answer);
    }
  }

  sendAnswer() {}
}

export default LevelArtistView;
