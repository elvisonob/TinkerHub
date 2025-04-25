import QUESTIONS from '../questions.js';
import Summary from './Summary';
import QuestionTimer from './QuestionTimer';
import { useState, useCallback, useRef } from 'react';

//Now, when an answer is clicked, it should show a yellow color first, and
// if it is the right answer, it should then change to green
// if wrong answer, it should change to red

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');
  const shuffledAnswers = useRef();
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

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="container">
      <div className="quiz">
        <QuestionTimer
          key={activeQuestionIndex}
          timer={10000}
          onTimeout={onHandleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      </div>
    </div>
  );
};

export default Quiz;
