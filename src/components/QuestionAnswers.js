import QuestionTimer from './QuestionTimer.js';
import Answers from './Answers.js';
import QUESTIONS from '../questions.js';

const QuestionAnswers = ({
  key,
  answerState,
  selectedAnswer,
  onSkipAnswer,
  onhandleAnswerClick,
  answers,
  activeQuestionIndex,
}) => {
  return (
    <div className="quiz">
      <QuestionTimer key={key} timer={10000} onTimeout={onSkipAnswer} />
      <h1>{QUESTIONS[activeQuestionIndex].text}</h1>
      <Answers
        answers={answers}
        answerState={answerState}
        answerIndex={selectedAnswer}
        onSelect={onhandleAnswerClick}
      />
    </div>
  );
};

export default QuestionAnswers;
