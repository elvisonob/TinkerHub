import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/api/todo/');

    if (!response.ok) {
      console.log('Https not found');
    }

    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>List of added Todo</h2>
      <ul>
        {todoList.map((eachItem) => (
          <li key={eachItem.id}>{eachItem.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
