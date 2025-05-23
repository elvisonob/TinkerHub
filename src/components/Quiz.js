import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import Summary from './Summary.js';

import QuestionAnswers from './QuestionAnswers';

const Quiz = () => {
  //adding dynamic colors

  const [userAnswers, setUserAnswers] = useState([]);

  console.log(userAnswers);

  const activeQuestionIndex = userAnswers.length;

  const onhandleAnswerClick = useCallback((answer) => {
    setUserAnswers((prev) => [...prev, answer]);
  }, []);

  const onSkipAnswer = useCallback(() => {
    onhandleAnswerClick(null);
  }, [onhandleAnswerClick]);

  if (activeQuestionIndex === QUESTIONS.length) {
    return (
      <h1>
        <Summary />
      </h1>
    );
  }

  return (
    <div className="container">
      <div className="quiz">
        <QuestionAnswers
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          timer={10000}
          onTimeout={onSkipAnswer}
          answers={QUESTIONS[activeQuestionIndex].answers}
          onSelect={onhandleAnswerClick}
        />
      </div>
    </div>
  );
};

export default Quiz;
