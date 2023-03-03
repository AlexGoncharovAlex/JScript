function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sumOfNumber = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumOfNumber += arr[i];
  }
  return sumOfNumber;
}

console.log(getSum([1, 10, -10, 4])); // ==> 5
console.log(getSum([1])); // ==> 1
console.log(getSum([-8, 8])); // ==> 0
console.log(getSum(10, 12, 14)); // ==> null
// знахождення сумми чисел на проміжку
