import { useState } from 'react';
import TodoList from './TodoList.js';

export default function Todo() {
  const [todoText, setTodoText] = useState('');
  const [todo, setTodo] = useState([]);

  function handleTodoText(e) {
    setTodoText(e.target.value);
  }

  function handleTextSubmit(e) {
    e.preventDefault();

    // take the submitted now and display it in the todoList
    console.log(todoText);
    setTodo((prev) => {
      return [{ id: Math.random(), text: todoText }, ...prev];
    });
    setTodoText('');
  }
  return (
    <div>
      <h1> TODO APP</h1>
      <h3>Add a Todo</h3>
      <input id="text" type="text" value={todoText} onChange={handleTodoText} />
      <form onSubmit={handleTextSubmit}>
        <button>Submit</button>
      </form>

      <div>
        <TodoList todo={todo} />
      </div>
    </div>
  );
}
