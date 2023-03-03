/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrayNew = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const num of arr) {
    arrayNew.push(num * num);
  }
  return arrayNew;
}
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
console.log(squareArray([1])); // ==> [1]
console.log(squareArray('array'));

// створення масива в квадраті
