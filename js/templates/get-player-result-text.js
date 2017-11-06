import {GameSettings} from '../data/game-play.js';
const getPlayerResultText = (currentPlayer, result) => {

  // Если у игрока кончилось время
  if (currentPlayer.remainingTime === GameSettings.TIME_END) {
    return `Время вышло! Вы не успели отгадать все мелодии.`;
  }

  // Если у игрока кончились ноты
  if (currentPlayer.remainingNotes < 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  // Если игрок успешно закончил игру
  return `Вы заняли ${result.currentPlayerPlace}-е место из ${result.playersStats.length} игроков. Это лучше чем у ${result.defeatedPlayers}% игроков.`;
};

export default getPlayerResultText;
