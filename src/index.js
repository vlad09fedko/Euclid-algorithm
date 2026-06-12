'use strict';

function findGreatestCommonDivisor(a, b) {
  try {
    if (!Number.isFinite(a || b) || !Number.isInteger(a || b)) {
      throw TypeError('Data must be integer numbers.');
    }
    if ((a || b) <= 0) throw RangeError('Numbers must be positive.');
    if (b === 0) return a;
    return findGreatestCommonDivisor(b, a % b);
  } catch (error) {
    return `Error! ${error.message}`;
  }
}

console.log(`Result: ${findGreatestCommonDivisor(1239, 301)}`);
