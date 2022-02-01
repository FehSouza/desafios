const getTotalX = (a, b) => {
  const valuesMMC = a;
  const valuesMDC = b;

  const calcMMC = (num1, num2) => {
    let x = num1;
    let y = num2;
    let rest;

    while (rest !== 0) {
      rest = x % y;
      x = y;
      y = rest;
    }
    return (num1 * num2) / x;
  };

  const calcMDC = (num1, num2) => {
    let rest;

    while (rest !== 0) {
      rest = num1 % num2;
      num1 = num2;
      num2 = rest;
    }
    return num1;
  };

  const resMMC = valuesMMC.reduce((acc, elem) => calcMMC(acc, elem), 1);
  const resMDC = valuesMDC.reduce((acc, elem) => calcMDC(acc, elem), 0);

  let multiples = [resMMC];
  let acc = resMMC;

  while (acc < resMDC) {
    multiples.push(acc + resMMC);
    acc = acc + resMMC;
  }

  const divisor = multiples.filter((elem) => {
    return resMDC % elem === 0;
  });

  return divisor.length;
};

console.log(getTotalX([2, 6], [24, 36]), 2);
console.log(getTotalX([2, 4], [16, 32, 96]), 3);
console.log(getTotalX([1], [100]), 9);
console.log(getTotalX([2, 3, 6], [42, 84]), 2);
console.log(
  getTotalX(
    [100, 99, 98, 97, 96, 95, 94, 93, 92, 91],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  ),
  0
);
