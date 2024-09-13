import { createStore } from 'redux';

const initialState = { counter: 0, toggle: true };

const reducerFn = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      toggle: state.toggle,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      toggle: state.toggle,
    };
  }

  if (action.type === 'decrement') {
    if (state.counter <= 0) {
      return state;
    }
    return {
      counter: state.counter - 1,
      toggle: state.toggle,
    };
  }

  if (action.type === 'toggle') {
    return {
      toggle: !state.toggle,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
