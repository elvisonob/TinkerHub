import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/api/todo/');

    if (!response.ok) {
      console.log('Https not found');
    }

    const data = await response.json();

    setTodoList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    //when the delete button is clicked, the todo should be deleted in memory, since there is no database
    const response = await fetch(`http://localhost:5000/api/todo/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.log(`Could not delete ${id}`);
    }

    const updatedTodos = await response.json();

    setTodoList(updatedTodos);
  };

  return (
    <div>
      <h2>List of added Todo</h2>
      <ul>
        {todoList.map((eachItem) => (
          <div key={eachItem.id}>
            <li>{eachItem.text}</li>
            <button>Edit</button>
            <button onClick={() => deleteData(eachItem.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
