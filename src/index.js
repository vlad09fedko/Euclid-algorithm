'use strict';


function findGreatestCommonDivisor(a, b) {
  if (b === 0) return a;
  return findGreatestCommonDivisor(b, a % b);
}

const start = Date.now();
console.log(findGreatestCommonDivisor(1239, 301));
console.log(`Lead time: ${Date.now() - start} ms`);
