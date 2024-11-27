import { configureStore, createSlice } from '@reduxjs/toolkit';

const counter = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      // if it gets to 10, do not increase any further
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },

    increaseBy20(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export const counterActions = counter.actions;

const store = configureStore({ reducer: counter.reducer });

export default store;
