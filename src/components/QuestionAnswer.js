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

  let answerState = '';

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'selected';
  }

  return (
    <div className="quiz">
      <QuestionTimer
        key={timer}
        timer={timer}
        onTimeout={answer.selectedAnswer === '' ? onTimeout : null}
      />
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
