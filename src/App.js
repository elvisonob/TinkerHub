import { useSelector, useDispatch } from 'react-redux';
import { formActions } from './store/index';

const App = () => {
  const todoInput = useSelector((state) => state.todo);
  const todoContent = useSelector((state) => state.todoList);
  const dispatchFn = useDispatch();

  const onAddInput = (e) => {
    e.preventDefault();
    dispatchFn(formActions.addATodo(e.target.value));
  };

  return (
    <div>
      <h1>TODO APP</h1>
      <h2>Add a todo</h2>
      <form>
        <input type="text" id="text" value={todoInput} onChange={onAddInput} />
      </form>
      <button
        onClick={() => {
          dispatchFn(formActions.onSend());
        }}
      >
        Enter
      </button>
      <div>
        <h3>List of Todo</h3>
        {todoContent.length === 0 ? (
          <p>No todo added yet</p>
        ) : (
          <ul>
            {todoContent.map((eachTodo) => (
              <div>
                <li>{eachTodo}</li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
