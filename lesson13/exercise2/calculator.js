export const getSquaredArray = (array) => array.map((num) => num * num);
// getSquaredArray([1, 2, 3, 4]);

export const getOddNumbers = (array) => array.filter((num) => num % 2 === 1);
// getOddNumbers([1, 2, 3, 3, 4, 5]);

export default (a, b) => a + b;
