/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// function pickProps(obj, props) {
//   let resObject = {};

//   resObject = Object.keys(obj) === Object.values(props) ? true : false;
//   console.log(resObject);
// }

// // examples
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }

// const pickProps = (obj, props) => {
//   let objProps = {};
//   for (let key in obj) {
//     // console.log(key);
//     for (el of props) {
//       //   console.log(el);
//       if (key === el) {
//         console.log((objProps = el + obj[key]));
//       }
//     }
//   }
//   return objProps;
// };

// // examples
// console.log(pickProps({ a: 1, b: 2, c: 9 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({ a: 1, b: 2, c: 20 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }

const pickProps = (obj, props) => {
  let objProps = {};
  // eslint-disable-next-line guard-for-in
  for (const key in obj) {
    objProps = props.includes(key)
      ? Object.assign(objProps, { [key]: obj[key] })
      : objProps;
  }
  return objProps;
};

// examples
console.log(pickProps({ a: 1, b: 2, c: 9 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 20 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
// дістати свойство із об'єкта
