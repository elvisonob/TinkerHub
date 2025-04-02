import QUESTIONS from '../questions.js';
import Summary from './Summary';
import { useState, useCallback } from 'react';
import Questions from './Questions';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  console.log(userAnswers);

  const activeQuestionIndex = userAnswers.length;

  const onHandleAnswer = useCallback(function onHandleAnswer(answer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => onHandleAnswer(null),
    [onHandleAnswer]
  );

  if (activeQuestionIndex === QUESTIONS.length) {
    return <Summary answers={userAnswers} />;
  }

  return (
    <div className="container">
      <Questions
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectedAnswer={onHandleAnswer}
      />
    </div>
  );
};

export default Quiz;
