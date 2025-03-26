import Answers from './Answers.js';
import QuestionTimer from './QuestionTimer.js';

const Questions = ({
  questionText,
  onSkipAnswer,
  answerState,
  answers,
  selectedAnswer,
  onSelectedAnswer,
}) => {
  return (
    <div className="quiz">
      <QuestionTimer onTimeout={onSkipAnswer} timeout={10000} />
      <h2>{questionText}</h2>
      <Answers
        onSelectAnswer={onSelectedAnswer}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        answers={answers}
      />
    </div>
  );
};

export default Questions;
