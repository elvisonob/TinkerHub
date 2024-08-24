import './App.css';
import InputTodo from './InputTodo';
import ListOfTodos from './ListOfTodo';
import { TodoCtxProvider } from './store/Context';

const App = () => {
  return (
    <TodoCtxProvider>
      <div>
        <h1>TODO APP</h1>
        <InputTodo />
        <ListOfTodos />
      </div>
    </TodoCtxProvider>
  );
};

export default App;
