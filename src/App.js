import './App.css';
import { useReducer } from 'react';

import Digits from './Digits';
import OperationDigits from './OperationDigits';

const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case 'addFigure':
      if (state.overWrite) {
        return {
          ...state,
          currentOperand: payload.numbers,
          overWrite: false,
        };
      }
      if (state.currentOperand === '0' && payload.numbers === '0') {
        return state;
      }

      // if currentOperand is null, and '.' is clicked, it should return state

      if (state.currentOperand == null && payload.numbers === '.') {
        return state;
      }
      if (payload.numbers === '.' && state.currentOperand.includes('.')) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.numbers}`,
      };

    case 'addOperation':
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.previousOperand == null) {
        return {
          previousOperand: state.currentOperand,
          operator: payload.operation,
          currentOperand: null,
        };
      }

      if (
        state.currentOperand !== null &&
        state.previousOperand !== null &&
        state.operator !== null
      ) {
        return {
          ...state,
          previousOperand: evaluate(state),
          operator: payload.operation,
          currentOperand: null,
        };
      }
      return {
        ...state,
        operator: payload.operation,
      };

    case 'onEvaluate':
      // if either previousOperand is null or currentOperand is null, return state

      if (state.previousOperand == null || state.currentOperand == null) {
        return state;
      }
      return {
        currentOperand: evaluate(state),
        overWrite: true,
        previousOperand: null,
        operator: null,
      };

    case 'delete':
      if (state.overWrite) {
        return { ...state, currentOperand: null };
      }

      return {
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case 'deleteEverything':
      return {};

    default:
  }
};

const evaluate = ({ previousOperand, operator, currentOperand }) => {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return;

  let computation = '';
  switch (operator) {
    case '+':
      computation = prev + curr;
      break;

    case '-':
      computation = prev - curr;
      break;

    case '/':
      computation = prev / curr;
      break;

    case '*':
      computation = prev * curr;
      break;

    default:
  }
  return computation.toString();
};

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, {});

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
      <button
        onClick={() => {
          dispatch({ type: 'delete' });
        }}
      >
        DEL
      </button>
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
      <Digits numbers="." dispatch={dispatch} />
      <Digits numbers="0" dispatch={dispatch} />
      <button onClick={onEvaluate}>=</button>
    </div>
  );
};

export default App;
