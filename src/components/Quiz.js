import QUESTIONS from '../questions.js';
import Summary from './Summary';
import { useState, useCallback } from 'react';
import QuestionTimer from './QuestionTimer';

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answers, setAnswers] = useState('');

  console.log(userAnswers);

  //Now the next step is to highlight answers and probably include more states

  //When a question is clicked, it should show the user whether the question is right or wrong by showing different
  // colors, green for correct, red for wrong

  const activeQuestionIndex = userAnswers.length;

  const onHandleAnswer = useCallback(function onHandleAnswer(answer) {
    setUserAnswers((prevAnswers) => {
      // question clicked and a 2 minutes wait

      setTimeout(() => {}, 2000);
      return [...prevAnswers, answer];
    });
  }, []);

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
          {shuffledAnswers.map((answerOptions) => (
            <li
              key={answerOptions}
              className="answerOptions"
              onClick={() => onHandleAnswer(answerOptions)}
            >
              {answerOptions}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
