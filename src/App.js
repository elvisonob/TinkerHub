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

    case 'deleteEverything':
      return { currentOperand: 'michael' };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, {});

  const onDelete = () => {
    dispatch({ type: 'deleteEverything' });
  };

  const onEvaluate = () => {
    dispatch({ type: 'onEvaluate' });
  };

  console.log(typeof state.previousOperand);

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
