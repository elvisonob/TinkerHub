import { useRef } from 'react';

const Answers = ({ answers, answerState, selectedAnswer, onSelect }) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];

    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul>
      {shuffledAnswers.current.map((answer) => {
        let cssClass = '';

        const isSelected = answer === selectedAnswer;

        if (isSelected && answerState === 'selected') {
          cssClass = answerState;
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
  );
};

export default Answers;
