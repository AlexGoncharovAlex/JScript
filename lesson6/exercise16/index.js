function includes(arr, num) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
}

function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const uniqArr = [];
  for (let i = 0; i < array.length - 1; i += 1) {
    if (!includes(uniqArr, array[i])) {
      //  ^ в цьому рядку виконуеться функція includes 
      uniqArr.push(array[i]);
    }
  }
  return uniqArr;
}

console.log(removeDuplicates([1, 5, 5, 1, 22, 33, 22]));
//  прибрати дублікати із масиву.