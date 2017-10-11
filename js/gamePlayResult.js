const gamePlayResult = ({
  globalScores,
  playerResult
}) => {


  if (playerResult.livesLeft === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  } else if (playerResult.timeLeft === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  const updatedAllScores = [...globalScores, playerResult.score];

  updatedAllScores.sort((a, b) => {
    return a - b;
  });

  const currentPlayerIndex = updatedAllScores.indexOf(playerResult.score);
  const currentPlayerPlace = updatedAllScores.length - currentPlayerIndex;
  const defeatedPlayers = Math.round((currentPlayerIndex / updatedAllScores.length) * 100);

  return `Вы заняли ${currentPlayerPlace}-е место из ${updatedAllScores.length} игроков. Это лучше чем у ${defeatedPlayers}% игроков.`;
};

export default gamePlayResult;
