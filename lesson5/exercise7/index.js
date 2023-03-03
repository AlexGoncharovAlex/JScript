// function increaser(a, index) {
//   if (a > index) {
//     a += index;
//     return a;
//   }
//   return a;
// }
// console.log(increaser(1, 11));

const increaser = (a, index) => {
  // eslint-disable-next-line no-param-reassign
  if (a > index) a += index;
  return a;
};
const result = increaser(10, 11);
console.log(result);
