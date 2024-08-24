import { createContext, useState } from 'react';

export const TodoCtx = createContext({
  todoList: [],
  removeTodo: () => {},
});

export const TodoCtxProvider = ({ children }) => {
  const [finalTodoList, setFinalTodoList] = useState([]);

  const onAddTodo = (userText) => {
    const newTodo = {
      id: Date.now(),
      text: userText,
    };

    console.log(newTodo.id);
    setFinalTodoList((prevTodo) => {
      return [...prevTodo, newTodo];
    });
  };

  const removeTodo = (id) => {
    setFinalTodoList((prevTodo) => {
      return prevTodo.filter((eachTodo) => eachTodo.id !== id);
    });
  };

  const allCtx = {
    todoList: finalTodoList,
    removeTodo: removeTodo,
    onAddTodo: onAddTodo,
  };

  return <TodoCtx.Provider value={allCtx}>{children}</TodoCtx.Provider>;
};
