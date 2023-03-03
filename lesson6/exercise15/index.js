const includes = (arr, num) => {
  for (let count of arr) {
    if (count === num) {
      return true;
    }
  }
  return false;
};
// метод includes через цикл
// examples
console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false
console.log(includes([1, 4, 8, 3], 1));
console.log(includes([1, 4, 8, 3], 500));
console.log(includes([1, 4, 8, 3], '5'));
