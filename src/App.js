import './App.css';
import { useReducer } from 'react';

import Digits from './Digits';
import OperationDigits from './OperationDigits';

const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case 'addFigure':
      if (payload.numbers === '0' && state.currentOperand === '0') {
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
          ...state,
          operator: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      if (state.currentOperand == null) {
        return { ...state, operator: payload.operation };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operator: payload.operation,
        currentOperand: null,
      };

    case 'onEvaluate':
      if (
        state.previousOperand == null ||
        state.currentOperand == null ||
        state.operator == null
      ) {
        return state;
      }
      return {
        ...state,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };

    case 'deleteEverything':
      return {};

    default:
      return state;
  }
};

const evaluate = ({ previousOperand, currentOperand, operator }) => {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  if (isNaN(curr) || isNaN(prev)) return 'chains';

  let computation = '';

  switch (operator) {
    case '+':
      computation = prev + curr;
      break;

    case '-':
      computation = prev - curr;
      break;

    case '*':
      computation = prev * curr;
      break;

    case '/':
      computation = prev / curr;
      break;

    default:
  }

  //will take off the string to see what happens
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
