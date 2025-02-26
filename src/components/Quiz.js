import React, { useState, useCallback, useRef } from 'react';
import Questions from './Questions';
import QUESTIONS from '../questions';
import Summary from './Summary.js';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <Questions
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      onSelect={handleSelectAnswer}
      onSkipAnswer={handleSkipAnswer}
    />
  );
};

export default Quiz;
