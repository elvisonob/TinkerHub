import './App.css';
import { useReducer } from 'react';

import Digits from './Digits';
import OperationDigits from './OperationDigits';

const reducerFn = (state, { type, payload }) => {
  switch (type) {
    case 'addFigure':
      // when blank, do not show operator!!

      if (payload.numbers === '0' && state.currentOperand === '0') {
        return state;
      }

      //

      if (state.currentOperand.includes('.') && payload.numbers === '.') {
        return state;
      }

      // if state.currentoperand already includes '0.' and next payload is 0, include return state

      if (state.previousOperand !== null) {
        return {
          ...state,
          currentOperand: `${state.currentOperand}${payload.numbers}`,
        };
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.numbers}`,
      };

    case 'addOperation':
      //if all states are null, operation key shouldn't show

      if (state.currentOperand === null && state.previousOperand === null) {
        return state;
      }

      //when i have all inputs and i click operator, previousOperand should evaluate

      // if (state.currentOperand !== null) {
      //   return {
      //     previousOperand: `${state.currentOperand}`,
      //     operator: payload.operation,
      //     currentOperand: '',
      //   };
      // }

      // if (
      //   state.currentOperand !== null &&
      //   state.operator !== null &&
      //   state.previousOperand !== null
      // ) {
      //   return {
      //     ...state,
      //     operator: payload.operation,
      //     previousOperand: evaluate(state),
      //   };
      // }

      return state;

    case 'onEvaluate':
      return {
        ...state,
        previousOperand: null,
        operator: null,
        currentOperand: evaluate(state),
      };

    case 'deleteEverything':
      return { currentOperand: '', operator: '', previousOperand: '' };

    case 'delete':
      return {
        currentOperand: state.currentOperand.slice(0, -1),
      };

    default:
      return state;
  }
};

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
