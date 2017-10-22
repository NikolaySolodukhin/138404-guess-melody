import assert from 'assert';
import getTimer from './get-timer.js';

describe(`installTimer function`, () => {
  it(`should return 29 after timer 1 tick from 30`, () => {
    const timer = getTimer(30);
    const timerValueAfterTick = timer.tick();
    assert.equal(29, timerValueAfterTick);
  });
  it(`should return 15 after timer 1 tick from 16`, () => {
    const timer = getTimer(16);
    const timerValueAfterTick = timer.tick();
    assert.equal(15, timerValueAfterTick);
  });
  it(`should return 20 after timer 1 tick from 21`, () => {
    const timer = getTimer(21);
    const timerValueAfterTick = timer.tick();
    assert.equal(20, timerValueAfterTick);
  });
  it(`should return "time expired" message after time expires`, () => {
    const expired = getTimer(0);
    assert.equal(`time expired`, expired);
  });
});
