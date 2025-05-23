import { useState, useEffect } from 'react';

const QuestionTimer = ({ timer, onTimeout }) => {
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
