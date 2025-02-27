import QUESTIONS from '../questions.js';
import { useState } from 'react';

const Quiz = () => {
  /* Now, when each question is clicked, I should go to the next question, all
  till the end
  */

  /*
 I save the userAnswers and on that condition, i move to the next question
  */
  const [userAnswers, setUserAnswers] = useState([]);

  /* When userAnswers is 0, the activeQuestionIndex should be 1  */

  const activeQuestionIndex = userAnswers.length;

  const onHandleAnswer = (answer) => {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, answer];
    });
  };

  return (
    <div className="container">
      <div className="quiz">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul>
          {QUESTIONS[activeQuestionIndex].answers.map((answerOptions) => (
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
