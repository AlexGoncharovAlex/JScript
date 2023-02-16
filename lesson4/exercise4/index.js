function run() {
  const a = 0;
  let d = 2;

  if (a === 1) {
    return a;
  }

  for (let i = 1; i < 10; i += 1) {
    console.log(i);
  }

  // eslint-disable-next-line no-return-assign
  return (d = a);
}

run();
