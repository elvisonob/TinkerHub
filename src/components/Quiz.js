import QUESTIONS from '../questions.js';
import Summary from './Summary';
import { useState } from 'react';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  console.log(userAnswers);

  const onHandleAnswerClick = (answer) => {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, answer];
    });
  };

  //if the questions are finished, then show the user a Summary page

  if (activeQuestionIndex === QUESTIONS.length) {
    return (
      <div>
        <Summary />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="quiz">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
          return (
            <li key={answer}>
              <button onClick={() => onHandleAnswerClick(answer)}>
                {answer}
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
