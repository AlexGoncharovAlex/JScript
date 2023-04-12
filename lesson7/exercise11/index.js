// const filterNames = (arr, text) => {
//   let res;
//   res = arr.filter((element) =>
//     element.includes(text) && element.length > 5 ? true : false
//   );

//   return res;
// };

// const arrayEl = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
// const el = 'ya';
// console.log(filterNames(arrayEl, el));

const filterNames = (arr, text) => {
  return arr.filter((el) => el.includes(text) && el.length > 5);
};

const arrayEl = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
const el = 'ya';
console.log(filterNames(arrayEl, el));
// скорочена версія
