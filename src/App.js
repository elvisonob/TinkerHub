import './App.css';
import { useReducer } from 'react';

import Digits from './Digits';
import OperationDigits from './OperationDigits';

const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case 'addFigure':
      // when blank, do not show operator!!

      if (state.currentOperand === '0') {
        return {
          currentOperand: `${state.currentOperand}`,
        };
      }

      if (state.previousOperand) {
        return {
          ...state,
          currentOperand: `${state.currentOperand}${payload}`,
        };
      }

      return { currentOperand: `${state.currentOperand}${payload}` };

    case 'addOperation':
      if (state.currentOperand) {
        return {
          previousOperand: `${state.currentOperand}`,
          operator: payload,
          currentOperand: '',
        };
      }
      return { operator: payload };

    case 'onEvaluate':
      return {
        ...state,
        previousOperand: null,
        operator: null,
        currentOperand: evaluate(state),
      };

    case 'deleteEverything':
      return { currentOperand: '', operator: '', previousOperand: '' };

    default:
      return state;
  }
};

// now i need to ensure that when equal-to button is clicked, it does the arithmetic

const evaluate = ({ currentOperand, operator, previousOperand }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return '';
  let computation = '';
  switch (operator) {
    case '+':
      computation = prev + current;
      break;

    case '-':
      computation = prev - current;
      break;

    case '/':
      computation = prev / current;
      break;

    case '*':
      computation = prev * current;
      break;
    default:
      return '';
  }
  return computation.toString();
};

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, {
    currentOperand: '',
    operator: '',
    previousOperand: '',
  });

  const onDelete = () => {
    dispatch({ type: 'deleteEverything' });
  };

  const onEvaluate = () => {
    dispatch({ type: 'onEvaluate' });
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {state.previousOperand} {state.operator}
        </div>
        <div className="current-operand">{state.currentOperand}</div>
      </div>
      <button className="span-two" onClick={onDelete}>
        AC
      </button>
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
      <button onClick={onEvaluate}>=</button>
    </div>
  );
};

export default App;
