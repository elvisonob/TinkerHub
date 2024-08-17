import React, { useState } from 'react';

const InputTodo = () => {
  //take the text input and send it to the list
  const [textInput, setTextInput] = useState('');

  const onTextInput = (e) => {
    setTextInput(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(textInput);
    setTextInput('');
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
