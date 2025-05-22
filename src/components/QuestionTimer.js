import { useState, useEffect } from 'react';

const QuestionTimer = ({ timer, onTimeout }) => {
  //Now the plan is that each time a question timer finishes without a click, I should go to the next question
  // Also, if there is a click while it hasn't finish, i should go to the next question too

  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const timing = setTimeout(onTimeout, timer);

    return () => clearTimeout(timing);
  }, [onTimeout, timer]);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setRemainingTime((prev) => {
        return prev - 100;
      });

      return () => clearInterval(timeInterval);
    }, 100);
  }, []);

  return <progress max={10000} value={remainingTime} />;
};

export default QuestionTimer;
