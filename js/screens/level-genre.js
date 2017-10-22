import getNode from '../templates/get-node.js';
import testAnswer from '../data/test-answer.js';
import gameControl from '../game-control.js';
import {getStateTemplate, getPlayerWrapperTemplate} from '../templates/blocks.js';

const answerSendButtonTemplate = `<button class="genre-answer-send js-genre-answer-send" type="submit" disabled>Ответить</button>`;

const getTitleTemplate = (text) => {
  return `<h2 class="title">${text}</h2>`;
};

const getGenreAnswerTemplate = (answerNumber, songName, songSrc) => {
  return `<div class="genre-answer">
            ${getPlayerWrapperTemplate(songSrc)}
             <input class="js-genre-answer-input" type="checkbox" name="answer" value="${songName}" id="a-${answerNumber}">
             <label class="genre-answer-check" for="a-${answerNumber}"></label>
           </div>`;
};

const getScreenLevelGenreTemplate = (state, question) => {
  return `<section class="main main--level main--level-genre js-main">
             ${getStateTemplate(state)}
             <div class="main-wrap">
               ${getTitleTemplate(question.title)}
                <form class="genre js-genre">
                ${question.answerList.reduce((answers, answer, answerIndex) => answers + getGenreAnswerTemplate(answerIndex + 1, answer.name, answer.src), ``)}
                 ${answerSendButtonTemplate}
                </form>
           </section>`;
};

const getScreenLevelGenre = (state, question, currentPlayer) => {
  const screenTemplate = getNode(getScreenLevelGenreTemplate(state, question));
  const genreForm = screenTemplate.querySelector(`.js-genre`);
  const genreAnswersInputs = Array.from(genreForm.querySelectorAll(`.js-genre-answer-input`));
  const sendButton = genreForm.querySelector(`.js-genre-answer-send`);

  const onGenreFormChange = (evt) => {
    if (evt.target.closest(`.js-genre-answer-input`)) {
      sendButton.disabled = !genreAnswersInputs.some((genreAnswerInput) => genreAnswerInput.checked);
    }
  };


  const onSendButtonClick = (evt) => {
    const genreAnswersCheckedInputs = Array.from(genreForm.querySelectorAll(`.js-genre-answer-input:checked`));
    const answers = genreAnswersCheckedInputs.map((checkedInput) => checkedInput.value);

    evt.preventDefault();

    testAnswer(state, question, answers, currentPlayer);
    gameControl(state);
  };

  genreForm.addEventListener(`change`, onGenreFormChange);

  sendButton.addEventListener(`click`, onSendButtonClick);

  return screenTemplate;
};

export default getScreenLevelGenre;
