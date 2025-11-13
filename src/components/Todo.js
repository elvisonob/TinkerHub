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
      <h1>TODOs PAGE </h1>
      <label htmlFor="todoList">Add a Todo</label>
      <form onSubmit={onSubmit}>
        <input
          id="todoList"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Enter</button>
      </form>
      <h2>LIST OF TODO</h2>
      <div className="listOfTodos" data-testid="listOfTodo">
        {todos.map((todo) => (
          <div className="renderedList" key={todo.id}>
            {todo.todo}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
