import QuestionTimer from './QuestionTimer.js';
import Answers from './Answers.js';
import { useState } from 'react';

// Moving components down now

const QuestionAnswers = ({
  answerState,
  selectedAnswer,
  onSkipAnswer,
  onhandleAnswerClick,
  answers,
  questions,
}) => {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });
  return (
    <div className="quiz">
      <QuestionTimer timer={10000} onTimeout={onSkipAnswer} />
      <h1>{questions}</h1>
      <Answers
        answers={answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
        onSelect={onhandleAnswerClick}
      />
    </div>
  );
};

export default QuestionAnswers;
