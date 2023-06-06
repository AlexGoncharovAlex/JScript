let memory = 0;
export function add(number) {
  let result = memory + number;
  return (memory = result);
}
export function decrease(number) {
  let result = memory - number;
  return (memory = result);
}

export function reset(memory) {
  return (memory = 0);
}

export function getMemo() {
  return memory;
}
