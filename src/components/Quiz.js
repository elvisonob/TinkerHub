import QUESTIONS from '../questions.js';
import Summary from './Summary';
import QuestionTimer from './QuestionTimer';
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

  // What i want to do now is simple.
  // Write a component for a question timer, and when the question timer
  // runs out and an answer isn't selected, null should be sent to the array

  const onHandleSkipAnswer = () => {
    onHandleAnswerClick(null);
  };

  if (activeQuestionIndex === QUESTIONS.length) {
    return (
      <div>
        <Summary />
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className="container">
      <div className="quiz">
        <QuestionTimer
          key={activeQuestionIndex}
          timer={10000}
          onTimeout={onHandleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        {shuffledAnswers.map((answer) => {
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
