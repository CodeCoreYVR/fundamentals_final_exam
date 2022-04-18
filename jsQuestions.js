// 1. Sentence Smash 

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example:
['hello', 'world', 'this', 'is', 'great'] // =>  'hello world this is great'

function sentenceSmash(arr) {
  return arr.join(" ").trim()
}

// 2. Rock Paper Scissors

// Let's play! Write a function that will return which player won! In case of a draw return Draw!.

// Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

const rps = (p1, p2) => {
  let gameResult
  if (p1 === p2 ){
    gameResult = "Draw!"
  } else if (p1 === "scissors" && p2 === "paper") {
    gameResult = "Player 1 won!"
  } else if (p1 === "paper" && p2 === "rock") {
    gameResult = "Player 1 won!"
  } else if (p1 === "rock" && p2 === "scissors") {
    gameResult = "Player 1 won!"
  } else {
    gameResult = "Player 2 won!"
  }
  return gameResult
};