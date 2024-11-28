import { createSlice, configureStore } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: { todo: '', todoList: [] },
  reducers: {
    addATodo(state, action) {
      state.todo = action.payload;
    },

    onSend(state, action) {
      if (state.todo.trim() === '') {
        return alert('Add a Todo please');
      }
      console.log(state.todo);
      state.todo = '';
    },

    //take the inputed content and display it in the
    //todoList array
    onAddTodo(state, action) {
      const newItem = action.payload;
      state.todoList.push(newItem);
    },
  },
});

const store = configureStore({ reducer: formSlice.reducer });

export const formActions = formSlice.actions;

export default store;
