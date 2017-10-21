import getNode from '../templates/get-node.js';
import {logoTemplate, playButtonTemplate} from '../templates/blocks.js';

const infoTemplate = `<h2 class="title">Увы и ах!</h2>
      <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>`;

const screenResultTimeOverTemplate = `<section class="main main--result js-main">
     ${logoTemplate}
     ${infoTemplate}
     ${playButtonTemplate}
   </section>`;

const getScreenResultTimeOver = () => {
  const screenTemplate = getNode(screenResultTimeOverTemplate);

  return screenTemplate;
};

export default getScreenResultTimeOver;
