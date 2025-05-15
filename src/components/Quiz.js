import { useState, useCallback, useRef } from 'react';

import Summary from './Summary.js';
import QUESTIONS from '../questions.js';

import QuestionAnswers from './QuestionAnswers.js';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  console.log(userAnswers);

  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const onhandleAnswerClick = useCallback(
    (answer) => {
      setAnswerState('selected');

      setUserAnswers((prev) => {
        return [...prev, answer];
      });

      setTimeout(() => {
        // if selected-answer is correct, show green
        if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
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
      <div>
        <h1>
          <Summary />
        </h1>
      </div>
    );
  }

  // I need my answers itself to change
  return (
    <div className="container">
      <QuestionAnswers
        key={activeQuestionIndex}
        activeQuestionIndex={activeQuestionIndex}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onhandleAnswerClick={onhandleAnswerClick}
        onSkipAnswer={onSkipAnswer}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
      />
    </div>
  );
};

export default Quiz;
