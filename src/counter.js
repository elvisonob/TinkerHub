import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatchFn = useDispatch();

  const increment = () => {
    dispatchFn({ type: 'increment' });
  };

  const decrement = () => {
    dispatchFn({ type: 'decrement' });
  };
  return (
    <div>
      <div onClick={increment}>+</div>
      <div>{counter}</div>
      <div onClick={decrement}>-</div>
    </div>
  );
};

export default Counter;
