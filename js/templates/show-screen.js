const gameContainer = document.querySelector(`.main-js`);

const showScreen = (screen) => {
  while (gameContainer.hasChildNodes()) {
    gameContainer.removeChild(gameContainer.lastChild);
  }
  gameContainer.appendChild(screen);
};

export default showScreen;
