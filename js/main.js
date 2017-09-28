
const template = document.getElementById(`templates`);
const gameContainer = document.querySelector(`.main`);
const arraySreensGame = Array.from((template.content.querySelectorAll(`.main`)));
let currentIndex = 0;
const InuputKey = {
  RIGHT: 39,
  LEFT: 37
};

const showScreenGame = (screensAll, numberScreen) => {
  while (gameContainer.hasChildNodes()) {
    gameContainer.removeChild(gameContainer.lastChild);
  }
  gameContainer.appendChild(screensAll[numberScreen]);
};

showScreenGame(arraySreensGame, currentIndex);

document.addEventListener(`keydown`, (evt) => {
  if (evt.altKey && evt.keyCode === InuputKey.RIGHT) {
    showScreenGame(arraySreensGame, getRightIndex(++currentIndex));
  } else if (evt.altKey && evt.keyCode === InuputKey.LEFT) {
    showScreenGame(arraySreensGame, getRightIndex(--currentIndex));
  }
  evt.stopPropagation();
});

const getRightIndex = (index) => {
  if (index > arraySreensGame.length - 1) {
    currentIndex = 0;
    return currentIndex;
  } else if (index < 0) {
    currentIndex = arraySreensGame.length - 1;
    return currentIndex;
  }
  return index;
};
