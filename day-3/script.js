const fs = require('fs')
const path = require('path')

const findPuzzleAnswerDay3Part1 = () => {
  const inputText = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  // xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))

  const matches = [...inputText.matchAll(/mul\((\d+),(\d+)\)/g)]
  const products = matches.map(m => parseInt(m[1]) * parseInt(m[2]))
  const sum = products.reduce((acc, val) => acc + val, 0)

  return sum
}

const findPuzzleAnswerDay3Part2 = () => {
  const inputText = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8')
  // xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))

  return inputText
    .split('do()')
    .map(track => track.split("don't()")[0])
    .map(s => [...s.matchAll(/mul\((\d+),(\d+)\)/g)])
    .flat()
    .map(m => parseInt(m[1]) * parseInt(m[2]))
    .reduce((acc, val) => acc + val, 0)
}

// calling the function and logging the result
console.log(findPuzzleAnswerDay3Part2())

module.exports = { findPuzzleAnswerDay3Part1 }
