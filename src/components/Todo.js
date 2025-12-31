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
    setTodo((prev) => {
      return [{ id: Math.random(), text: todoText }, ...prev];
    });
    setTodoText('');
  }

  function removeTodo(id) {
    setTodo((prev) => {
      return prev.filter((eachTodo) => eachTodo.id !== id);
    });
  }
  return (
    <div>
      <h1> TODO APP</h1>
      <h3>Add a Todo</h3>
      <input id="text" type="text" value={todoText} onChange={handleTodoText} />
      <form onSubmit={handleTextSubmit}>
        <button>Enter</button>
      </form>

      <div>
        <TodoList todo={todo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}
