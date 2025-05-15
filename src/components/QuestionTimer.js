import { useState, useEffect } from 'react';

const QuestionTimer = ({ timer, onTimeout }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log('Timer component');
    const timeoutId = setTimeout(onTimeout, timer);

    return () => clearTimeout(timeoutId);
  }, [onTimeout, timer]);

  useEffect(() => {
    console.log('Interval component');
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <progress max={timer} value={remainingTime} />
    </div>
  );
};

export default QuestionTimer;
