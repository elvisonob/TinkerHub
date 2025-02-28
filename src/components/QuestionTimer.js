import { useState, useEffect } from 'react';

const QuestionTimer = ({ onSkipAnswer }) => {
  const [remainingTime, setRemainingTime] = useState(10000);
  /* Now, I have a progress bar and it is serving as a question timer.

The plan is to ensure that when it runs out, a question moves to the next */

  // So, i should have a handleSkip function for it
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSkipAnswer();
    }, 10000);

    return () => clearTimeout(timeout);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  });

  return <progress value={remainingTime} max={10000} />;
};

export default QuestionTimer;
