const getSubArray = (arr, numberOfElements) => {
  let shotArr = []; // створюю масив
  shotArr = arr; // перезаписую в новостворений масив,arr
  shotArr.length = numberOfElements; // задаю довжину нового масива

  return shotArr;
};
console.log(getSubArray([11, 4, 8, 3], 2));
console.log(getSubArray([1, 2, 3, 4, 5], 3));
// зменшення масиву на значення numberOfElements
