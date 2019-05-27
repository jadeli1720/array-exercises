/*
* 3 Methods of dealing with arrays are included below:
*/

// Basic mode: for-loop
function sum (numbers) {
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i]
  }
  return total
}

// Medium: Array Methods (.reduce)
function sum (numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}

// Hard mode: recursion
function sum (numbers, total = 0) {
  if (!Array.isArray(numbers)) return 0
  if (numbers.length === 0) return total
  if (numbers.length >= 1) {
    total = total + numbers.pop()
    return sum(numbers, total)
  }
}

/**
 * @instruction
 * `doubleNumbers(numbers): Array`
 * Given an array of numbers, return an array where each element is double its original value.
 */
function doubleNumbers (numbers) {
  // TODO: Add your solution here.
}

/**
 * @instruction
 * `doubleCharacters(chars): Array`
 * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
 */
function doubleCharacters (chars) {
  // TODO: Add your solution here.
}

/**
 * @instruction
 * `backwardsify(array): Array`
 * Reverse or flip the values in the array.
 */
function backwardsify (array) {
  // TODO: Add your solution here.
}

/**
 * @instruction
 * `interleave(list1, list2): Array`
 * Should return a combined single array, with individual values alternating between list1 & list2.
 */
function interleave (list1, list2) {
  // TODO: Add your solution here.
}

/**
 * @instruction
 * `makeRange(count, fillString): Array`
 * Return array of `count` length where each element is set to `fillString`
 */
function makeRange (count, fillString) {
  // TODO: Add your solution here.
}

/**
 * @instuction
 * `countByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys. The value should be a Number, with the count of words with same starting character.
 *
 * @example
 *
 * const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
 * countByFirstLetter(input)
 * // will return:
 * // {
 * //  c: 2, // cat + catzilla
 * //  k: 1, // kitty
 * //  f: 1  // fluffykins
 * // }
 */

function countByFirstLetter (words) {
  // TODO: Add your solution here.
}

/**
 * @instructions
 * `groupByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys.
 * The key value should be an array with only the words sharing a starting character.
 *
 * @example
 *
 * const input = ['Cat', 'Kitty', 'catzilla', 'fluffykins']
 * const result = groupByFirstLetter(input)
 * // result deep equals:
 * // {
 * //  c: ['cat', 'catzilla'],
 * //  k: ['kitty'],
 * //  f: ['fluffykins']
 * // }
 *
 */

function groupByFirstLetter (words) {
  // TODO: Add your solution here.
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////

if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = {
    sum,
    doubleCharacters,
    doubleNumbers,
    backwardsify,
    interleave,
    makeRange,
    countByFirstLetter,
    groupByFirstLetter
  }
}
