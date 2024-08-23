import React, { useState } from 'react';

const InputTodo = (props) => {
  const [textInput, setTextInput] = useState('');

  const onTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (textInput.trim() !== '') {
      props.onAddTodo(textInput);
      setTextInput('');
    }
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>Add a Todo </label>
        <input type="text" id="text" onChange={onTextInput} value={textInput} />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default InputTodo;
