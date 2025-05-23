import QuestionTimer from './QuestionTimer';
import Answers from './Answers.js';
import { useState } from 'react';
import QUESTIONS from '../questions.js';

// now, i am bring the states down

const QuestionAnswers = ({
  selectedAnswer,
  answers,
  questions,
  answerState,
  timer,
  onSelect,
  onTimeout,
  index,
}) => {
  const [answer, setAnswer] = useState({
    selected: '',
    isCorrect: null,
  });

  const onhandleAnswerSelect = (answer) => {
    setAnswer({
      selected: 'selected',
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selected: 'selected',
        isCorrect: answer === QUESTIONS[index].answers[0],
      });

      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = '';

  return (
    <div>
      <QuestionTimer timer={timer} onTimeout={onTimeout} />
      <h2>{questions}</h2>
      <Answers
        selectedAnswer={selectedAnswer}
        answers={answers}
        answerState={answerState}
        onSelect={onhandleAnswerSelect}
      />
    </div>
  );
};

export default QuestionAnswers;
