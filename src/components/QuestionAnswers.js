import QuestionTimer from './QuestionTimer';
import Answers from './Answers.js';
import { useState } from 'react';
import QUESTIONS from '../questions.js';

const QuestionAnswers = ({ answers, timer, onSelect, onTimeout, index }) => {
  const [answer, setAnswer] = useState({
    selected: '',
    isCorrect: null,
  });

  const onhandleAnswerSelect = (answer) => {
    setAnswer({
      selected: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selected: answer,
        isCorrect: answer === QUESTIONS[index].answers[0],
      });

      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = '';

  if (answer.selected && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selected) {
    answerState = 'selected';
  }

  return (
    <div>
      <QuestionTimer timer={timer} onTimeout={onTimeout} />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        selectedAnswer={answer.selected}
        answers={answers}
        answerState={answerState}
        onSelect={onhandleAnswerSelect}
      />
    </div>
  );
};

export default QuestionAnswers;
