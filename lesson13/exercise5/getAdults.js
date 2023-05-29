/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const getAdults = (obj) => {
  if (Object.keys(obj).length === 0) {
    return obj;
  }
  let key = 0;
  let adultsObj = {};
  // eslint-disable-next-line guard-for-in
  for (key in obj) {
    if (obj[key] >= 18) {
      adultsObj = Object.assign(adultsObj, { [key]: obj[key] });
    }
    // eslint-disable-next-line no-unused-expressions
    adultsObj;
  }
  return adultsObj;
};

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
getAdults({});
