// bring the QuestionTimer and Answers here
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';

const QuestionAnswer = ({
  onTimeout,
  userAnswers,
  answerState,
  onSelectAnswer,
  questionPrefix,
}) => {
  return (
    <div className="quiz">
      <QuestionTimer timer={10000} onTimeout={onTimeout} />
      <h2>{questionPrefix.text}</h2>
      <Answers
        answers={questionPrefix.answers}
        userAnswers={userAnswers}
        answerState={answerState}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
};

export default QuestionAnswer;
