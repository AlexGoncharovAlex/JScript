import { reversArray } from './reversArray';

it('should name of function is reversArray', () => {
  const result = reversArray;
  expect(result).toEqual(reversArray);
});

it('should check if array is array', () => {
  const result = reversArray([9, 7, 6, 4, 3, 1, 0]);
  expect(result).toEqual(result);
});

it('shoud revers array', () => {
  const result = reversArray([9, 7, 6, 4, 3, 1, 0]);
  expect(result).toEqual([0, 1, 3, 4, 6, 7, 9]);
});
