import { useState, useMemo } from 'react';

function MemoLearning() {
  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(0);

  const magicNumber = useMemo(() => {
    console.log('calculating magic number');
    let m = 0;
    for (let i = 0; i < 999999999; i++) {
      m += i;
    }

    return m * counter;
  }, [counter]);

  console.log('render');

  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="magic-number">
        My magic number: {magicNumber}
        <button onClick={() => setCounter(counter + 1)}>
          Update magic number
        </button>
      </div>
    </div>
  );
}

export default MemoLearning;
