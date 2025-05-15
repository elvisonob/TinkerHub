import { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];

    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <div>
      <ul>
        {shuffledAnswers.current.map((answer) => {
          let isSelected = answer === selectedAnswer;
          let cssClass;

          if (isSelected && answerState === 'selected') {
            cssClass = 'selected';
          }

          if (
            isSelected &&
            (answerState === 'correct' || answerState === 'wrong')
          ) {
            cssClass = answerState;
          }
          return (
            <li
              key={answer}
              onClick={() => onSelect(answer)}
              className={cssClass}
            >
              {answer}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Answers;
