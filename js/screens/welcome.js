import getNode from '../templates/get-node.js';
import gameControl from '../game-control.js';
import {logoTemplate} from '../templates/blocks.js';

const playButtonTemplate = `<button class="main-play js-main-play">Начать игру</button>`;

const infoTemplate = `<h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
        Правила просты — за 5 минут ответить на все вопросы.<br>
        Ошибиться можно 3 раза.<br>
          Удачи!
     </p>`;

const screenWelcomeTemplate = `<section class="main main--welcome js-main">
          ${logoTemplate}
          ${playButtonTemplate}
          ${infoTemplate}
        </section>`;

const getScreenWelcome = (state) => {
  const screenTemplate = getNode(screenWelcomeTemplate);
  const playButton = screenTemplate.querySelector(`.js-main-play`);

  const onPlayButtonClick = () => {
    gameControl(state);
  };

  playButton.addEventListener(`click`, onPlayButtonClick);

  return screenTemplate;
};

export default getScreenWelcome;
