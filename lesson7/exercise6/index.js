// function reverseArray(arr) {
//   if (!Array.isArray) {
//     return null;
//   }
//   const resultOfRevers = [...arr];
//   return resultOfRevers.reverse();
// }

// const notReversArray = [0, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// console.log(reverseArray(notReversArray));

// переворот масиву

const reverseArray = (arr) =>
  !Array.isArray(arr) ? null : arr.slice().reverse();

const notArray = 'FOX';
console.log(reverseArray(notArray));

const notReverseArray = [1, 2, -3, 4, 5, 6, 7, 8, 9];
console.log(reverseArray(notReverseArray));

// вдосконалений переворот масиву
