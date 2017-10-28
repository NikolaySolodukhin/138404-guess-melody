import {QuestionTypes} from '../data/game-play.js';

const logoTemplate = `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>`;

const playButtonTemplate = `<span role="button" tabindex="0" class="main-replay js-main-replay">Сыграть ещё раз</span>`;

const getMistakeTemplate = (mistakeNumbers) => {
  return `<div class="main-mistakes">
             ${new Array(mistakeNumbers).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
           </div>`;
};


const getPlayerWrapperTemplate = (questionType, songSrc) => {
  return `<div class="player-wrapper">
             <div class="player">
               <audio src="${songSrc}" ${questionType === QuestionTypes.QUESTION_ARTIST ? `autoplay` : ``} loop></audio>
               <button class="player-control ${questionType === QuestionTypes.QUESTION_ARTIST ? `player-control--pause` : `player-control--play`} js-song-play"></button>
               <div class="player-track">
                 <span class="player-status"></span>
               </div>
             </div>
           </div>`;
};

export {logoTemplate, playButtonTemplate, getMistakeTemplate, getPlayerWrapperTemplate};
