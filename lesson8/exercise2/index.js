/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// const concatProps = (obj) => {
//   let resArr = [];
//   for (let key in obj) {
//     resArr.push(obj[key]);
//   }
//   return resArr;
// };

// // examples
// console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']

const concatProps = (obj) => {
  let resArr = [];
  for (let key in obj) {
    resArr = resArr.concat(obj[key]);
  }
  return resArr;
};

console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));
