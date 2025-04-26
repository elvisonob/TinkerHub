// bring the QuestionTimer and Answers here
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';

const QuestionAnswer = ({
  onTimeout,
  userAnswers,
  answerState,
  onSelectAnswer,
  question,
  answer1,
}) => {
  return (
    <div className="quiz">
      <QuestionTimer timer={10000} onTimeout={onTimeout} />
      <h2>{question}</h2>
      <Answers
        answers={answer1}
        userAnswers={userAnswers}
        answerState={answerState}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
};

export default QuestionAnswer;
