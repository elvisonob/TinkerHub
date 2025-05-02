import { useRef } from 'react';

const Answers = ({ userAnswers, answerState, onSelectAnswer, answers }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <div>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = userAnswers === answer;

        let cssClass = '';

        if (answerState === 'selected' && isSelected) {
          cssClass = 'selected';
        }
        if (
          isSelected &&
          (answerState === 'correct' || answerState === 'wrong')
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className={cssClass}>
            <button
              onClick={() => onSelectAnswer(answer)}
              disabled={answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Answers;
