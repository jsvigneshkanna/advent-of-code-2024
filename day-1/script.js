const os = require('os');
const fs = require('fs');
const path = require('path');



const findPuzzleAnswerDay1Part1 = () => {
    const inputFile = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');    
    const lines = inputFile.split('\n');
    const firstList = []
    const secondList = []

    // 1. get the numbers to the lists
    for (let i = 0; i < lines.length; i++) {        
        // destructuring the array
        const [firstNum, secondNum] = lines[i].trim().split(/\s+/).map(Number);
        
        firstList.push(firstNum)
        secondList.push(secondNum)
    }

    // 2. sort both the lists
    firstList.sort((first, sec)=> first - sec)
    secondList.sort((first, sec)=> first - sec)

    let puzzleAnswer = 0
    for (let i = 0; i < firstList.length; i++) {
        const difference = Math.abs(firstList[i] - secondList[i])
        puzzleAnswer += difference
    }

    return puzzleAnswer
}

const findPuzzleAnswerDay1Part2 = () => {
    const inputFile = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8');    
    const lines = inputFile.split('\n');
    const firstList = []
    const secondList = []

    // 1. get the numbers to the lists
    for (let i = 0; i < lines.length; i++) {
        // destructuring the array
        const [firstNum, secondNum] = lines[i].trim().split(/\s+/).map(Number);
        
        firstList.push(firstNum)
        secondList.push(secondNum)
    }

    let puzzleAnswer = 0
    for (let i = 0; i < firstList.length; i++) {
        const firstNum = firstList[i]
        const occurence = secondList.filter(num => num === firstNum).length
        puzzleAnswer += (occurence* firstNum)
    }

    return puzzleAnswer
}

// calling the function and logging the result
console.log(findPuzzleAnswerDay1Part2());

module.exports = {findPuzzleAnswerDay1Part1};