import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from './store/index';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatchFn = useDispatch();

  const onIncrease = () => {
    dispatchFn(counterAction.increment());
  };

  const onDecrease = () => {
    dispatchFn(counterAction.decrement());
  };

  const onIncreaseBy20 = () => {
    dispatchFn(counterAction.increaseBy20(20));
  };

  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={onIncrease}>+</button>
      <div>{counter}</div>
      <button onClick={onDecrease}>-</button>
      <button onClick={onIncreaseBy20}>IncreaseBy20</button>
    </div>
  );
};

export default Counter;
