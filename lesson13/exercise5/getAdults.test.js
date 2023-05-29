import { getAdults } from './getAdults.js';

it('should get adults', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get adults', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('should get empty object', () => {
  const result = getAdults({});
  expect(result).toEqual(result);
});
