const fs = require('fs')
const path = require('path')

const findPuzzleAnswerDay2Part1 = () => {
  const inputFile = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = inputFile.split('\n')
  // 7 6 4 2 1

  let puzzleAnswer = 0

  lines.forEach(line => {
    const levels = line.split(' ')
    const isIncreasing = parseInt(levels[1]) > parseInt(levels[0])
    let isValidLine = true

    for (let index = 1; index < levels.length; index++) {
      const firstNum = parseInt(levels[index - 1])
      const secondNum = parseInt(levels[index])
      const difference = Math.abs(secondNum - firstNum)

      if (difference <= 3 && difference >= 1 && secondNum > firstNum === isIncreasing) {
        continue
      } else {
        isValidLine = false
        break
      }
    }

    if (isValidLine) {
      puzzleAnswer++
    }
  })

  return puzzleAnswer
}

const findPuzzleAnswerDay2Part2 = () => {
  const inputFile = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  const lines = inputFile.split('\n')
  // 7 6 4 2 1

  let puzzleAnswer = 0

  lines.forEach(line => {
    const levels = line.split(' ').map(Number)
    if (isSafe(levels)) {
      puzzleAnswer++
    }
  })

  return puzzleAnswer
}

function isSafe(row, canRemove = true) {
  if (canRemove) {
    // Try removing each level and check if it becomes safe
    for (let i = 0; i < row.length; i++) {
      let newRow = [...row.slice(0, i), ...row.slice(i + 1)]
      if (checkIncreases(newRow)) {
        return true
      }
    }
  }

  // Check the original row
  return checkIncreases(row)
}

function checkIncreases(row) {
  let inc = row.slice(1).map((value, index) => value - row[index])
  let allPositive = inc.every(val => val >= 1 && val <= 3)
  let allNegative = inc.every(val => val <= -1 && val >= -3)
  return allPositive || allNegative
}

// calling the function and logging the result
console.log(findPuzzleAnswerDay2Part2())

module.exports = { findPuzzleAnswerDay2Part1, findPuzzleAnswerDay2Part2 }
