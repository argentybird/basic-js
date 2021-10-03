import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
    if (date === undefined) throw new Error("Invalid date!");
    if (date.hasOwnProperty('getMonth')) throw new Error("Invalid date!");

    let month = date.getMonth() + 1;
    if (month < 3 || month == 12) return 'winter';
    if (month > 2 && month < 5) return 'spring';
    if (month > 5 && month < 9) return 'summer';
    if (month > 8 && month < 12) return 'autumn';

    throw new Error("Invalid date!")
};