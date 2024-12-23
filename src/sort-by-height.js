const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!arr) {
    throw new NotImplementedError('Array is not provided.');
  }

  const sortedHeights = arr.filter(height => height !== -1).sort((a, b) => a - b);

  let index = 0;
  const result = [];

  for (const value of arr) {
    if (value === -1) {
      result.push(-1);
    } else {
      result.push(sortedHeights[index]);
      index++;
    }
  }

  return result;
}


module.exports = {
  sortByHeight
};
