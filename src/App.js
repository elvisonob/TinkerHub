import { useReducer } from 'react';

const App = () => {
  const reducerFn = (state, { type, payload }) => {
    //take the content written in a form and console log it

    switch (type) {
      case 'addInput':
        return { ...state, name: payload };

      case 'addLocation':
        return { ...state, location: payload };

      case 'submit':
        console.log(state.name, state.location);
        return { ...state, name: '', location: '' };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducerFn, {
    name: '',
    location: '',
  });

  const onNameInput = (e) => {
    dispatch({ type: 'addInput', payload: e.target.value });
  };

  const onLocationInput = (e) => {
    dispatch({ type: 'addLocation', payload: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'submit' });
  };

  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={onHandleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          password="name"
          onChange={onNameInput}
          value={state.name}
        />
        <label>Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={onLocationInput}
          value={state.location}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
