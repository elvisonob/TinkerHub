import { useState } from 'react';
import QUESTIONS from '../questions.js';
import Summary from './Summary.js';
import QuestionTimer from './QuestionTimer.js';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  console.log(userAnswers);

  const activeQuestionIndex = userAnswers.length;

  const onhandleAnswerClick = (answer) => {
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  };

  const onSkipAnswer = () => {
    onhandleAnswerClick(null);
  };

  if (activeQuestionIndex === QUESTIONS.length) {
    return (
      <div>
        <h1>
          <Summary />
        </h1>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];

  const sortedAnswers = shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div className="container">
      <div className="quiz">
        <QuestionTimer
          key={activeQuestionIndex}
          timer={10000}
          onTimeout={onSkipAnswer}
        />
        <h1>{QUESTIONS[activeQuestionIndex].text}</h1>
        <ul>
          {sortedAnswers.map((answer) => (
            <li key={answer} onClick={() => onhandleAnswerClick(answer)}>
              {answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
