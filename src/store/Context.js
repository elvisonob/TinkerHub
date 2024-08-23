import { createContext } from 'react';

export const TodoCtx = createContext({
  todoList: [],
  removeTodo: () => {},
});
