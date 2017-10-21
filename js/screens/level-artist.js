import getNode from '../templates/get-node.js';
import gameControl from '../game-control.js';
import testAnswer from '../data/test-answer.js';
import {getStateTemplate, getPlayerWrapperTemplate} from '../templates/blocks.js';

const getTitleTemplate = (text) => {
  return `<h2 class="title main-title">${text}</h2>`;
};

const getAnswerTemplate = (answerNumber, artistName, artistImg) => {
  return `<div class="main-answer-wrapper">
             <input class="main-answer-r js-main-answer-r" type="radio" id="answer-${answerNumber}" name="answer" value="${artistName}"/>
             <label class="main-answer" for="answer-${answerNumber}">
               <img class="main-answer-preview" src="${artistImg}" alt="${artistName}" width="134" height="134">
               ${artistName}
             </label>
           </div>`;
};

const getScreenLevelArtistTemplate = (state, question) => {
  return `<section class="main main--level main--level-artist js-main">
             ${getStateTemplate(state)}
             <div class="main-wrap">
               ${getTitleTemplate(question.title)}
               ${getPlayerWrapperTemplate(question.songSrc)}
               <form class="main-list js-main-list">
                 ${question.answerList.reduce((answers, answer, answerIndex) => answers + getAnswerTemplate(answerIndex + 1, answer.artist, answer.image), ``)}
               </form>
             </div>
           </section>`;
};

const getScreenLevelArtist = (state, question, currentPlayer) => {
  const screenTemplate = getNode(getScreenLevelArtistTemplate(state, question));
  const answersList = screenTemplate.querySelector(`.js-main-list`);

  const onAnswersListClick = (evt) => {
    if (evt.target.closest(`.js-main-answer-r`)) {
      const answer = evt.target.closest(`.js-main-answer-r`).value;
      testAnswer(state, question, answer, currentPlayer);
      gameControl(state);
    }
  };

  answersList.addEventListener(`click`, onAnswersListClick);

  return screenTemplate;
};

export default getScreenLevelArtist;

