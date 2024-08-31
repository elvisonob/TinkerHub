import './App.css';
import InputFile from './InputFile';
import AnotherComp from './AnotherComp';

const App = (props) => {
  return (
    <div>
      <InputFile title="One love" children="the peace maker">
        <AnotherComp />
      </InputFile>
    </div>
  );
};

export default App;
