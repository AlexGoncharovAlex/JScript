import nowName, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should get squared numbers', () => {
  const result = getSquaredArray([1, 2, 3, 4]);
  expect(result).toEqual([1, 4, 9, 16]);
});

it('should keep odd numbers', () => {
  const result = getOddNumbers([1, 2, 4, 3, 3, 5]);
  expect(result).toEqual([1, 3, 3, 5]);
});

it('should get sum of numbers', () => {
  const result = nowName(5, 5);
  expect(result).toEqual(10);
});
