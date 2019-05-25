
/**
 * Instructions:
 * `sum(numbers): Number`
 * Given an array of numbers, return a sum total of all the numbers.
 */
function sum (numbers) {

}

/**
 * Instructions:
 * `doubleNumbers(numbers): Array`
 * Given an array of numbers, return an array where each element is double its original value.
 */
function doubleNumbers (numbers) {

}

/**
 * Instructions:
 * `doubleCharacters(chars): Array`
 * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
 */
function doubleCharacters (chars) {

}

/**
 * Instructions:
 * `backwardsify(array): Array`
 * Reverse or flip the values in the array.
 */
function backwardsify (array) {

}

/**
 * Instructions:
 * `interleave(list1, list2): Array`
 * Should return a combined single array, with individual values alternating between list1 & list2.
 */
function interleave (list1, list2) {

}

/**
 * Instructions:
 * `makeRange(count, fillString): Array`
 * Return array of `count` length where each element is set to `fillString`
 */
function makeRange (count, fillString) {

}

/**
 * @tutorial
 * `countByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys. The value should be a Number, with the count of words with same starting character.
 *
 * @example
 *
 * const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
 * const result = groupByFirstLetter(input)
 * // result deep equals:
 * // {
 * //  c: 2, // cat + catzilla
 * //  k: 1,
 * //  f: 1
 * // }
 *
 */

function groupByFirstLetter() {

}

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////

// IGNORE: Test/Env Detection Stuff //
if (typeof exports !== 'undefined') {
  // Node/Non-browser test env
  module.exports = { sum, doubleCharacters,
    doubleNumbers,
    backwardsify,
    interleave, makeRange, groupByFirstLetter}
}

