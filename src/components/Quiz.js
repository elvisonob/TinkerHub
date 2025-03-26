import QUESTIONS from '../questions.js';
import Summary from './Summary';
import { useState, useCallback, useRef } from 'react';
import Questions from './Questions';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  console.log(userAnswers);

  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const onHandleAnswer = useCallback(
    function onHandleAnswer(answer) {
      setAnswerState('answered');
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, answer];
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

  const handleSkipAnswer = useCallback(
    () => onHandleAnswer(null),
    [onHandleAnswer]
  );

  if (activeQuestionIndex === QUESTIONS.length) {
    return <Summary />;
  }

  return (
    <div className="container">
      <Questions
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
        onSkipAnswer={handleSkipAnswer}
        answerState={answerState}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectedAnswer={onHandleAnswer}
      />
    </div>
  );
};

export default Quiz;
