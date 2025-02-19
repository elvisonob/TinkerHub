import QuestionTimer from './QuestionTimer';
import Answers from './Answers.jsx';
import { useState } from 'react';
import QUESTIONS from '../questions';

/*
Set the answer state here, check if an answer is right or wrong
or whether an answer has been selected 
*/

const Questions = ({
  index,
  questions,
  selectAnswer,
  onSelect,
  onSkipAnswer,
  questionText,
}) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

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
    answerState = 'answer';
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        userSelectAnswer={selectAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
        question={questions}
      />
    </div>
  );
};

export default Questions;
