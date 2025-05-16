import QuestionTimer from './QuestionTimer.js';
import Answers from './Answers.js';
import { useState } from 'react';
import QUESTIONS from '../questions.js';

const QuestionAnswers = ({
  selectedAnswer,
  onSkipAnswer,
  onhandleAnswerClick,
  answers,
  questions,
  index,
}) => {
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
  // if question is correct, answer is correct or when wrong, wrong
  if (answer.selectAnswer) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  }

  return (
    <div className="quiz">
      <QuestionTimer timer={10000} onTimeout={onSkipAnswer} />
      <h1>{questions}</h1>
      <Answers
        answers={answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
        onSelect={onhandleSelectAnswer}
      />
    </div>
  );
};

export default QuestionAnswers;
