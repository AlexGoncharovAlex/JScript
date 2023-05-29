import { withdraw } from './withdraw';

it('it should name -withdraw', () => {
  const result = withdraw;
  expect(result).toEqual(result);
});

it('should check if enough money on the balances', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should check if enough money on the balances', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});
