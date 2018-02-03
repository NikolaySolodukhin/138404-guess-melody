import AbstractQuestion from './abstract-questions.js';

class GenreQuestion extends AbstractQuestion {
  constructor(loadedQuestion) {
    super(loadedQuestion);
    this.correctAnswer = this._getGenreCorrectAnswer(loadedQuestion.answers, loadedQuestion.genre);
  }

  _getGenreCorrectAnswer(answers, genre) {
    return answers
        .filter((answer) =>
          answer.genre === genre
        ).map((answer) =>
          answer.src
        );
  }
}

export default GenreQuestion;
