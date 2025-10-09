import { useState } from 'react';
import TodoList from './TodoList';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodoList((prev) => [...prev, { id: Math.random(), name: input }]);
    setInput('');
  };

  const onDelete = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>TODO APP with Jest Test</h1>
      <h2>ADD TODOS</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={handleChange} />
      </form>
      <button>Enter</button>
      <TodoList todoList={todoList} onDelete={onDelete} />
    </div>
  );
};

export default Todo;
