const OperationDigits = (props) => {
  return (
    <div
      className="calculator-grid"
      onClick={() =>
        props.dispatch({ type: 'addOperation', payload: props.operation })
      }
    >
      {props.operation}
    </div>
  );
};

export default OperationDigits;
