const getFiniteNumbers = (array) =>
  array.filter((element) => Number.isFinite(element));

console.log(
  getFiniteNumbers([Infinity, 10, NaN, 13, '4', 5.2, 6, 71, 8, undefined])
);

const getFiniteNumbersV2 = (array) =>
  array.filter((element) => isFinite(element));
console.log(getFiniteNumbersV2([10, NaN, 13, '4', 5.2, 6, 71, 8, undefined]));

const getNaN = (array) => array.filter((element) => Number.isNaN(element));
console.log(
  getNaN([10, NaN, 'not a number', 13, '4', 5.2, 6, 71, 8, undefined])
);

const getNaNV2 = (array) => array.filter((element) => isNaN(element));
console.log(
  getNaNV2([10, NaN, 'not a number', 13, '4', 5.2, 6, 71, 8, undefined])
);

const getIntegers = (array) =>
  array.filter((element) => Number.isInteger(element));
console.log(
  getIntegers([10, NaN, 'not a number', 13, '4', 5.2, 6, 71, 8, undefined])
);
