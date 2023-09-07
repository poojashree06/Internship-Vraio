import React from 'react';

export default function CalculatorDisplay({ currentOperand }) {
  return (
    <div className="output">
      <div className="current-operation">{currentOperand}</div>
    </div>
  );
}
