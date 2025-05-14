const Answers = ({
  shuffledAnswers,
  answerIndex,
  key,
  answerState,
  onSelect,
}) => {
  return (
    <ul>
      {shuffledAnswers.current.map((answer) => {
        let isSelected = answer === answerIndex;
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
  );
};

export default Answers;
