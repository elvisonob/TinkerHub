import './App.css';
import { useReducer } from 'react';

import Digits from './Digits';
import OperationDigits from './OperationDigits';

const reducerFn = (
  //First task is to ensure that each clicked word appears in the calculator display page
  //now, i need to make the digits reusable
  //now, i need to implement the dispatch in the reusable
  //now, do the operation digits
  // if the inputs are blank, do not show any operator
  state,
  { type, payload }
) => {
  switch (type) {
    case 'addFigure':
      return { ...state, currentOperand: `${payload}` };

    case 'addOperation':
      return { operator: payload };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, {
    currentOperand: '',
    operator: '',
    previousOperand: '',
  });

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {state.previousOperand} {state.operator}
        </div>
        <div className="current-operand">{state.currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationDigits operation="/" dispatch={dispatch} />
      <Digits numbers="1" dispatch={dispatch} />
      <Digits numbers="2" dispatch={dispatch} />
      <Digits numbers="3" dispatch={dispatch} />
      <OperationDigits operation="*" dispatch={dispatch} />
      <Digits numbers="4" dispatch={dispatch} />
      <Digits numbers="5" dispatch={dispatch} />
      <Digits numbers="6" dispatch={dispatch} />
      <OperationDigits operation="+" dispatch={dispatch} />
      <Digits numbers="7" dispatch={dispatch} />
      <Digits numbers="8" dispatch={dispatch} />
      <Digits numbers="9" dispatch={dispatch} />
      <OperationDigits operation="-" dispatch={dispatch} />
      <button>.</button>
      <Digits numbers="0" dispatch={dispatch} />
      <OperationDigits operation="=" />
    </div>
  );
};

export default App;
