// Dado um array (ar) de números inteiros e um inteiro positivo k, determine o número de pares (i, j) onde i < j e
// ar[i] + ar[j] é divisível por k.
// Retornar o número de pares.

const divisibleSumPairs = (k, ar) => {
  const listInOrder = ar.sort((a, b) => {
    return a - b;
  });

  let numberOfPairs = 0;

  for (const positionList in listInOrder) {
    const position = Number(positionList);
    const newList = listInOrder.slice(position + 1);

    for (const item of newList) {
      const sum = listInOrder[position] + item;
      if (sum % k === 0) numberOfPairs++;
    }
  }

  console.log(numberOfPairs);
};

// divisibleSumPairs(5, [1, 2, 3, 4, 5, 6]); // 3
divisibleSumPairs(3, [1, 3, 2, 6, 1, 2]); // 5
