const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || !arr.length) {
    return null;
  }
  let modulNum = arr.map((num) => Math.abs(num));
  return Math.max(...modulNum);
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber(-777, 3, -1, 45, -20)); // ===> 777
console.log(getMaxAbsoluteNumber([])); // ===> 777
