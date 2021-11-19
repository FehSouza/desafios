//Dada uma matriz quadrada, calcule a diferença absoluta (módulo) entre as somas de suas diagonais.

const arr = [
  [9, 2, 8],
  [2, 4, 9],
  [1, 7, 5],
];

function diagonalDifference(arr) {
  const listaArray = arr;
  let somaDiagonal1 = 0;
  let somaDiagonal2 = 0;

  for (let index = 0; index < listaArray.length; index++) {
    somaDiagonal1 += listaArray[index][index];
  }

  for (let index = 0; index < listaArray.length; index++) {
    somaDiagonal2 += listaArray[listaArray.length - index - 1][index];
  }

  const subtracao = Math.abs(somaDiagonal1 - somaDiagonal2);

  return subtracao;
}

console.log(diagonalDifference(arr));
