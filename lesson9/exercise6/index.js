// const getPeople = (obj) => {
//   const users = Object.entries(obj);
//   const res = users.map((user) => user[1]);
//   //   const result = Object.entries(res);
//   let arr = [];
//   for (let key in res) {
//     arr.push(res[key]);
//   }
//   return res;
// };

// const rooms = {
//   room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }],
//   room2: [{ name: 'Alex' }, { name: 'Vova' }],
//   room3: [{ name: 'Dan' }, { name: 'Andrey' }],
// };

// console.log(getPeople(rooms));

// const getPeople = (obj) => {
//   let arrayNames = [];
//   for (let key in obj) {
//     arrayNames = arrayNames.concat(obj[key]);
//   }
//   const res = Object.values(arrayNames);

//   return res;
// };

// const rooms = {
//   room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }],
//   room2: [{ name: 'Alex' }, { name: 'Vova' }],
//   room3: [{ name: 'Dan' }, { name: 'Andrey' }],
// };

// console.log(getPeople(rooms));

// const getPeople = (obj) => {
//   const userArray = Object.entries(obj);
//   //   console.log(userArray);
//   const d = Object.values(userArray);

//   console.log(d);
// };

// const rooms = {
//   room1: [{ name: 'Jack' }, { name: 'Andrey' }],
//   room2: [{ name: 'Alex' }, { name: 'Vova' }],
//   room3: [{ name: 'Dan' }, { name: 'Andrey' }],
// };
// console.log(getPeople(rooms));

const getPeople = (obj) => {
  let arrayNames = [];
  for (let key in obj) {
    arrayNames = arrayNames.concat(obj[key]);
    // console.log(arrayNames);
  }
  const resNames = Object.values(arrayNames);
  //  console.log(resNames);
  return resNames.map((arrayItem) => arrayItem.name);
};
const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Ruslan' },
  ],
  room2: [{ name: 'Alex' }, { name: 'Vova' }],
  room3: [{ name: 'Dan' }, { name: 'Andrey' }],
};
console.log(getPeople(rooms));

// вивести всі імена
