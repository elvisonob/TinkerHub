import QUESTIONS from '../questions.js';
import Summary from './Summary';
import QuestionTimer from './QuestionTimer';
import { useState, useCallback } from 'react';

//Now, when an answer is clicked, it should show a yellow color first, and
// if it is the right answer, it should then change to green
// if wrong answer, it should change to red

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');
  const activeQuestionIndex = userAnswers.length;
  console.log(userAnswers);

  const onHandleAnswerClick = useCallback(
    function onHandleAnswerClick(answer) {
      setTimeout(() => {
        setAnswerState('selected');
        if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }
      }, 1000);

      setUserAnswers((prevAnswer) => {
        return [...prevAnswer, answer];
      });
    },
    [activeQuestionIndex]
  );

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
          let isSelected = answer === userAnswers[userAnswers.length - 1];
          if (isSelected && answerState === '') {
            answerState = 'selected';
          }

          return (
            <li key={answer}>
              <button
                onClick={() => onHandleAnswerClick(answer)}
                className={answerState}
              >
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
