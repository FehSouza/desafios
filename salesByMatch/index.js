// Há uma grande pilha de meias que devem ser combinadas por cores. Dada uma matriz de inteiros representando a cor de
// cada meia, determine quantos pares de meias com cores correspondentes existem. Exemplo:
// n = 7;
// ar = [1, 2, 1, 2, 1, 3, 2]
// Existe um par da cor 1 e um da cor 2. Restam três meias estranhas, uma de cada cor. O número de pares é 2.

const sockMerchant = (n, ar) => {
  ar.sort((a, b) => a - b);

  let acc = 0;
  let pair = 0;

  const funcFilter = (num) => {
    if (num === acc) return true;
  };

  for (const item of ar) {
    if (item > acc) {
      acc = item;
      const newLists = ar.filter(funcFilter);
      if (newLists.length > 1) {
        const calc = Math.floor(newLists.length / 2);
        pair += calc;
      }
    }
  }
  console.log(pair);
};

// sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]); // 2
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); // 3
