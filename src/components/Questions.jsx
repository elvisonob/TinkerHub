import QuestionTimer from './QuestionTimer';
import Answers from './Answers.jsx';

const Questions = ({
  questions,
  selectAnswer,
  onSelect,
  answerState,
  onSkipAnswer,
  questionText,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        userSelectAnswer={selectAnswer}
        answerState={answerState}
        onSelect={onSelect}
        question={questions}
      />
    </div>
  );
};

export default Questions;
