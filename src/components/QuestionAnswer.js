// bring the QuestionTimer and Answers here
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
import React, { useState } from 'react';

const QuestionAnswer = ({
  onTimeout,
  userAnswers,
  answerState,
  onSelectAnswer,
  question,
  answer1,
}) => {
  //Now, i need to bring userAnswers and answerState functionality to
  //QuestionAnswer component i.e bringing state down.
  return (
    <div className="quiz">
      <QuestionTimer timer={10000} onTimeout={onTimeout} />
      <h2>{question}</h2>
      <Answers
        answers={answer1}
        userAnswers={userAnswers}
        answerState={answerState}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
};

export default QuestionAnswer;
