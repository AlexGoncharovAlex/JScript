function getSpecialNumbers(from, to) {
  const numArrow = [];
  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) {
      numArrow.push(i);
    }
  }
  return numArrow;
}
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
