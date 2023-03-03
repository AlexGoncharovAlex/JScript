function includes(arr, num) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const uniqArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (!includes(uniqArr, array[i])) {
      uniqArr.push(array[i]);
    }
  }
  console.log(uniqArr);
  return uniqArr.length;
}
console.log(uniqueCount([1, 4, 5, 1, 1, 3]));
console.log(uniqueCount([1, 4, 1, 5, 7, 7, 1, 4, 9, 4]));
console.log(uniqueCount([1, 4, 1, -8, -4, 1, 1, 5]));
console.log(uniqueCount(['John', 'Ann', 'Ruslan', 'Ann', 'John']));
// прибрати з масиву дублікати та порахувати кількість єлементів
// або іншими словами довжину масива
