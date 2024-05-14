import './App.css';
import React, { useState } from 'react';
import Digits from './Digits';

const App = () => {
  const [operand, setOperand] = useState(null);

  //When each number is clicked in the Digits.js page, the number attribute should be reflected in the Digit in App.js

  const onHandleClick = (number) => {
    setOperand(number);
  };
  return (
    <div className="wholePage">
      <div className="calculator">
        <div className="calculatorProper">
          <div className="inputDisplay">
            <div className="top1">top1</div>
            <div className="top2">{operand}</div>
          </div>
          <Digits onClick={() => onHandleClick('5')} numbers={operand} />
        </div>
      </div>
    </div>
  );
};

export default App;
