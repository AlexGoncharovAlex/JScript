// eslint-disable-next-line consistent-return
// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const copyArr = arr.slice();
//   return copyArr;
// }

// console.log(cloneArr([1, 2, 3, 4]));
// console.log(cloneArr(['David', 'Kate']));

// клон масива
function swap(numbers) {
  const [start, ...novaArr] = numbers;
  return [...novaArr, start];
}

function swapManual(numbers) {
  //   const copyNumbers = numbers.slice();
  const copyNumbers = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const num of numbers) {
    copyNumbers.push(num);
  }
  const first = copyNumbers[0];
  copyNumbers.shift();
  copyNumbers.push(first);

  return copyNumbers;
}
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11]));
