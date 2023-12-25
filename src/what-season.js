const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (!date) {
    return 'Unable to determine the time of year!';
  };

	if (date instanceof Date && date.toString === Object.getPrototypeOf(date).toString ) {
    let seasons = ['winter', 'spring', 'summer', 'autumn'];
    let month = date.getMonth() + 1;
    if (month === 12 || month <= 2) {
      return seasons[0];
    }
    else if (month >= 3 && month <= 5) {
      return seasons[1];
    }
    else if (month >= 6 && month <= 8) {
      return seasons[2];
    }
    else if (month >= 9 && month <= 11) {
      return seasons[3];
    };
	}
  else {
    throw Error('Invalid date!');
  };
}

module.exports = {
  getSeason
};
