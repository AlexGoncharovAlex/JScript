export const reversArray = (array) => {
  if (!Array.isArray(array)) {
    return null;
  }
  const copyArr = [...array];
  return copyArr.reverse();
};
// console.log(reversArray([9, 7, 6, 4, 3, 1, 0]));
