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
      //if counter is less than 20, increase, and if counter
      // is more than 20, do not go past 20
      if (state.counter >= 20) {
        return;
      }

      if (state.counter + action.payload > 20) {
        state.counter = 20;
      } else {
        state.counter = state.counter + action.payload;
      }
    },
  },
});

export const counterActions = counter.actions;

const store = configureStore({ reducer: counter.reducer });

export default store;
