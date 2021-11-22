// Imprime as proporções de valores positivos, negativos e zeros do array.
// Cada um dos três valores deve ser impresso em uma linha separada, com 6 dígitos após o decimal.
// A função não deve retornar um valor.

const listNumbers = [-4, 3, -9, 0, 4, 1];

const plusMinus = (arr) => {
  const list = arr;

  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeroNumbers = 0;

  for (const item of list) {
    if (item > 0) positiveNumbers++;
    if (item < 0) negativeNumbers++;
    if (item === 0) zeroNumbers++;
  }

  const divisionPositive = (positiveNumbers / list.length).toFixed(6);
  const divisionNegative = (negativeNumbers / list.length).toFixed(6);
  const divisionZero = (zeroNumbers / list.length).toFixed(6);

  const divisionList = [divisionPositive, divisionNegative, divisionZero];

  for (const item of divisionList) {
    console.log(item);
  }
};

plusMinus(listNumbers);
