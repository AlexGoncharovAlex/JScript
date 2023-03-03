// eslint-disable-next-line consistent-return
const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sumOfArr = 0;
  for (let num of arr) {
    sumOfArr += num;
  }
  return sumOfArr > 100;
};

console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum(' it is not array'));
console.log(checkSum([10, 99, 1])); // ===> true
console.log(checkSum([-6, -3, 200])); // ===> true

// знаходження суми в масиві та порівняння її з значенням(100)
