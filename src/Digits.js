const Digits = ({ numbers, dispatch }) => {
  return (
    <div
      className="calculator-grid"
      onClick={() => dispatch({ type: 'addFigure', payload: numbers })}
    >
      {numbers}
    </div>
  );
};

export default Digits;
