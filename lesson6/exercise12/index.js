// function sortAsc(array) {
//   let endI = array.length - 1;
//   let endJ = array.length - 1;

//   for (let i = 0; i < endI; i++) {
//     for (let j = 0; j < endJ; j++) {
//       if (array[j] > array[j + 1]) {
//         const swap = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = swap;
//       }
//     }
//   }

//   return array;
// }
//  бульбашкове сортування массиву

// console.log(sortAsc([8, 4, 1, 3, 5, 5]));
// console.log(sortAsc([33, 12, 333, 12, 65, 76, 43, 778, 44, 0]));

// function sortAsc(array) {
//   let endI = array.length - 1;
//   let endJ = array.length - 1;
//   let wasSwap = false;

//   for (let i = 0; i < endI; i++) {
//     for (let j = 0; j < endJ; j++) {
//       if (array[j] > array[j + 1]) {
//         const swap = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = swap;
//         wasSwap = true;
//       }
//     }
//     if (!wasSwap) break;
//   }

//   return array;
// }

// console.log(sortAsc([8, 4, 1, 3, 5, 5]));
// console.log(sortAsc([33, 12, 333, 12, 65, 76, 43, 778, 44, 0]));
// зупинка сортування при находжені єлементів які не потрібно міняти
//  і повернення на початок массива

function sortAsc(array) {
  let endI = array.length - 1;
  let endJ = array.length - 1;

  for (let i = 0; i < endI; i += 1) {
    for (let j = 0; j < endJ; j += 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
console.log(sortAsc([22, 88, 56, 22, 7, 4, 6, 48, 2, 6]));
// бульбашкове сортування ES6
function sortDesc(array) {
  let endI = array.length - 1;
  let endJ = array.length - 1;

  for (let i = 0; i < endI; i += 1) {
    for (let j = 0; j < endJ; j += 1) {
      if (array[j] < array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
console.log(sortDesc([22, 88, 56, 22, 7, 4, 6, 48, 2, 6]));
