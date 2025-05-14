import { useState, useCallback, useRef } from 'react';
import QUESTIONS from '../questions.js';
import Summary from './Summary.js';
import QuestionTimer from './QuestionTimer.js';
import Answers from './Answers.js';

//Now, when my answer is clicked, I want it to take a 1 second
// to show a yellow color, and then after two seconds, it should
// show green if it is correct and red if it is wrong

// and then move to the next question afterwards

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');
  const shuffledAnswers = useRef();
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
          onTimeout={onSkipAnswer}
        />
        <h1>{QUESTIONS[activeQuestionIndex].text}</h1>
        <Answers
          key={activeQuestionIndex}
          shuffledAnswers={shuffledAnswers}
          answerState={answerState}
          answerIndex={userAnswers[userAnswers.length - 1]}
          onSelect={onhandleAnswerClick}
        />
      </div>
    </div>
  );
};

export default Quiz;
