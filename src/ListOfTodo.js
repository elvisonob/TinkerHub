import React from 'react';

const ListOfTodos = (props) => {
  return (
    <div className="listOfTodo">
      <h3>LIST OF TODOS</h3>
      {props.finalTodoList.map((eachTodo) => (
        <div key={eachTodo.id}>
          <li>
            {eachTodo.text}{' '}
            <button onClick={() => props.removeTodo(eachTodo.id)}>
              REMOVE
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default ListOfTodos;
