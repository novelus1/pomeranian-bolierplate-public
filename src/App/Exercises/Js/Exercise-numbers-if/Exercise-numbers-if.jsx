import './styles.css';
import React from 'react';

export function Exercise() {
  let a = 5;
  let b = 2;

  const addResult = a + b;
  const substResult = a - b;
  const multiplyResult = a * b;
  const divideResult = a / b;
  const moduloResult = a % b;
  const powerResult = a ** b;

  //a = a + 1;
  a += 1;

  //a = a - 3
  a -= 1;

  // a *= 1
  // a /= 1

  const result1 = a > b;
  const result2 = a < b;
  const result3 = a <= b;
  const result4 = a <= b;
  const result5 = a === b;

  return (
    <>
      <div>{addResult}</div>
      <div>{substResult}</div>
      <div>{multiplyResult}</div>
      <div>{divideResult}</div>
      <div>{moduloResult}</div>
      <div>{powerResult}</div>
    </>
  );
}
