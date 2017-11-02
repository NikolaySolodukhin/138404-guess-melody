const GameSettings = {
  MAX_GAME_TIME: 300,
  MAX_QUICK_ANSWER_TIME: 30,
  MIN_TIMER_DANGER_ZONE: 30,
  MAX_COUNT_NOTES: 3,
  MAX_COUNT_MISTAKES: 3,
  MAX_COUNT_ANSWERS: 10,
  MAX_COUNT_LEVELS: 10,
  TIME_END: 0
};

const QuestionTypes = {
  QUESTION_ARTIST: `artist`,
  QUESTION_GENRE: `genre`
};

const GameWords = {
  MINUTES: [`минуту`, `минуты`, `минут`],
  SECONDS: [`секунду`, `секунды`, `секунд`],
  SCORE: [`балл`, `балла`, `баллов`],
  FAST: [`быстрый`, `быстрых`, `быстрых`],
  MISTAKES: [`ошибку`, `ошибки`, `ошибок`]
};

const initialState = {
  time: GameSettings.MAX_GAME_TIME,
  timer: null,
  mistakes: 0,
  level: 0,
  resetToDefault() {
    this.time = GameSettings.MAX_GAME_TIME;
    this.timer = null;
    this.mistakes = 0;
    this.level = 0;
  }
};

let questionsArray = [];

const allDataQuestions = (loadedData) => {
  questionsArray = loadedData;
};


const currentPlayer = {
  answers: [],
  resetToDefault() {
    this.answers = [];
  }
};

const playersStats = [4, 5, 8, 10, 11, 15, 19];

export {GameSettings, GameWords, initialState, questionsArray, allDataQuestions, currentPlayer, playersStats, QuestionTypes};
