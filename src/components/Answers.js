import { useRef } from 'react';

const Answers = ({ answerState, questions, userAnswers, onSelect }) => {
  const shuffledAnswers = useRef();
  shuffledAnswers.current.map((answer) => {
    const isSelected = answer === userAnswers;
    // if answer is picked and answer is not equal to correct or wrong,
    let cssClass = '';

    if (answerState === 'selected' && isSelected) {
      cssClass = 'selected';
    }
    if (isSelected && (answerState === 'correct' || answerState === 'wrong')) {
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
  });
};

export default Answers;
