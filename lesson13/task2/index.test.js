import getSum, { getSquaredNumbers, getOddNumber } from './calculator';
it('should get squared numbers', () => {
  const result = getSquaredNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
  const result = getOddNumber([1, 2, 3, 4, 5, 6, 7]);
  expect(result).toEqual([1, 3, 5, 7]);
});
it('should get sum of number', () => {
  const result = getSum(8, 4);
  expect(result).toEqual(12);
});
