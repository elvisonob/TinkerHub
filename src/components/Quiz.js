import QUESTIONS from '../questions.js';
import Summary from './Summary';
import QuestionAnswer from './QuestionAnswer';
import { useState, useCallback } from 'react';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;
  console.log(userAnswers);

  const onHandleAnswerClick = useCallback(
    function onHandleAnswerClick(answer) {
      setAnswerState('selected');
      setUserAnswers((prevAnswer) => {
        return [...prevAnswer, answer];
      });

      setTimeout(() => {
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

  return (
    <div className="container">
      <QuestionAnswer
        key={activeQuestionIndex}
        onTimeout={onHandleSkipAnswer}
        userAnswers={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSelectAnswer={onHandleAnswerClick}
        question={QUESTIONS[activeQuestionIndex].text}
        answer1={QUESTIONS[activeQuestionIndex].answers}
      />
    </div>
  );
};

export default Quiz;
