'use strict';

function findGreatestCommonDivisor(a, b) {
  try {
    if (typeof (a || b) !== 'number' || !Number.isFinite(a || b)) {
      throw TypeError('Data must be numbers!');
    }
    if ((a || b) <= 0) throw RangeError('Numbers must be positive!');
    if (b === 0) return a;
    return findGreatestCommonDivisor(b, a % b);
  } catch (error) {
    return error.message;
  }
}

console.log(`Result: ${findGreatestCommonDivisor(1239, 301)}`);
