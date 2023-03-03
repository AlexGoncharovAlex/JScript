function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let max = arr[0];
  let resultOfMaxMin;
  // eslint-disable-next-line no-restricted-syntax
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  console.log('MAXnumber: ' + max);
  let min = arr[0];
  // eslint-disable-next-line no-restricted-syntax
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }
  console.log('MINnumber: ' + min);
  const resultSum = max + min;
  console.log('RESULT:  ' + resultSum);
  return resultSum > 1000;
}
console.log(checker([100, -3000, 8, 5, 23]));
//  знаходження числа max or min в масиві

// function checker(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let max = arr[0];
//   let min = arr[0];
//   for (let num of arr) {
//     if (max < num) {
//       max = num;
//     }
//     if (min > num) {
//       min = num;
//     }
//   }
//   console.log('Max: ' + max);
//   console.log('Min: ' + min);
//   const resultSum = max + min;
//   console.log('Result: ' + resultSum);
//   return resultSum > 1000;
// }

// console.log(checker([22, 50, -1, 4, 20]));
// знаходження мін та макс числа в масиві
// const getMin = (arr) => {
//   let min = Infinity;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   return min;
// };

// const getMax = (arr) => {
//   let max = -Infinity;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// };

// const checker = (arr) => getMin(arr) + getMax(arr) > 1000;
