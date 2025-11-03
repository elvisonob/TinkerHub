import { useState } from 'react';

const Todo = () => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
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
          onChange={(e) => e.target.value}
        />
        <button>Enter</button>
      </form>
      <h2>LIST OF TODO</h2>
    </div>
  );
};

export default Todo;
