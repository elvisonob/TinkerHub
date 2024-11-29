import { useSelector, useDispatch } from 'react-redux';
import { formActions } from './store/index';

const App = () => {
  const todoInput = useSelector((state) => state.todo);
  const todoContent = useSelector((state) => state.todoList);
  const dispatchFn = useDispatch();

  const onAddInput = (e) => {
    dispatchFn(formActions.addATodo(e.target.value));
  };

  const onHandleSubmit = (e) => {
    // include an id to todo
    e.preventDefault();
    if (todoInput.trim() === '') {
      return alert('Add a Todo');
    }

    /// Now, take the added todo and put in an array

    dispatchFn(formActions.onAddTodo({ id: Math.random(), text: todoInput }));
    dispatchFn(formActions.addATodo(''));
  };

  return (
    <div>
      <h1>TODO APP</h1>
      <h2>Add a todo</h2>
      <form onSubmit={onHandleSubmit}>
        <input type="text" id="text" value={todoInput} onChange={onAddInput} />
        <button>Enter</button>
      </form>

      <div>
        <h3>List of Todo</h3>
        {todoContent.length === 0 ? (
          <p>No todo added yet</p>
        ) : (
          <ul>
            {todoContent.map((eachTodo) => (
              <div key={eachTodo.id}>
                <li>{eachTodo.text}</li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
