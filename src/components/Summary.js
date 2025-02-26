import QUESTIONS from '../questions.js';

const Summary = ({ userAnswers }) => {
  return (
    <div id="summary" alt="Trophy icon">
      <img />
      <h2>Quiz Completed!</h2>
      <div>
        <h3>10%</h3>
        <p>Skipped</p>
      </div>
      <div>
        <h3>10%</h3>
        <p>Answered Correctly</p>
      </div>
      <div>
        <h3>10%</h3>
        <p>Answered Incorrectly</p>
      </div>
      {userAnswers.map((answers, index) => {
        return (
          <ol key={index}>
            <p>{index + 1}</p>
            <li>{QUESTIONS[index].text}</li>
            <p>{answers}</p>
          </ol>
        );
      })}
    </div>
  );
};

export default Summary;
