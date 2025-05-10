import { useState, useCallback } from 'react';
import QUESTIONS from '../questions.js';
import Summary from './Summary.js';
import QuestionTimer from './QuestionTimer.js';

//Now, when my answer is clicked, I want it to take a 1 second
// to show a yellow color, and then after two seconds, it should
// show green if it is correct and red if it is wrong

// and then move to the next question afterwards

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
      }, 1000);

      setTimeout(() => {
        setAnswerState('');
      }, 2000);
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

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];

  const sortedAnswers = shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div className="container">
      <div className="quiz">
        <QuestionTimer
          key={activeQuestionIndex}
          timer={10000}
          onTimeout={onSkipAnswer}
        />
        <h1>{QUESTIONS[activeQuestionIndex].text}</h1>
        <ul>
          {sortedAnswers.map((answer) => (
            <li key={answer} onClick={() => onhandleAnswerClick(answer)}>
              {answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
