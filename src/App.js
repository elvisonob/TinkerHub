import './App.css';
import InputTodo from './InputTodo';
import ListOfTodos from './ListOfTodo';
import React, { useState } from 'react';

const App = () => {
  const [finalTodoList, setFinalTodoList] = useState([]);

  const onAddTodo = (userText) => {
    const newTodo = {
      id: Date.now(),
      text: userText,
    };
    setFinalTodoList((prevTodo) => {
      return [...prevTodo, newTodo];
    });
  };

  //to remove a todo

  const removeTodo = (id) => {
    setFinalTodoList((prevTodo) => {
      return prevTodo.filter((eachTodo) => eachTodo.id !== id);
    });
  };

  // they need to be distinct with an id
  return (
    <div>
      <h1>TODO APP</h1>
      <InputTodo onAddTodo={onAddTodo} />
      <ListOfTodos finalTodoList={finalTodoList} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
