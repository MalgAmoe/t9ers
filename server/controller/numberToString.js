// Function to transform the numbers from the keypad to possible words.
// Arrays are used to scan the solutions from one type to the other.

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0'];

const characters = [
  ['.', ',', '?', '!'],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
  ['+', '-', '*', '/'],
  [' ']
];

function getCharactersFromNumber(numberToCheck) {
  return characters[numbers.indexOf(numberToCheck)]
}



// export default function(numbersString) {
//   const numbers = number.split('');
//   const words = numbers.map(numbers => {
//     let possibleWords =
//   })
// }

console.log(getCharactersFromNumber('2'));
