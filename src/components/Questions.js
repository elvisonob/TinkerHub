import Answers from './Answers.js';
import QuestionTimer from './QuestionTimer.js';
import { useState } from 'react';
import QUESTIONS from '../questions.js';

const Questions = ({ onSkipAnswer, index, answers, onSelectedAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectedAnswer(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div className="quiz">
      <QuestionTimer onTimeout={onSkipAnswer} timeout={10000} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        answers={answers}
      />
    </div>
  );
};

export default Questions;
