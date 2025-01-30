import React, { useState } from 'react';
import QUESTIONS from '../questions';

const Quiz = () => {
  // I want to display currently active question and answers
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  return (
    <div id="question">
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        <p>{QUESTIONS[activeQuestionIndex].answers}</p>
      </ul>
    </div>
  );
};

export default Quiz;
