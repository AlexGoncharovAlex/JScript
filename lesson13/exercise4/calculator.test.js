import { calc } from './calculator';
it('should check expresion', () => {
  const result = calc(!String);
  expect(result).toEqual(null);
});

it('should get sum of addition', () => {
  const result = calc(['5', '+', '5']);
  expect(result).toEqual(result);
});

it('should get sum of addition', () => {
  const result = calc(['5', '-', '5']);
  expect(result).toEqual(result);
});

it('should get sum of addition', () => {
  const result = calc(['5', '*', '5']);
  expect(result).toEqual(result);
});

it('should get sum of addition', () => {
  const result = calc(['5', '/', '5']);
  expect(result).toEqual(result);
});
