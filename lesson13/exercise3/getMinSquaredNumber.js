export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  let min = +Infinity;
  arr.forEach((element) => {
    if (Math.abs(element) < min) {
      min = Math.abs(element * element);
    }
  });
  return min;
};
// console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));
// [-777, 3, -2, 6, 45, -20];
