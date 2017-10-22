import getNode from '../templates/get-node.js';
import {logoTemplate, playButtonTemplate} from '../templates/blocks.js';

const infoTemplate = `<h2 class="title">Какая жалость!</h2>
     <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>`;

const screenResultEndTemplate = `<section class="main main--result js-main">
    ${logoTemplate}
    ${infoTemplate}
    ${playButtonTemplate}
  </section >`;

const getScreenResultAttemptsEnd = () => {
  const screenTemplate = getNode(screenResultEndTemplate);

  return screenTemplate;
};

export default getScreenResultAttemptsEnd;
