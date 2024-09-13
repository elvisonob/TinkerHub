import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.toggle);
  const dispatchFn = useDispatch();

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
      <div onClick={increment}>+</div>
      {toggle && <div>{counter}</div>}
      <div onClick={increase}>Increase by 10</div>
      <div onClick={decrement}>-</div>
      <div onClick={toggleCounter}>toggle</div>
    </div>
  );
};

export default Counter;
