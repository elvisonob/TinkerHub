import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './store/index.js';

const Counter = () => {
  const dispatchFn = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.toggle);

  const increment = () => {
    dispatchFn(counterActions.increment());
  };

  const decrement = () => {
    dispatchFn(counterActions.decrement());
  };

  const increase = (action) => {
    dispatchFn(counterActions.increase(10));
  };

  const toggleCounter = () => {
    dispatchFn(counterActions.toggle());
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
