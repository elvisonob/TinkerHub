import QUESTIONS from '../questions.js';
import Summary from './Summary';
import QuestionAnswer from './QuestionAnswer';
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
    //return
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
        index={activeQuestionIndex}
        onTimeout={onHandleSkipAnswer}
        onSelectAnswer={onHandleAnswerClick}
      />
    </div>
  );
};

export default Quiz;
