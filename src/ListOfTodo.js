import React from 'react';
import { useContext } from 'react';
import { TodoCtx } from './store/Context';

const ListOfTodos = () => {
  const todoCtx = useContext(TodoCtx);
  return (
    <div className="listOfTodo">
      <h3>LIST OF TODOS</h3>
      {todoCtx.todoList.map((eachTodo) => (
        <div key={eachTodo.id}>
          <li>
            {eachTodo.text}{' '}
            <button onClick={() => todoCtx.removeTodo(eachTodo.id)}>
              REMOVE
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default ListOfTodos;
