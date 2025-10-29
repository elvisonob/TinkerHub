import { useState, useEffect } from 'react';

const Todo = () => {
  const [text, setText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodoList((prev) => {
      return [...prev, { id: Math.random(), todo: text }];
    });
    setText('');
  };

  return (
    <div className="container">
      <h1>TODO APP</h1>
      <div>Add a TodoList</div>
      <div>
        <form onClick={onSubmit}>
          <input type="text" id="text" onChange={onInput} value={text} />
          <button>ENTER</button>
        </form>
      </div>
      <div>
        <p>List of todos</p>
        {todoList.map((todo) => (
          <div key={todo.id}>{todo.todo}</div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
