import { useState, useEffect } from 'react';

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('setTimeout');
    const time = setTimeout(onTimeout, timeout);

    return () => clearTimeout(time);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log('setInterval');
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <progress max={timeout} value={remainingTime} className={mode} />;
};

export default QuestionTimer;
