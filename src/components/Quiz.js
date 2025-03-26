import QUESTIONS from '../questions.js';
import Summary from './Summary';
import { useState, useCallback, useRef } from 'react';
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  // const shuffledAnswers = useRef();

  console.log(userAnswers);

  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  //if question clicked, delay before going to next question, show different colors

  const onHandleAnswer = useCallback(
    function onHandleAnswer(answer) {
      setAnswerState('answered');
      setUserAnswers((prevAnswers) => {
        // question clicked and a 2 minutes wait

        return [...prevAnswers, answer];
      });

      setTimeout(() => {
        // if an answer is clicked, give a 2 minutes timer and then show the user whether it is correct or wrong
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

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];

  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div className="container">
      <div className="quiz">
        <QuestionTimer
          key={activeQuestionIndex}
          onTimeout={handleSkipAnswer}
          timeout={10000}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul>
          {shuffledAnswers.map((answerOptions) => {
            const isSelected =
              userAnswers[userAnswers.length - 1] === answerOptions;

            let cssClass = '';
            if (answerState === 'answered' && isSelected) {
              cssClass = 'selected';
            }

            if (
              (answerState === 'correct' || answerState === 'wrong') &&
              isSelected
            ) {
              cssClass = answerState;
            }

            return (
              <li key={answerOptions} className={cssClass}>
                <button onClick={() => onHandleAnswer(answerOptions)}>
                  {answerOptions}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
