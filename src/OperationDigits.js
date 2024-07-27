const OperationDigits = ({ dispatch, operation }) => {
  return (
    <div
      className="calculator-grid"
      onClick={() => dispatch({ type: 'addOperation', payload: { operation } })}
    >
      {operation}
    </div>
  );
};

export default OperationDigits;
