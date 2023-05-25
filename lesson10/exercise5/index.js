const getTotalPrice = (array) => {
  const sumArray = array.reduce((acc, num) => acc + num);
  console.log(sumArray);
  const resFloor = Math.floor(sumArray * 100) / 100;
  return '$' + resFloor;
};

console.log(getTotalPrice([1.5554, 9.12, 5.852]));
