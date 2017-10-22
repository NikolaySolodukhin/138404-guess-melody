import assert from 'assert';
import gamePlayerResult from './game-play-result.js';

describe(`gamePlayerResult function`, () => {
  it(`should return "У вас закончились все попытки. Ничего, повезёт в следующий раз!" message if player has no lives left`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, gamePlayerResult(testResult1.globalScores, testResult1.playerResult));
  });
  it(`should return "Время вышло! Вы не успели отгадать все мелодии" message if player has no time left`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии.`, gamePlayerResult(testResult2.globalScores, testResult2.playerResult));
  });
  it(`should return "Вы заняли 1-е место из 10 игроков. Это лучше чем у 90% игроков." message if player got 1st place in global statistic`, () => {
    assert.equal(`Вы заняли 1-е место из 10 игроков. Это лучше чем у 90% игроков.`, gamePlayerResult(testResult3.globalScores, testResult3.playerResult));
  });
  it(`should return "Вы заняли 10-е место из 10 игроков. Это лучше чем у 0% игроков." message if player got 10th place in global statistic`, () => {
    assert.equal(`Вы заняли 10-е место из 10 игроков. Это лучше чем у 0% игроков.`, gamePlayerResult(testResult4.globalScores, testResult4.playerResult));
  });
  it(`should return "Вы заняли 5-е место из 10 игроков. Это лучше чем у 50% игроков." message if player got 5th place in global statistic`, () => {
    assert.equal(`Вы заняли 5-е место из 10 игроков. Это лучше чем у 50% игроков.`, gamePlayerResult(testResult5.globalScores, testResult5.playerResult));
  });
});

const testResult1 = {
  globalScores: [11, 2, 3, 12, 5, 7, 8, 3, 4],
  playerResult: {
    score: 10,
    remainingNotes: -1,
    remainingTime: 10
  }
};
const testResult2 = {
  globalScores: [11, 2, 3, 12, 5, 7, 8, 3, 4],
  playerResult: {
    score: 10,
    remainingNotes: 3,
    remainingTime: 0
  }
};
const testResult3 = {
  globalScores: [11, 2, 3, 12, 5, 7, 8, 3, 4],
  playerResult: {
    score: 13,
    remainingNotes: 3,
    remainingTime: 10
  }
};
const testResult4 = {
  globalScores: [11, 2, 3, 12, 5, 7, 8, 3, 4],
  playerResult: {
    score: 1,
    remainingNotes: 3,
    remainingTime: 10
  }
};

const testResult5 = {
  globalScores: [11, 1, 3, 12, 9, 8, 4, 2, 3],
  playerResult: {
    score: 7,
    remainingNotes: 3,
    remainingTime: 10
  }
};
