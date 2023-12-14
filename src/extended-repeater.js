const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  };
  if (!options.separator) {
    options.separator = '+';
  };
  if (!options.addition && options.addition !== false && options.addition !== null) {
    options.addition = '';
  };
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  };
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  };
    let result = '';
    for (let i = 0; i < options.repeatTimes; i++) {
    if (i < options.repeatTimes - 1) {
        result = result + str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition + options.separator;
    } 
    else {
        result = result + str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
    };
  };
 return result;
}

module.exports = {
  repeater
};
