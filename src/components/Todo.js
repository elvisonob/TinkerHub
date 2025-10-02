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

  return (
    <div className="container">
      <h1>TODO APP with Jest Testing</h1>
      <h2>ADD TODO</h2>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={handleChange} />
      </form>
      <button>Enter</button>
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Todo;
