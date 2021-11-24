// Duas crianças, Lily e Ron, querem dividir uma barra de chocolate. Cada um dos quadrados da barra possui um número inteiro.
// Lily decide compartilhar um pedaço contíguo da barra selecionada de forma que:
// O tamanho do pedaço corresponde ao mês de nascimento de Ron, e,
// A soma dos números nos quadrados é igual ao dia de seu nascimento.
// Determine de quantas maneiras ela pode dividir o chocolate.

const birthday = (s, d, m) => {
  const numbersInTheBar = s;
  const day = d;
  const month = m;

  let chocolateChips = 0;

  for (const position in numbersInTheBar) {
    const beginningOfSum = Number(position);
    const endOfSum = Number(position) + month;

    const sumRange = numbersInTheBar.slice(beginningOfSum, endOfSum);

    let sum = 0;

    for (const item of sumRange) {
      if (sumRange.length !== month) sum = 0;
      if (sumRange.length === month) sum += item;
    }

    if (sum === day) chocolateChips++;
  }

  console.log(chocolateChips);
};

birthday([2, 2, 1, 3, 2, 4, 1, 5], 6, 3); // 2
// birthday([2, 2, 1, 3, 4], 4, 2); // 2
// birthday([2, 2, 1, 3, 2], 4, 2); // 2
// birthday([1, 2, 1, 3, 2], 3, 2); // 2
// birthday([1, 1, 1, 1, 1, 1], 3, 2); // 0
// birthday([4], 4, 1); // 1
