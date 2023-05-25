function splitString(text, len = 10) {
  if (typeof text !== 'string') {
    return null;
  }
  const textArr = [];
  let startPosition = 0;

  while (true) {
    let separettText = text.substr(startPosition, len);
    if (separettText.length === 0) {
      break;
    }
    if (separettText.length < len) {
      separettText = separettText.concat('.'.repeat(len - separettText.length));
    }
    textArr.push(separettText);
    startPosition += len;
  }
  return textArr;
}
console.log(splitString('alexannapumanike', 4));

//   let lastElement = textArr.slice(-1).toString().slice(0, 1);
//   let elWithPoint =
//     lastElement.length < len
//       ? lastElement.concat('.'.repeat(len - lastElement.length))
//       : lastElement;
//   lastElement = elWithPoint;
//   textArr.pop();

// .concat(lastElement)
