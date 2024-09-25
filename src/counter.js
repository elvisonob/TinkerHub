import { counterAction } from './store/index.js';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatchFn = useDispatch();

  const counter = useSelector((state) => state.counter);

  const increase = () => {
    dispatchFn(counterAction.increment());
  };

  const decrease = () => {
    dispatchFn(counterAction.decrement());
  };

  const increaseBy20 = () => {
    dispatchFn(counterAction.increaseBy20(20));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={increase}>+</button>
      <div>{counter}</div>
      <button onClick={decrease}>-</button>
      <button onClick={increaseBy20}>Increase by 20</button>
    </div>
  );
};

export default Counter;
