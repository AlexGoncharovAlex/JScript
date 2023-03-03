/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const resultOfIncrease = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const num of arr) {
    if (num % 2 === 0) {
      resultOfIncrease.push(num + delta);
    }
    if (num % 2 === 1) {
      resultOfIncrease.push(num);
    }
  }

  return resultOfIncrease;
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl(' is not array'));
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
console.log(increaseEvenEl(' is not array'));
console.log(increaseEvenEl(' is not array'));
// якщо число парне то збільшити на delta
