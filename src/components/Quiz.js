import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import Summary from './Summary.js';

import QuestionAnswers from './QuestionAnswers';

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

  return (
    <div className="container">
      <div className="quiz">
        <QuestionAnswers
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          timer={10000}
          onTimeout={onSkipAnswer}
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          questions={QUESTIONS[activeQuestionIndex].text}
          onSelect={onhandleAnswerClick}
        />
      </div>
    </div>
  );
};

export default Quiz;
