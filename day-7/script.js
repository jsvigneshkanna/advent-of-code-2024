const fs = require('fs')
const path = require('path')

function generateOperatorCombinations(operators, length) {
  /**
   * Generates all possible combinations of the given operators for the specified length.
   */
  if (length === 0) return [[]]
  const smallerCombinations = generateOperatorCombinations(operators, length - 1)
  const combinations = []
  for (const combination of smallerCombinations) {
    for (const operator of operators) {
      combinations.push([...combination, operator])
    }
  }
  return combinations
}

function evaluateExpression(numbers, operators) {
  /**
   * Evaluates the expression with the given numbers and operators left-to-right.
   */
  let result = numbers[0]
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '+') {
      result += numbers[i + 1]
    } else if (operators[i] === '*') {
      result *= numbers[i + 1]
    } else if (operators[i] === '||') {
      result = parseInt(result.toString() + numbers[i + 1].toString(), 10)
    }
  }
  return result
}

function isEquationValid(testValue, numbers) {
  /**
   * Checks if any operator combination for the numbers matches the test value.
   */
  const operatorCount = numbers.length - 1
  const operatorCombinations = generateOperatorCombinations(['+', '*', '||'], operatorCount)
  for (const operators of operatorCombinations) {
    if (evaluateExpression(numbers, operators) === testValue) {
      return true
    }
  }
  return false
}

function calculateTotalCalibrationResult(equations) {
  /**
   * Calculates the total calibration result for valid equations.
   */
  let total = 0
  for (const equation of equations) {
    const [testValueStr, numbersStr] = equation.split(':')
    const testValue = parseInt(testValueStr.trim(), 10)
    const numbers = numbersStr.trim().split(' ').map(Number)
    if (isEquationValid(testValue, numbers)) {
      total += testValue
    }
  }
  return total
}

const equations = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\n')

// Calculate and print the total calibration result
const totalResult = calculateTotalCalibrationResult(equations)
console.log('Total Calibration Result:', totalResult)
