// bring the QuestionTimer and Answers here
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import React, { useState } from 'react';
import QUESTIONS from '../questions.js';

const QuestionAnswer = ({ onTimeout, index, onSelectAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  const handleClickAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
    }, 1000);

    setTimeout(() => {
      onSelectAnswer(answer);
    }, 2000);
  };

  // if there is a clicked answer and answer is correct, answerState
  // should be green, if wrong, red, if just selected, selected

  let answerState = '';

  if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  }

  return (
    <div className="quiz">
      <QuestionTimer timer={10000} onTimeout={onTimeout} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        answerState={answerState}
        onSelectAnswer={handleClickAnswer}
        userAnswers={answer.selectedAnswer}
      />
    </div>
  );
};

export default QuestionAnswer;
