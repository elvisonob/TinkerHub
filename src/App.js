import { useReducer } from 'react';

const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case 'addName':
      return { ...state, name: payload };

    case 'addLocation':
      return { ...state, location: payload };

    case 'submit':
      console.log(state.name, state.location);
      return { name: '', location: '' };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, {
    name: '',
    location: '',
  });

  const onHandleName = (e) => {
    dispatch({ type: 'addName', payload: e.target.value });
  };

  const onHandleLocation = (e) => {
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
          onChange={onHandleName}
          value={state.name}
        />
        <label>Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={onHandleLocation}
          value={state.location}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
