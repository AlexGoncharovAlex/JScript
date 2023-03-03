function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const resultRevers = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const num of arr) {
    resultRevers.unshift(num);
  }
  return resultRevers;
}
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(['Ann', 'John']));
console.log(reverseArray('Liza', 3, 6));
console.log(reverseArray([5, 4, 3, 2, 1]));
console.log(reverseArray());
console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([4, 5, 6]));

// unshift робить реверс масиву
