import { useState, useCallback } from 'react';
import Summary from './Summary.js';
import QUESTIONS from '../questions.js';
import QuestionAnswers from './QuestionAnswers.js';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  console.log(userAnswers);

  const activeQuestionIndex = userAnswers.length;

  const onhandleAnswerClick = useCallback((answer) => {
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  }, []);

  const onSkipAnswer = useCallback(() => {
    onhandleAnswerClick(null);
  }, [onhandleAnswerClick]);

  if (activeQuestionIndex === QUESTIONS.length) {
    return (
      <div>
        <h1>
          <Summary />
        </h1>
      </div>
    );
  }

  return (
    <div className="container">
      <QuestionAnswers
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onhandleAnswerClick={onhandleAnswerClick}
        onSkipAnswer={onSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
