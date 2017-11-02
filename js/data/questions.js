import {QuestionTypes} from './game-play.js';

const getAnswerList = (loadedQuestion) => {
  if (loadedQuestion.type === QuestionTypes.QUESTION_ARTIST) {
    return loadedQuestion.answers.map((answer) => {
      return {
        artist: answer.title,
        image: answer.image.url
      };
    });
  }

  return loadedQuestion.answers.map((answer) => answer.src);
};

const getArtistCorrectAnswer = (answers) => {
  return answers.reduce((correctAnswer, answer) => {
    if (answer.isCorrect) {
      return correctAnswer + answer.title;
    }

    return correctAnswer;
  }, ``);
};

const getGenreCorrectAnswer = (answers, genre) => {
  return answers.reduce((correctAnswer, answer) => {
    if (answer.genre === genre) {
      return correctAnswer.concat(answer.src);
    }

    return correctAnswer;
  }, []);
};

const createArtistQuestion = (loadedQuestion) => {
  return {
    type: loadedQuestion.type,
    title: loadedQuestion.question,
    songSrc: loadedQuestion.src,
    answerList: getAnswerList(loadedQuestion),
    correctAnswer: getArtistCorrectAnswer(loadedQuestion.answers)
  };
};

const createGenreQuestion = (loadedQuestion) => {
  return {
    type: loadedQuestion.type,
    title: loadedQuestion.question,
    answerList: getAnswerList(loadedQuestion),
    correctAnswer: getGenreCorrectAnswer(loadedQuestion.answers, loadedQuestion.genre)
  };
};

const questions = (loadedData) => {
  const arrayQuestions = [];

  loadedData.forEach((loadedQuestion) => {
    if (loadedQuestion.type === QuestionTypes.QUESTION_ARTIST) {
      arrayQuestions.push(createArtistQuestion(loadedQuestion));
      return;
    }

    arrayQuestions.push(createGenreQuestion(loadedQuestion));
  });

  return arrayQuestions;
};

export default questions;
