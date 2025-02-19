import React, { useState, useCallback, useRef } from 'react';
import Questions from './Questions';
import QUESTIONS from '../questions';

const Quiz = () => {
  const [answerState, setAnswerState] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState('answered');
      setUserAnswers((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }

        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary" alt="Trophy icon">
        <img />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <Questions
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      answerState={answerState}
      onSelect={handleSelectAnswer}
      questionText={QUESTIONS[activeQuestionIndex].text}
      questions={QUESTIONS[activeQuestionIndex].answers}
      onSkipAnswer={handleSkipAnswer}
      selectAnswer={userAnswers[userAnswers.length - 1]}
    />
  );
};

export default Quiz;
