import QUESTIONS from '../questions.js';
import Summary from './Summary';
import QuestionTimer from './QuestionTimer';
import { useState, useCallback } from 'react';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  console.log(userAnswers);

  const onHandleAnswerClick = useCallback(function onHandleAnswerClick(answer) {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, answer];
    });
  }, []);

  const onHandleSkipAnswer = useCallback(
    function onHandleSkipAnswer() {
      onHandleAnswerClick(null);
    },
    [onHandleAnswerClick]
  );

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
