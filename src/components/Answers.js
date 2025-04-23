import { useRef } from 'react';

const Answers = ({ answerState, onSelect, userAnswers, questions }) => {
  const shuffledAnswers = useRef();

  return (
    <ul>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = answer === userAnswers;
        // if answer is picked and answer is not equal to correct or wrong,
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

        if (!shuffledAnswers.current) {
          shuffledAnswers.current = [...questions.answers];
          shuffledAnswers.current.sort(() => Math.random() - 0.5);
        }
        return (
          <li key={answer} className={cssClass}>
            <button onClick={() => onSelect(answer)}>{answer}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
