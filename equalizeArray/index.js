// Dada um array de inteiros, determine o número mínimo de elementos a serem excluídos para deixar apenas os elementos de
// igual valor. Exemplo: arr = [1, 2, 2, 3].
// Exclua os elementos 1 e 3, deixando arr = [2, 2]. Se ambos os dois mais o 1 ou o 3 são excluídos, é preciso 3 exclusões
// para deixar arr = [1] ou arr = [3]. Retorne o número mínimo de exclusões.

const equalizeArray = (arr) => {
  let quantityNumbers = 0;

  for (const item of arr) {
    const elem = item;
    let quantity = 0;
    for (const number of arr) {
      if (number === elem) quantity++;
    }
    if (quantity > quantityNumbers) quantityNumbers = quantity;
  }

  return arr.length - quantityNumbers;
};

console.log(equalizeArray([1, 2, 2, 3]), 2);
console.log(equalizeArray([3, 3, 2, 1, 3]), 2);
console.log(equalizeArray([3, 3, 2, 1, 3, 2, 1, 5, 9, 2, 3, 2, 3]), 8);
