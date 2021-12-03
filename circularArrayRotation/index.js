// Watson conhece uma operação chamada rotação circular direita em um array, que move o último elemento do array para a
// primeira posição e desloca todos os elementos restantes para a direita. Para testar as habilidades de Sherlock, ele
// fornece a Sherlock um array. Sherlock deve realizar a operação de rotação várias vezes e, em seguida, determinar o
// valor do elemento em uma determinada posição. Para cada array, execute um número de rotações circulares corretas e
// retorne os valores dos elementos nos índices dados.

const circularArrayRotation = (a, k, queries) => {
  const first = a.slice(-(k % a.length));
  const last = a.slice(0, -(k % a.length));
  const arrRotation = first.concat(last);
  let result = [];
  for (const position of queries) {
    result.push(arrRotation[position]);
  }
  return result;
};

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]), [2, 3, 1]);
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]), [5, 3]);
