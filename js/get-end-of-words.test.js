import assert from 'assert';
import {WordsVariants} from './data/game-play.js';
import getEndOfWords from './get-end-of-words.js';

suite(`Decline words`, () => {
  test(`Minutes`, () => {
    assert.equal(getEndOfWords(0, WordsVariants.MINUTES), `минут`);
    assert.equal(getEndOfWords(1, WordsVariants.MINUTES), `минуту`);
    assert.equal(getEndOfWords(2, WordsVariants.MINUTES), `минуты`);
    assert.equal(getEndOfWords(3, WordsVariants.MINUTES), `минуты`);
    assert.equal(getEndOfWords(4, WordsVariants.MINUTES), `минуты`);
    assert.equal(getEndOfWords(5, WordsVariants.MINUTES), `минут`);
    assert.equal(getEndOfWords(6, WordsVariants.MINUTES), `минут`);
    assert.equal(getEndOfWords(7, WordsVariants.MINUTES), `минут`);
    assert.equal(getEndOfWords(8, WordsVariants.MINUTES), `минут`);
    assert.equal(getEndOfWords(9, WordsVariants.MINUTES), `минут`);
    assert.equal(getEndOfWords(10, WordsVariants.MINUTES), `минут`);
    assert.equal(getEndOfWords(21, WordsVariants.MINUTES), `минуту`);
    assert.equal(getEndOfWords(22, WordsVariants.MINUTES), `минуты`);
  });

  test(`Seconds`, () => {
    assert.equal(getEndOfWords(0, WordsVariants.SECONDS), `секунд`);
    assert.equal(getEndOfWords(1, WordsVariants.SECONDS), `секунду`);
    assert.equal(getEndOfWords(2, WordsVariants.SECONDS), `секунды`);
    assert.equal(getEndOfWords(3, WordsVariants.SECONDS), `секунды`);
    assert.equal(getEndOfWords(4, WordsVariants.SECONDS), `секунды`);
    assert.equal(getEndOfWords(5, WordsVariants.SECONDS), `секунд`);
    assert.equal(getEndOfWords(6, WordsVariants.SECONDS), `секунд`);
    assert.equal(getEndOfWords(7, WordsVariants.SECONDS), `секунд`);
    assert.equal(getEndOfWords(8, WordsVariants.SECONDS), `секунд`);
    assert.equal(getEndOfWords(9, WordsVariants.SECONDS), `секунд`);
    assert.equal(getEndOfWords(10, WordsVariants.SECONDS), `секунд`);
    assert.equal(getEndOfWords(21, WordsVariants.SECONDS), `секунду`);
    assert.equal(getEndOfWords(22, WordsVariants.SECONDS), `секунды`);
  });

  test(`Score`, () => {
    assert.equal(getEndOfWords(0, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(1, WordsVariants.SCORE), `балл`);
    assert.equal(getEndOfWords(2, WordsVariants.SCORE), `балла`);
    assert.equal(getEndOfWords(3, WordsVariants.SCORE), `балла`);
    assert.equal(getEndOfWords(4, WordsVariants.SCORE), `балла`);
    assert.equal(getEndOfWords(5, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(6, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(7, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(8, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(9, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(10, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(11, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(12, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(13, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(14, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(15, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(16, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(17, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(18, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(19, WordsVariants.SCORE), `баллов`);
    assert.equal(getEndOfWords(20, WordsVariants.SCORE), `баллов`);
  });

  test(`Fast`, () => {
    assert.equal(getEndOfWords(0, WordsVariants.FAST), `быстрых`);
    assert.equal(getEndOfWords(1, WordsVariants.FAST), `быстрый`);
    assert.equal(getEndOfWords(2, WordsVariants.FAST), `быстрых`);
    assert.equal(getEndOfWords(3, WordsVariants.FAST), `быстрых`);
    assert.equal(getEndOfWords(4, WordsVariants.FAST), `быстрых`);
    assert.equal(getEndOfWords(5, WordsVariants.FAST), `быстрых`);
    assert.equal(getEndOfWords(6, WordsVariants.FAST), `быстрых`);
    assert.equal(getEndOfWords(7, WordsVariants.FAST), `быстрых`);
    assert.equal(getEndOfWords(8, WordsVariants.FAST), `быстрых`);
    assert.equal(getEndOfWords(9, WordsVariants.FAST), `быстрых`);
    assert.equal(getEndOfWords(10, WordsVariants.FAST), `быстрых`);
  });

  test(`Mistakes`, () => {
    assert.equal(getEndOfWords(0, WordsVariants.MISTAKES), `ошибок`);
    assert.equal(getEndOfWords(1, WordsVariants.MISTAKES), `ошибку`);
    assert.equal(getEndOfWords(2, WordsVariants.MISTAKES), `ошибки`);
    assert.equal(getEndOfWords(3, WordsVariants.MISTAKES), `ошибки`);
    assert.equal(getEndOfWords(4, WordsVariants.MISTAKES), `ошибки`);
    assert.equal(getEndOfWords(5, WordsVariants.MISTAKES), `ошибок`);
  });
});
