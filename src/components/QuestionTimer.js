import { useState, useEffect } from 'react';

// Now, i need to set an Interval

const QuestionTimer = ({ timer, onSkipAnswer }) => {
  const [interval, setInterval] = useState(10000);
  setTimeout(() => {
    onSkipAnswer();
  }, 10000);

  useEffect(() => {
    const intervalTime = setInterval((prev) => {
      return prev - 100;
    }, 100);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  return <progress value={timer} max={10000} />;
};

export default QuestionTimer;
