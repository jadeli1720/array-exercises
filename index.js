
/**
 * @instructions
 * `sum(numbers): Number`
 * Given an array of numbers, return a sum total of all the numbers.
 */
// My solution:
function sum(numbers) {
  //   let total = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     total += numbers[i];
  //   }
  //   return total;

  //solution using reduce:
  return numbers.reduce((acc, num) => {
    return acc + num;
  }, 0);
}

console.log(sum([5, 2, 20, 100]));

/**
 * @instruction
 * `doubleNumbers(numbers): Array`
 * Given an array of numbers, return an array where each element is double its original value.
 */

function doubleNumbers(numbers) {
  //my solution:
  // let newArray = [];
  // numbers.forEach(num => {
  //   newArray.push(num * 2);
  // });
  // return newArray;

  // map solution:
  return numbers.map(num => num * 2);
}

console.log(doubleNumbers([1, 2, 3, 4]));
/**
 * @instruction
 * `doubleCharacters(chars): Array`
 * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
 */
function doubleCharacters(chars) {
  //my solution:
  chars = chars.split("");
  let newChars = [];
  chars.forEach(char => {
    newChars.push(char.repeat(2));
  });
  return newChars.join("");

  //solution 2:
  // return chars.split('').map(c => c + c).join('')// not as optimal

  //solution 3:
  // return chars.split('').reduce((acc, c) => acc + c + c, '');
}

console.log(doubleCharacters("abc"));

/**
 * @instruction
 * `backwardsify(array): Array`
 * Reverse or flip the values in the array.
 */
function backwardsify(array) {
//my solution
  // if (array.length === 0) {
  //   return {};
  // }
  // return array.reverse();
  // solution 2 using terenary if statement expression
  return array.length === 0 ? {} : array.reverse();
  // (expression) ? true branch : false branch;
}
console.log(backwardsify([1, 2, 3, 4]));

/**
 * @instruction
 * `interleave(list1, list2): Array`
 * Should return a combined single array, with individual values alternating between list1 & list2.
 */
function interleave(list1, list2) {
  //my solution:
  // let newList = [];
  // if (list1 === undefined && list2 === undefined) {
  //   return [];
  // } else if (list1.length !== list2.length) {
  //   return null;
  // }
  // list1.forEach((elem, index) => {
  //   newList.push(elem);
  //   newList.push(list2[index]);
  // });
  // return newList;
  
  // solution 2: similar just combining

  if (list1.length === list2.length) {
    let newList = [];
    list1.forEach((elem, index) => {
        newList.push(elem);
        newList.push(list2[index]);
      });
      return newList;
    } else {
      return null;
    }
}
console.log(interleave(["a", "b", "c"], [1, 2, 3]));

/**
 * @instruction
 * `makeRange(count, fillString): Array`
 * Return array of `count` length where each element is set to `fillString`
 */

function makeRange(count, fillString) {
  // // solution 1 long:
  // let newArray = [];
  // for (let i = 0; i < count; i++) {
  //   newArray[i] = fillString;

  //   if (fillString === "") {
  //     //passes empty array tests
  //     return [];
  //   } else if (count <= 0) return [];
  // }
  // return newArray;

  // //solution 2 - does not pass: when the input is -10, return empty array
  //  let newArray = new Array(count).fill(fillString)
  //  return newArray

  // // solution 2a - fixes above problem using terenary statement:
  return count < 0 ? [] : new Array(count).fill(fillString);
  
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
//freq = frequency object = accumulator
function countByFirstLetter(words) {
  return words.reduce((freq, word) => {
    const firstLetter = word[0].toLowerCase()//step 2
    //or statement
    freq[firstLetter] = (freq[firstLetter] || 0) + 1
    return freq
    //long way below
    // if (firstLetter in freq) {
    //   freq[firstLetter] ++
    // } else {
    //   freq[firstLetter] = 1//step 3
    // }
    // return freq
  }, {});//step 1
  // ^ 1st step: set the intial vaulue of frequency to be an empty object = {}
  //2nd: in each case of this word, get its first letter set it to lower case
  //3rd: increment the value and frequency that that ^ occurs in
}

const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
console.log(countByFirstLetter(input))

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
