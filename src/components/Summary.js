import QUESTIONS from '../questions.js';

const Summary = ({ answers }) => {
  const correctAnswers = answers.filter(
    (answer) => answer === QUESTIONS[answer].answers[0]
  );

  const wrongAnswers = answers.filter(
    (answer) => answer !== QUESTIONS[answer].answers[0]
  );

  const finalCorrectAnswer = (correctAnswers.length / answers.length) * 100;

  const finalWrongAnswer = (wrongAnswers.length / answers.length) * 100;

  const skippedAnswer = 100 - (finalCorrectAnswer + finalWrongAnswer);

  return (
    <div className="summary">
      <h1>Quiz Completed</h1>
      <div>
        <p>{finalCorrectAnswer}%</p>
        <h3>Correct Answer</h3>
      </div>
      <div>
        <p>{skippedAnswer}%</p>
        <h3>Skipped Answer</h3>
      </div>
      <div>
        <p>{finalWrongAnswer}%</p>
        <h3>Wrong Answer</h3>
      </div>
      <div>
        <h2>List of Answers</h2>
      </div>
    </div>
  );
};

export default Summary;
