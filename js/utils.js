const gameContainer = document.querySelector(`.main-js`);

const getRandomValue = () => {
  return Math.floor(Math.random() * 3);
};

const showScreen = (screen) => {
  while (gameContainer.hasChildNodes()) {
    gameContainer.removeChild(gameContainer.lastChild);
  }
  gameContainer.appendChild(screen);
};

const getNode = (string) => {
  let node = document.createElement(`section`);
  node.innerHTML = string;

  return node.firstChild;
};

export {getRandomValue, getNode, showScreen};
