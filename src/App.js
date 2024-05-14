import './App.css';

const App = () => {
  return (
    <div className="wholePage">
      <div className="calculator">
        <div className="calculatorProper">
          <div className="inputDisplay">
            <div className="top1">top1</div>
            <div className="top2">top2</div>
          </div>
          <div className="numbersAndOperandsDisplay">
            <div className="empty">empty</div>
            <div className="divide">/</div>
            <div className="C">C</div>
            <div className="backspace">Back</div>
            <div className="seven">7</div>
            <div className="eight">8</div>
            <div className="nine">9</div>
            <div className="multiply">x</div>
            <div className="four">4</div>
            <div className="five">5</div>
            <div className="six">6</div>
            <div className="minus">-</div>
            <div className="one">1</div>
            <div className="two">2</div>
            <div className="three">3</div>
            <div className="plus">+</div>
            <div className="percent">percent</div>
            <div className="zero">0</div>
            <div className="dot">.</div>
            <div className="equalTo">=</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
