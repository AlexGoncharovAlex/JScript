/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
function addPropertyV2(obj, key, value) {
  Object.assign((obj[key] = value));
  return obj;
}
function addPropertyV3(obj, key, value) {
  let res = { [key]: value };
  // console.log(res);
  res = Object.assign({}, obj, res);
  return res;
}
function addPropertyV4(obj, key, value) {
  let result = {};

  return (result = { ...obj, [key]: value });
}
//  examples;
const transaction = {
  value: 170,
};
console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// function getMaseg1(a, c) {
//   let res = 0;
//   res = a + c;
//   return res;
// }

// function getMaseg2(a, b) {
//   return a + b;
// }

// console.log(getMaseg1(4, getMaseg2(': my ', 'balance')));
// колбек функции
