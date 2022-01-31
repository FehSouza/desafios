// Dado um array de inteiros, encontre o maior subarray onde a diferença absoluta entre quaisquer dois elementos é menor
// ou igual a 1.
// Exemplo: a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
// Existem dois subarray que atendem ao critério: [1, 1, 2, 2] e [4, 4, 5, 5, 5]. O subarray de comprimento máximo tem
// 5 elementos.

const pickingNumbers = (a) => {
  const arr = new Set(a);
  const newArr = [...arr].sort((a, b) => a - b);

  if (newArr.length === 1) return a.length;

  let arrTemp = [];
  let quantities = [];

  for (let i = 0; i < newArr.length; i++) {
    const valueTemp = newArr[i];
    let acc = 0;
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[j] - valueTemp <= 1) arrTemp.push([valueTemp, newArr[j]]);
    }
    for (const item of a) {
      if (item === valueTemp) acc++;
    }
    quantities.push(acc);
  }

  for (const elem of arrTemp) {
    let acc = 0;
    for (const item of a) {
      if (elem[0] === item) acc++;
      if (elem[1] === item) acc++;
    }
    quantities.push(acc);
  }

  return Math.max(...quantities);
};

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]), 5);
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]), 3);
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]), 5);
console.log(
  pickingNumbers([
    4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4,
    97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5,
    5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97,
    4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4,
    97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97,
  ]),
  50
);
console.log(
  pickingNumbers([
    66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
    66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
    66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
    66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
    66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
    66, 66, 66, 66, 66,
  ]),
  100
);
