import QUESTIONS from '../questions.js';

const Quiz = () => {
  return (
    <div className="container">
      <div className="quiz">
        <h2>{QUESTIONS[0].text}</h2>
        <ul>
          {QUESTIONS[0].answers.map((answerOptions) => (
            <li key={answerOptions}>{answerOptions}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
