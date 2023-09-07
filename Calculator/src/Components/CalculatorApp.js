// CalculatorApp.js
import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';
import './CalculatorApp.css';
import {
  calculateExpression,
  clear,
  deleteLast,
  appendNumber,
  calculateLog,
  calculateSquare,
  calculateCube,
  calculateSquareRoot,
  calculateCubeRoot,
} from './Calculator';

export default function CalculatorApp() {
  const [expression, setExpression] = useState('');

  function handleButtonClick(buttonValue) {
    switch (buttonValue) {
      case '=':
        if (expression !== '') {
          const result = calculateExpression(expression);
          setExpression(result);
        }
        break;
      case 'AC':
        setExpression(clear());
        break;
      case 'DEL':
        setExpression(deleteLast(expression));
        break;
      case '(':
      case ')':
        setExpression(expression + buttonValue);
        break;
      case 'log':
        if (expression !== '') {
          const result = calculateLog(expression);
          setExpression(result);
        }
        break;
      case 'sq':
        if (expression !== '') {
          const result = calculateSquare(expression);
          setExpression(result);
        }
        break;
      case 'cu':
        if (expression !== '') {
          const result = calculateCube(expression);
          setExpression(result);
        }
        break;
      case 'sqrt':
        if (expression !== '') {
          const result = calculateSquareRoot(expression);
          setExpression(result);
        }
        break;
      case 'cbrt':
        if (expression !== '') {
          const result = calculateCubeRoot(expression);
          setExpression(result);
        }
        break;
      default:
        setExpression(appendNumber(expression, buttonValue));
        break;
    }
  }

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    '%','sqrt', 'cbrt',  
    '(', ')','sq','cu',
    'log','AC', 'DEL',
  ];

  return (
    <div className="calculator">
      <CalculatorDisplay currentOperand={expression} />
      <div className="buttons">
        {buttons.map((button) => (
          <CalculatorButton
            key={button}
            value={button}
            onClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
}
