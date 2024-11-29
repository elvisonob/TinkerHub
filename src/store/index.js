import { createSlice, configureStore } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: { todo: '', todoList: [] },
  reducers: {
    addATodo(state, action) {
      state.todo = action.payload;
    },

    onAddTodo(state, action) {
      state.todoList.push(action.payload);
    },
  },
});

const store = configureStore({ reducer: formSlice.reducer });

export const formActions = formSlice.actions;

export default store;
