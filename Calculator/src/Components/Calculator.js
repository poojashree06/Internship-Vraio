import * as math from 'mathjs';

export function calculateExpression(expression) {
  try {
    const result = math.evaluate(expression);
    return result.toString();
  } catch (error) {
    return 'Error';
  }
}

export function clear() {
  return '';
}

export function deleteLast(currentOperand) {
  return currentOperand.slice(0, -1);
}

export function appendNumber(currentOperand, number) {
  if (number === '.' && currentOperand.includes('.')) return currentOperand;
  const newOperand = currentOperand + number;
  return newOperand;
}

export function calculateLog(currentOperand) {
  try {
    const parsedOperand = parseFloat(currentOperand);
    if (!isNaN(parsedOperand) && parsedOperand > 0) {
      const result = math.log10(parsedOperand);
      return result.toString();
    } else {
      return 'Error';
    }
  } catch (error) {
    return 'Error';
  }
}

export function calculateSquare(currentOperand) {
  try {
    const result = math.square(parseFloat(currentOperand));
    return result.toString();
  } catch (error) {
    return 'Error';
  }
}

export function calculateCube(currentOperand) {
  try {
    const result = math.cube(parseFloat(currentOperand));
    return result.toString();
  } catch (error) {
    return 'Error';
  }
}

export function calculateSquareRoot(currentOperand) {
  try {
    const result = math.sqrt(parseFloat(currentOperand));
    return result.toString();
  } catch (error) {
    return 'Error';
  }
}

export function calculateCubeRoot(currentOperand) {
  try {
    const result = math.cbrt(parseFloat(currentOperand));
    return result.toString();
  } catch (error) {
    return 'Error';
  }
}
