import { useState } from 'react';
import './styles.css';

export const MoreOrLessAdv = () => {
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(0);

  const [result, setResult] = useState('');

  function compareNumbers(a, b) {

    a = parseInt(a);
    b = parseInt(b);

    if (a > b) {
      setResult('A jest większe od B');
    } else if (a < b) {
      setResult('A jest mniejsze od B');
    } else {
      setResult('A i B są takie same');
    }
  }

  function aChangeHandler(ev) {
    let a = ev.target.value;
    setValA(a);
    console.log('A = '.concat(a));
    // compareNumbers(10, 20);
    // compareNumbers(100, 20);
    // compareNumbers(1, 20);

    compareNumbers(a, valB);
  }

  function bChangeHandler(ev) {
    let b = ev.target.value;
    setValB(b);
    console.log('B = '.concat(b));

    compareNumbers(valA, b);
  }

  return (
    <div>
      <h1>Czy A jest większe od B?</h1>
      <input placeholder="A" type="number" onChange={aChangeHandler}></input>
      <br />
      <input placeholder="B" type="number" onChange={bChangeHandler}></input>
      <h2>
        {'A: '}
        {valA}
      </h2>
      <h2>
        {'B: '}
        {valB}
      </h2>
      <h3>{result}</h3>
    </div>
  );
};
