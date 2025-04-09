import { useState, useEffect } from 'react';

// I want the timer not to continue running into the second question

const QuestionTimer = ({ timer, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const timing = setTimeout(onTimeout, timer);
    clearTimeout(() => timing);
  }, [timer, onTimeout]);

  useEffect(() => {
    const timingInterval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
      clearInterval(() => timingInterval);
    }, 100);
  }, []);

  return <progress value={remainingTime} max={timer} />;
};

export default QuestionTimer;
