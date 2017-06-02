// Function to transform the numbers from the keypad to possible words.
// Arrays are used to scan the solutions from one type to the other.

const t = {};

t.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0'];

t.characters = [
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

t.getCharactersFromNumber = function(numberToCheck) {
  return t.characters[t.numbers.indexOf(numberToCheck)];
}

t.mixWordsAndCharacters = function(words, characters) {
  if(words.length === 0) {
    return characters;
  }
  let newWords = [];
  let counter = 0;
  words.forEach(word => {
    characters.forEach(character => {
      newWords[counter] = word.concat(character);
      counter++
    })
  })
  return newWords;
}

t.getPossibleWordsFromNumbers = function(numbersToTransform) {
  let words = [];
  numbersToTransform.forEach(number => {
    if (t.numbers.indexOf(number) !== -1){
      words = t.mixWordsAndCharacters(words, t.getCharactersFromNumber(number));
    }
  })
  return words;
}

module.exports = t;
