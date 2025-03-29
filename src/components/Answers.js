import { useRef } from 'react';

const Answers = ({ onSelectAnswer, answerState, selectedAnswer, answers }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul>
      {shuffledAnswers.current.map((answerOptions) => {
        const isSelected = selectedAnswer === answerOptions;

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
            <button
              onClick={() => onSelectAnswer(answerOptions)}
              disabled={answerState !== ''}
            >
              {answerOptions}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
