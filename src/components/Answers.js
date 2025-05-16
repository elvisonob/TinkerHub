import { useRef } from 'react';

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];

    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul>
      {shuffledAnswers.current.map((answer) => {
        let isSelected = answer === selectedAnswer;
        let cssClass;

        if (answerState === 'selected' && isSelected) {
          cssClass = 'selected';
        }

        if (
          (answerState === 'correct' || answerState === 'wrong') &&
          isSelected
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
  );
};

export default Answers;
