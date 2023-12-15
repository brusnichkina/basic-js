const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  else {
  let result = arr.reduce((accumulator, currentValue, index) => {
    if (arr[index - 1] === '--discard-next') {
      return accumulator;
    };
    if (arr[index - 1] === '--double-next') {
      accumulator.push(arr[index]);
    };
    if (arr[index + 1] === '--double-prev') {
      accumulator.push(arr[index]);
    };
    if (arr[index + 1] === '--discard-prev') {
      return accumulator;
    };
    if (currentValue === '--discard-next' || currentValue === '--double-next' || currentValue === '--double-prev' || currentValue === '--discard-prev') {
      return accumulator;
    };
    accumulator.push(arr[index]);
    return accumulator;
  }, []);
  return result;
};
}
module.exports = {
  transform
};
