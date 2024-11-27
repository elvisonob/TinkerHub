import { configureStore, createSlice } from '@reduxjs/toolkit';

const counter = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      if (state.counter < 10) {
        state.counter++;
      }
    },
    decrement(state, action) {
      if (state.counter > 0) {
        state.counter--;
      }
    },

    increaseBy20(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export const counterActions = counter.actions;

const store = configureStore({ reducer: counter.reducer });

export default store;
