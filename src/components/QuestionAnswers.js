import QuestionTimer from './QuestionTimer.js';
import Answers from './Answers.js';
import { useState } from 'react';
import QUESTIONS from '../questions.js';

const QuestionAnswers = ({ onSkipAnswer, onhandleAnswerClick, index }) => {
  const [answer, setAnswer] = useState({
    selectAnswer: '',
    isCorrect: null,
  });

  const onhandleSelectAnswer = (answer) => {
    setAnswer({
      selectAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
    }, 1000);

    setTimeout(() => {
      onhandleAnswerClick(answer);
    }, 2000);
  };

  let answerState = '';
  if (answer.selectAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectAnswer) {
    answerState = 'selected';
  }

  let timer = 10000;

  // if answer has been selected, there should be a fresh quick timer

  if (answer.selectAnswer) {
    timer = 2000;
  }

  if (answer.selectAnswer && answer.isCorrect !== null) {
    timer = 1000;
  }

  return (
    <div className="quiz">
      <QuestionTimer timer={timer} onTimeout={onSkipAnswer} />
      <h1>{QUESTIONS[index].text}</h1>
      <Answers
        answers={QUESTIONS[index].answers}
        answerState={answerState}
        selectedAnswer={answer.selectAnswer}
        onSelect={onhandleSelectAnswer}
      />
    </div>
  );
};

export default QuestionAnswers;
