let memory = 0;
export function add(number) {
  let result = memory + number;
 return memory = result;
//   console.log(memory);
}
export function decrease(number) {
  let result = memory - number;
 return memory = result;
//   console.log(memory);
}

export function reset(memory) {
 return memory = 0;
//    console.log(memory);
}

export function getMemo() {
  return memory;
}

