import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import Summary from './Summary.js';
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
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

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];

  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div className="container">
      <div className="quiz">
        <div>
          <QuestionTimer
            key={activeQuestionIndex}
            timer={10000}
            onTimeout={onSkipAnswer}
          />
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul>
            {shuffledAnswers.map((answer) => (
              <li key={answer} onClick={() => onhandleAnswerClick(answer)}>
                {answer}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
