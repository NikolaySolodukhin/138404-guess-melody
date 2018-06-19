import assert from 'assert';
import { GameWords } from './data/game-play.js';
import getEndOfWords from './get-end-of-words.js';

suite(`Decline words`, () => {
  test(`Minutes`, () => {
    assert.equal(getEndOfWords(0, GameWords.MINUTES), `минут`);
    assert.equal(getEndOfWords(1, GameWords.MINUTES), `минуту`);
    assert.equal(getEndOfWords(2, GameWords.MINUTES), `минуты`);
    assert.equal(getEndOfWords(3, GameWords.MINUTES), `минуты`);
    assert.equal(getEndOfWords(4, GameWords.MINUTES), `минуты`);
    assert.equal(getEndOfWords(5, GameWords.MINUTES), `минут`);
    assert.equal(getEndOfWords(6, GameWords.MINUTES), `минут`);
    assert.equal(getEndOfWords(7, GameWords.MINUTES), `минут`);
    assert.equal(getEndOfWords(8, GameWords.MINUTES), `минут`);
    assert.equal(getEndOfWords(9, GameWords.MINUTES), `минут`);
    assert.equal(getEndOfWords(10, GameWords.MINUTES), `минут`);
    assert.equal(getEndOfWords(21, GameWords.MINUTES), `минуту`);
    assert.equal(getEndOfWords(22, GameWords.MINUTES), `минуты`);
  });

  test(`Seconds`, () => {
    assert.equal(getEndOfWords(0, GameWords.SECONDS), `секунд`);
    assert.equal(getEndOfWords(1, GameWords.SECONDS), `секунду`);
    assert.equal(getEndOfWords(2, GameWords.SECONDS), `секунды`);
    assert.equal(getEndOfWords(3, GameWords.SECONDS), `секунды`);
    assert.equal(getEndOfWords(4, GameWords.SECONDS), `секунды`);
    assert.equal(getEndOfWords(5, GameWords.SECONDS), `секунд`);
    assert.equal(getEndOfWords(6, GameWords.SECONDS), `секунд`);
    assert.equal(getEndOfWords(7, GameWords.SECONDS), `секунд`);
    assert.equal(getEndOfWords(8, GameWords.SECONDS), `секунд`);
    assert.equal(getEndOfWords(9, GameWords.SECONDS), `секунд`);
    assert.equal(getEndOfWords(10, GameWords.SECONDS), `секунд`);
    assert.equal(getEndOfWords(21, GameWords.SECONDS), `секунду`);
    assert.equal(getEndOfWords(22, GameWords.SECONDS), `секунды`);
  });

  test(`Score`, () => {
    assert.equal(getEndOfWords(0, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(1, GameWords.SCORE), `балл`);
    assert.equal(getEndOfWords(2, GameWords.SCORE), `балла`);
    assert.equal(getEndOfWords(3, GameWords.SCORE), `балла`);
    assert.equal(getEndOfWords(4, GameWords.SCORE), `балла`);
    assert.equal(getEndOfWords(5, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(6, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(7, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(8, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(9, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(10, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(11, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(12, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(13, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(14, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(15, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(16, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(17, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(18, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(19, GameWords.SCORE), `баллов`);
    assert.equal(getEndOfWords(20, GameWords.SCORE), `баллов`);
  });

  test(`Fast`, () => {
    assert.equal(getEndOfWords(0, GameWords.FAST), `быстрых`);
    assert.equal(getEndOfWords(1, GameWords.FAST), `быстрый`);
    assert.equal(getEndOfWords(2, GameWords.FAST), `быстрых`);
    assert.equal(getEndOfWords(3, GameWords.FAST), `быстрых`);
    assert.equal(getEndOfWords(4, GameWords.FAST), `быстрых`);
    assert.equal(getEndOfWords(5, GameWords.FAST), `быстрых`);
    assert.equal(getEndOfWords(6, GameWords.FAST), `быстрых`);
    assert.equal(getEndOfWords(7, GameWords.FAST), `быстрых`);
    assert.equal(getEndOfWords(8, GameWords.FAST), `быстрых`);
    assert.equal(getEndOfWords(9, GameWords.FAST), `быстрых`);
    assert.equal(getEndOfWords(10, GameWords.FAST), `быстрых`);
  });

  test(`Mistakes`, () => {
    assert.equal(getEndOfWords(0, GameWords.MISTAKES), `ошибок`);
    assert.equal(getEndOfWords(1, GameWords.MISTAKES), `ошибку`);
    assert.equal(getEndOfWords(2, GameWords.MISTAKES), `ошибки`);
    assert.equal(getEndOfWords(3, GameWords.MISTAKES), `ошибки`);
    assert.equal(getEndOfWords(4, GameWords.MISTAKES), `ошибки`);
    assert.equal(getEndOfWords(5, GameWords.MISTAKES), `ошибок`);
  });
});
