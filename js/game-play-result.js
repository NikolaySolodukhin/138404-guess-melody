const getPlayerResult = (resultsOtherPlayers, resultCurrentPlayer) => {

  if (resultCurrentPlayer.remainingTime === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии.`;
  }

  if (resultCurrentPlayer.remainingNotes < 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  const playersStats = resultsOtherPlayers.slice();

  playersStats.push(resultCurrentPlayer.score);

  const currentPlayerIndex = playersStats.filter((playerStats) => playerStats < resultCurrentPlayer.score).length;

  const currentPlayerPlace = playersStats.length - currentPlayerIndex;

  const defeatedPlayers = currentPlayerIndex / playersStats.length * 100;

  return `Вы заняли ${currentPlayerPlace}-е место из ${playersStats.length} игроков. Это лучше чем у ${defeatedPlayers}% игроков.`;
};

export default getPlayerResult;
