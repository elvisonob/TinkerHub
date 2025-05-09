import { useState, useEffect } from 'react';

const QuestionTimer = ({ timer, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => {
        return prev - 100;
      });

      return () => clearInterval(intervalId);
    }, 100);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(onTimeout, timer);

    return () => clearTimeout(timeoutId);
  }, [onTimeout, timer]);

  return (
    <div>
      <progress max={timer} value={remainingTime} />
    </div>
  );
};

export default QuestionTimer;

// Now, i have added a question timer, the plan is that
// when the timer finishes, we move to the next question
