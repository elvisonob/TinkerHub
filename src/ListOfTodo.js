import React, { useState } from 'react';

const ListOfTodos = () => {
  const [list, setList] = useState([]);

  return (
    <div>
      <h1>LIST OF TODOS</h1>
      {list.map((eachTodo) => (
        <li key={eachTodo.id}>
          <div>{eachTodo.text}</div>
          <button>REMOVE</button>
        </li>
      ))}
    </div>
  );
};

export default ListOfTodos;
