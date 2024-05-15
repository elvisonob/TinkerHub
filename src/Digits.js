import React, { useState } from 'react';

const Digits = () => {
  // when each of the below number is clicked, I would like it to show up
  // in the top2 screen page

  // so this means I take it from digits page after been clicked to
  //App.js digit page.

  // Next action
  // how do i capture the 'numbers'?

  const [options, setOptions] = useState('');

  const onNumberClick = (newNumber) => {
    setOptions(newNumber);
  };

  return (
    <div className=" numbersAndOperandsDisplay">
      <div className="empty">CE</div>
      <div className="divide">/</div>
      <div className="C">C</div>
      <div className="backspace">Back</div>
      <div className="seven" numbers="7" onClick={onNumberClick}>
        7
      </div>
      <div className="eight" numbers="8">
        8
      </div>
      <div className="nine" numbers="9">
        9
      </div>
      <div className="multiply" numbers="x">
        x
      </div>
      <div className="four" numbers="4">
        4
      </div>
      <div className="five" numbers="5">
        5
      </div>
      <div className="six" numbers="6">
        6
      </div>
      <div className="minus" numbers="-">
        -
      </div>
      <div className="one" numbers="1">
        1
      </div>
      <div className="two" numbers="2">
        2
      </div>
      <div className="three" numbers="3">
        3
      </div>
      <div className="plus" numbers="+">
        +
      </div>
      <div className="percent" numbers="%">
        %
      </div>
      <div className="zero" numbers="0">
        0
      </div>
      <div className="dot" numbers=".">
        .
      </div>
      <div className="equalTo" numbers="=">
        =
      </div>
    </div>
  );
};

export default Digits;
