import React from 'react';

export default function CalculatorButton({ value, onClick }) {
  return (
    <button onClick={() => onClick(value)}>{value}</button>
  );
}
