import { useState, useEffect } from 'react';

const QuestionTimer = ({ onTimeout, timeout }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('set Timeout');
    const timingOut = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timingOut);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log('set Interval');
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return <progress value={remainingTime} max={timeout} />;
};

export default QuestionTimer;
