import './App.css';
const InputFile = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>

      <div className="style">{props.children}</div>
    </div>
  );
};

export default InputFile;
