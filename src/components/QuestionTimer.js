import { useState, useEffect } from 'react';

// I want the timer not to continue running into the second question

//I want the question to move to the next question even when it is null

const QuestionTimer = ({ timer, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    console.log('setTimeout');
    const timing = setTimeout(onTimeout, timer);

    return () => clearTimeout(timing);
  }, [timer, onTimeout]);

  useEffect(() => {
    console.log('setInterval');
    const timingInterval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);

      return () => clearInterval(timingInterval);
    }, 100);
  }, []);

  return <progress value={remainingTime} max={timer} />;
};

export default QuestionTimer;
