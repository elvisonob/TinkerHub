import { useState } from 'react';

const Todo = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) => {
      return [{ id: Math.random(), todo: text }, ...prev];
    });
    setText('');
  };

  const removeTodo = (ids) => {
    // when the button is clicked, that current todo should be removed
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== ids);
    });
  };
  return (
    <div className="container">
      <h1>TODO PAGE</h1>
      <h3>Add a Todo</h3>
      <form onSubmit={onSubmit}>
        <input
          id="text"
          type="text"
          value={text}
          placeholder="type-todo"
          onChange={(e) => setText(e.target.value)}
        />
        <button>Enter</button>
      </form>
      <h2>LIST OF TODO</h2>
      <div class="listOfTodo" data-testid="listOfTodo">
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.todo}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
