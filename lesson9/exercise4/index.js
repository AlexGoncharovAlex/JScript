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
const user = {
  name: 'Sam',
};

function addPropertyV1(userData, userId) {
  // put your code here

  userData.id = userId;
  return userData;
}
// put your code here
function addPropertyV2(userData, userId) {
  const personId = { id: userId };
  Object.assign(userData, personId);
  return userData;
}

// put your code here
function addPropertyV3(userData, userId) {
  const personId = { id: userId };
  let resNewCopy = Object.assign({}, userData, personId);
  return resNewCopy;
}

// put your code here
function addPropertyV4(userData, userId) {
  return { ...userData, id: userId };
}

console.log(addPropertyV1(user, '1234567111')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(user, '1234567'));
console.log(addPropertyV3(user, '12'));
console.log(addPropertyV4(user, '12355'));
