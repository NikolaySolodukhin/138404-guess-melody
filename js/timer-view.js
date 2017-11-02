import {GameSettings} from './data/game-play.js';
import convertSecondsToMinutes from './convert-sec-to-minutes.js';
import ResultFail from './screens/result/fail-result.js';
import getCircumferenceSetValue from './get-circumference-value.js';

const RADIUS = 370;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

class TimerView {
  constructor(seconds) {
    this.seconds = seconds;
  }

  get template() {
    const strokeDashoffset = getCircumferenceSetValue(CIRCUMFERENCE, GameSettings.MAX_GAME_TIME, this.seconds);

    return `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
               <circle
                 cx="390" cy="390" r="${RADIUS}"
                 class="timer-line timer-line-js"
                 style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center; stroke-dasharray: ${CIRCUMFERENCE}; stroke-dashoffset: ${strokeDashoffset}">
               </circle>

               <div class="timer-value js-timer-value" xmlns="http://www.w3.org/1999/xhtml">
                 <span class="timer-value-mins js-timer-value-mins"></span><!--
                 --><span class="timer-value-dots js-timer-value-dots">:</span><!--
                 --><span class="timer-value-secs js-timer-value-secs"></span>
               </div>
             </svg>`;
  }

  updateTime(seconds, state) {
    const newTime = convertSecondsToMinutes(seconds);

    const timer = document.querySelector(`.timer`);
    const timerValue = timer.parentNode.querySelector(`.js-timer-value`);
    timer.querySelector(`.timer-line-js`).style.strokeDashoffset = getCircumferenceSetValue(CIRCUMFERENCE, GameSettings.MAX_GAME_TIME, seconds);
    timerValue.querySelector(`.js-timer-value-mins`).innerText = newTime.minutes;
    timerValue.querySelector(`.js-timer-value-secs`).innerText = newTime.seconds;

    if (seconds <= GameSettings.MIN_TIMER_DANGER_ZONE) {
      timerValue.classList.add(`timer-value--time-danger`);
    }
    if (seconds === GameSettings.TIME_END) {
      new ResultFail(state).init();
    }
  }
}

export default TimerView;
