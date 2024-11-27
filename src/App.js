import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from './store/index';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatchFn = useDispatch();

  const increase = () => {
    dispatchFn(counterActions.increment());
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>+</button>
      <button onClick={() => dispatchFn(counterActions.decrement())}>-</button>
      <button onClick={() => dispatchFn(counterActions.increaseBy20(20))}>
        IncreaseBy20
      </button>
    </div>
  );
};

export default App;
