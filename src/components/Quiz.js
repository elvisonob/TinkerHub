import { useState } from 'react';
import QUESTIONS from '../questions.js';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const onhandleAnswerClick = (answer) => {
    setUserAnswers((prev) => [...prev, answer]);
  };
  return (
    <div className="container">
      <div className="quiz">
        <div>
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
          <ul>
            {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
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
