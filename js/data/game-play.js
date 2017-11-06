const GameSettings = {
  MAX_GAME_TIME: 300,
  MAX_QUICK_ANSWER_TIME: 30,
  MIN_TIMER_DANGER_ZONE: 30,
  MAX_COUNT_NOTES: 3,
  MAX_COUNT_MISTAKES: 3,
  MAX_COUNT_ANSWERS: 10,
  MAX_COUNT_LEVELS: 10,
  TIME_END: 0,
  QUICK_ANSWER_POINT: 2,
  SLOW_ANSWER_POINT: 1,
};

const QuestionTypes = {
  QUESTION_ARTIST: `artist`,
  QUESTION_GENRE: `genre`
};

const intervalSecondAfterAnswer = 1000;

const GameWords = {
  MINUTES: [`минуту`, `минуты`, `минут`],
  SECONDS: [`секунду`, `секунды`, `секунд`],
  SCORE: [`балл`, `балла`, `баллов`],
  FAST: [`быстрый`, `быстрых`, `быстрых`],
  MISTAKES: [`ошибку`, `ошибки`, `ошибок`]
};

export {GameSettings, GameWords, QuestionTypes, intervalSecondAfterAnswer};
