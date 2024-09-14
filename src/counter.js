import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatchFn = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.toggle);

  const increment = () => {
    dispatchFn({ type: 'increment' });
  };

  const decrement = () => {
    dispatchFn({ type: 'decrement' });
  };

  const increase = () => {
    dispatchFn({ type: 'increase', amount: 10 });
  };

  const toggleCounter = () => {
    dispatchFn({ type: 'toggle' });
  };
  return (
    <div>
      <div>
        <div onClick={increment}>+</div>
        {show && <div>{counter}</div>}
        <div onClick={increase}>Increase by 10</div>
        <div onClick={decrement}>-</div>
      </div>
      <div onClick={toggleCounter}>toggle</div>
    </div>
  );
};

export default Counter;
