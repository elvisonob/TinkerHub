import { createStore } from 'redux';

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === 'decrement') {
    if (state.counter <= 0) {
      return state;
    }
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
