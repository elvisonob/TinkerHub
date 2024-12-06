import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [newText, setNewText] = useState('');

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

  const onHandleEditText = (todo) => {
    setEditTodo(todo.id);
  };

  const onHandleNewTextEdit = (e) => {
    setNewText(e.target.value);
  };

  const onSaveButton = async (id) => {
    // the edited todo should be sent to the backend
    const response = await fetch(`http://localhost:5000/api/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Set the appropriate headers
      },
      body: JSON.stringify({ newText: newText }),
    });

    if (!response.ok) {
      console.log('Cannot apply todo');
    }

    const updatedTodos = await response.json();

    setTodoList(updatedTodos);
    // const updatedTodos = todoList.map((eachTodo) =>
    //   eachTodo.id === id ? { ...eachTodo, text: newText } : eachTodo
    // );

    // setTodoList(updatedTodos);
    // setEditTodo(null);
  };

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
            {editTodo === eachItem.id ? (
              <div>
                {eachItem.text}
                <input
                  name="text"
                  id="text"
                  value={newText}
                  onChange={onHandleNewTextEdit}
                />

                <button onClick={() => onSaveButton(eachItem.id)}>Save</button>
                <button>Cancel</button>
              </div>
            ) : (
              <div>
                <li>{eachItem.text}</li>
                <button onClick={() => onHandleEditText(eachItem)}>Edit</button>
                <button onClick={() => deleteData(eachItem.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
