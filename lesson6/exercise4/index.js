// const numbers = [11, 22, 33, 55, 66];
// const a = numbers[0];
// const b = numbers[1];

// const [a, b, ...arr] = numbers;
// console.log(a, b, ...arr);
// console.log(b, ...arr, a);
// console.log(...arr, b, a);
// console.log(a, b, [1, 2, 3, ...arr]);
// console.log(a, b, [1, 2, 3], ...arr);
// console.log([a, b, 1, 2, 3, ...arr]);

// function swap(arr) {
//   const [start, ...rest] = arr;
//   return [...rest, start];
// }
// console.log(swap(numbers));

function swap(numbers) {
  const [start, ...novaArr] = numbers;
  return [...novaArr, start];
}

function swapManual(numbers) {
  //   const copyNumbers = numbers.slice();
  let copyNumbers = [];
  for (let i = 0; i < numbers.length - 1; i += 1) {
    copyNumbers = numbers;
  }
  const first = copyNumbers[0];
  copyNumbers.shift();
  copyNumbers.push(first);

  return copyNumbers;
}
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11]));

// const copyNum = numbers.slice();
// numbers[0] = 9999999999;
//  copyNum[0] = 7777777777;
//  copyNum.push(' ---COPY');
//  console.log(numbers);
// console.log(copyNum);
// return copyNum;
