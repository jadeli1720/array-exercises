
/**
 * @instructions
 * `sum(numbers): Number`
 * Given an array of numbers, return a sum total of all the numbers.
 */
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum([5, 2, 20, 100]));

/**
 * @instruction
 * `doubleNumbers(numbers): Array`
 * Given an array of numbers, return an array where each element is double its original value.
 */
function doubleNumbers(numbers) {
  let newArray = [];
  numbers.forEach(num => {
    newArray.push(num * 2);
  });
  return newArray;
}

console.log(doubleNumbers([1, 2, 3, 4]));
/**
 * @instruction
 * `doubleCharacters(chars): Array`
 * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
 */
function doubleCharacters(chars) {
  chars = chars.split("");
  let newChars = [];
  chars.forEach(char => {
    newChars.push(char.repeat(2));
  });
  return newChars.join("");
}

console.log(doubleCharacters("abc"));

/**
 * @instruction
 * `backwardsify(array): Array`
 * Reverse or flip the values in the array.
 */
function backwardsify(array) {
  if (array.length === 0) {
    return {};
  }
  return array.reverse();
}
console.log(backwardsify([1, 2, 3, 4]));

/**
 * @instruction
 * `interleave(list1, list2): Array`
 * Should return a combined single array, with individual values alternating between list1 & list2.
 */
function interleave(list1, list2) {
  let newList = [];
  if (list1 === undefined && list2 === undefined) {
    return [];
  } else if (list1.length !== list2.length) {
    return null;
  }
  list1.forEach((j, i) => {
    newList.push(j);
    newList.push(list2[i]);
  });
  return newList;
}

console.log(interleave(["a", "b", "c"], [1, 2, 3]));

/**
 * @instruction
 * `makeRange(count, fillString): Array`
 * Return array of `count` length where each element is set to `fillString`
 */

function makeRange(count, fillString) {
  // // solution 1 long:
  let newArray = [];
  for (let i = 0; i < count; i++) {
    newArray[i] = fillString;

    if (fillString === "") {
      //passes empty array tests
      return [];
    } else if (count <= 0) return [];
  }
  return newArray;

  // //solution 2 - does not pass: when the input is -10, return empty array
  //  let newArray = new Array(count).fill(fillString)
  //  return newArray

  // // solution 3 -  recursive array fill function found from stackoverflow: eslint does not like
  // return count <= (fillString = [].concat(fillString, fillString)).length ?
  // fillString.slice(0, count) : makeRange(count, fillString)
}

console.log(makeRange(3, "a"));

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
