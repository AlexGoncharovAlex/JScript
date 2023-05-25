'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const numPrec = 10 ** prec;
  let arrayNumbers = [];
  arrayNumbers = [
    Math.floor(num * numPrec) / numPrec,
    Math.trunc(num * numPrec) / numPrec,
    Math.ceil(num * numPrec) / numPrec,
    Math.round(num * numPrec) / numPrec,
    +num.toFixed(prec),
  ];
  return arrayNumbers;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(-11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
console.log(superRound(-6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
