import { QuestionTypes } from './game-play.js';
import ArtistQuestion from './artist-question.js';
import GenreQuestion from './genre-question.js';

const questions = loadedData => {
  return loadedData.map(loadedQuestion => {
    if (loadedQuestion.type === QuestionTypes.QUESTION_ARTIST) {
      return new ArtistQuestion(loadedQuestion);
    }

    return new GenreQuestion(loadedQuestion);
  });
};

export default questions;
