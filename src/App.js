import React, { useState } from 'react';
import './App.css';
import InputTodo from './InputTodo';
import ListOfTodos from './ListOfTodo';
import { TodoCtx } from './store/Context';

const App = () => {
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

  return (
    <TodoCtx.Provider
      value={{ todoList: finalTodoList, removeTodo: removeTodo }}
    >
      <div>
        <h1>TODO APP</h1>
        <InputTodo onAddTodo={onAddTodo} />
        <ListOfTodos />
      </div>
    </TodoCtx.Provider>
  );
};

export default App;
