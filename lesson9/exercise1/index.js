'use strict';

// const getAdults = (obj) => {
//   const userArray = Object.entries(obj);
//   console.log(userArray);

//   const filterUsser = userArray.filter((user) => user[1] >= 18);
//   console.log(filterUsser);

//   const userNames = filterUsser.map((user) => user[0]);
//   return userNames;
// };

// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));

const getAdults = (obj) =>
  Object.entries(obj)
    .filter((user) => user[1] >= 18)
    .map((user) => user[0]);

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(getAdults({}));

// знайти всіх людей старше 18
