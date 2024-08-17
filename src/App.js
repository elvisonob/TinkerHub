import './App.css';
import InputTodo from './InputTodo';
import ListOfTodos from './ListOfTodo';

const App = () => {
  return (
    <div>
      <h1>TODO APP</h1>
      <InputTodo />
      <ListOfTodos />
    </div>
  );
};

export default App;
