import './App.css';
import React, { useState } from 'react';
import Digits from './Digits';

const App = () => {
  return (
    <div className="wholePage">
      <div className="calculator">
        <div className="calculatorProper">
          <div className="inputDisplay">
            <div className="top1">top1</div>
            <div className="top2">top2</div>
          </div>
          <Digits />
        </div>
      </div>
    </div>
  );
};

export default App;
