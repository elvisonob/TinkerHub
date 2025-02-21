import QuestionTimer from './QuestionTimer';
import Answers from './Answers.jsx';
import { useState } from 'react';
import QUESTIONS from '../questions';

/*
Set the answer state here, check if an answer is right or wrong
or whether an answer has been selected 
*/

const Questions = ({ index, onSelect, onSkipAnswer }) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    // setTimeout to discover whether it is the right answer or wrong one

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelect(answer);
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
    <div id="question">
      <QuestionTimer
        timeout={timer}
        onTimeout={answerState === '' ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        userSelectAnswer={answer.selectedAnswer}
        answerState={answerState}
        answers={QUESTIONS[index].answers}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
};

export default Questions;
