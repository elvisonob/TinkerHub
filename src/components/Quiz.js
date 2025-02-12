import React, { useState, useCallback } from 'react';
import QuestionTimer from './QuestionTimer';
import QUESTIONS from '../questions';

/* I want to ensure that when an answer is clicked,
   we get notified with a red color if wrong answer,
   and a green color if right answer

   Users can also wait to see the styling with no rush
   to the next question
*/

const Quiz = () => {
  const [answerState, setAnswerState] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState('answered');
      setUserAnswers((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
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
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary" alt="Trophy icon">
        <img />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="question">
      <QuestionTimer
        key={activeQuestionIndex}
        timeout={10000}
        onTimeout={handleSkipAnswer}
      />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <ul id="answers">
        {shuffledAnswers.map((answer) => {
          const isSelected = userAnswers[userAnswers.length - 1] === answer;
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
            <li key={answer} className={cssClass}>
              <button
                onClick={() => {
                  handleSelectAnswer(answer);
                }}
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Quiz;
