// Dados cinco inteiros positivos, encontre os valores mínimo e máximo que podem ser calculados somando
// exatamente quatro dos cinco inteiros.
// Após, imprima os respectivos valores mínimo e máximo como uma única linha de dois inteiros separados por espaço.

const numbersArray = [5, 9, 10, 6, 8];

function miniMaxSum(arr) {
  const numbers = arr;

  const orderedNumbers = numbers.sort((a, b) => {
    return a - b;
  });

  const numberWithoutSmallest = orderedNumbers.slice(1);
  const numberWithoutHighest = orderedNumbers.slice(0, 4);

  let maxSum = 0;
  let miniSum = 0;

  for (const item of numberWithoutSmallest) maxSum += item;
  for (const item of numberWithoutHighest) miniSum += item;

  const res = `${miniSum} ${maxSum}`;

  console.log(res);
}

miniMaxSum(numbersArray);
