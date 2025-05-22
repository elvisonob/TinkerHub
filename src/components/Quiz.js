import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import Summary from './Summary.js';
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
  //adding dynamic colors

  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  console.log(userAnswers);

  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const onhandleAnswerClick = useCallback(
    (answer) => {
      setAnswerState('selected');
      setUserAnswers((prev) => [...prev, answer]);

      setTimeout(() => {
        // if right answer, setAnswerState to correct, else wrong

        if (QUESTIONS[activeQuestionIndex].answers[0] === answer) {
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
            {shuffledAnswers.map((answer) => {
              let cssClass = '';

              const isSelected = answer === userAnswers[userAnswers.length - 1];

              if (isSelected) {
                cssClass = answerState;
              }

              if (
                isSelected &&
                (answerState === 'correct' || answerState === 'wrong')
              ) {
                cssClass = answerState;
              }

              return (
                <li
                  key={answer}
                  onClick={() => onhandleAnswerClick(answer)}
                  className={cssClass}
                >
                  {answer}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
