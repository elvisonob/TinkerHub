import QUESTIONS from '../questions.js';
import Summary from './Summary';
import { useState } from 'react';
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const onHandleAnswer = (answer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  };

  // when no answer picked, handleSkipAnswer function should kick in
  const handleSkipAnswer = () => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, null];
    });
  };

  if (activeQuestionIndex === QUESTIONS.length) {
    return <Summary />;
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];

  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className="container">
      <div className="quiz">
        <QuestionTimer onSkipAnswer={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul>
          {shuffledAnswers.map((answerOptions) => (
            <li
              key={answerOptions}
              className="answerOptions"
              onClick={() => onHandleAnswer(answerOptions)}
            >
              {answerOptions}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
