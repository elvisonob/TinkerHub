import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [newText, setNewText] = useState('');
  const [colorText, setColorText] = useState('');

  //if all fields are filled, it should be a PUT request, else, a PATCH request?
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

  const onHandleNewColorEdit = (e) => {
    setColorText(e.target.value);
  };

  const onSaveButton = async (id) => {
    // the edited todo should be sent to the backend
    const response = await fetch(`http://localhost:5000/api/todo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Set the appropriate headers
      },
      body: JSON.stringify({ newText: newText, color: colorText }),
    });

    if (!response.ok) {
      console.log('Cannot apply todo');
    }

    const updatedTodos = await response.json();

    setTodoList(updatedTodos);
  };

  const deleteData = async (id) => {
    const response = await fetch(`http://localhost:5000/api/todo/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.log(`Could not delete ${id}`);
    }

    const updatedTodos = await response.json();

    setTodoList(updatedTodos);
  };
  // can i click one edit button and it shows me a way to edit all values?
  return (
    <div>
      <h2>List of added Todo</h2>
      <ul>
        {todoList.map((eachItem) => (
          <div key={eachItem.id}>
            {editTodo === eachItem.id ? (
              <div>
                {eachItem.text}
                {eachItem.color}
                <br></br>
                <label>Text</label>
                <input
                  name="text"
                  id="text"
                  value={newText}
                  onChange={onHandleNewTextEdit}
                />
                <label>Color</label>
                <input
                  name="text"
                  id="text"
                  value={colorText}
                  onChange={onHandleNewColorEdit}
                />

                <button onClick={() => onSaveButton(eachItem.id)}>Save</button>
                <button onClick={() => setEditTodo(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <li>{eachItem.text}</li>
                <li>{eachItem.color}</li>
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
