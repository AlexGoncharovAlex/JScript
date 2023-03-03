let result = 0; /* де краще об'являти,в тілі функції чи поза */
function getSum(startNum, endNum) {
  for (let i = startNum; i <= endNum; i += 1) {
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result; // без цього результат не повернться
}
console.log(getSum(1, 4));
