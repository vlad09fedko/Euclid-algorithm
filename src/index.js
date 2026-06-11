'use strict';

function findGreatestCommonDivisor(a, b) {
  if (!Number.isFinite(a || b)) throw TypeError('Data must be numbers!');
  if (b === 0) return a;
  return findGreatestCommonDivisor(b, a % b);
}

try {
  const start = Date.now();
  console.log(findGreatestCommonDivisor(1239, 301));
  console.log(`Lead time: ${Date.now() - start} ms`);
} catch (error) {
  console.error(error.message);
}
