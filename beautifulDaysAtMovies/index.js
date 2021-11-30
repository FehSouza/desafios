// Lily gosta de jogar com números inteiros. Ela criou um jogo onde determina a diferença entre um número e seu reverso.
// Por exemplo, dado o número 12, seu reverso é 21. A diferença deles é 9. O número 120 invertido é 21, e a diferença deles
// é 99. Ela decide aplicar seu jogo à tomada de decisões. Ela vai olhar para uma gama numerada de dias e só vai ao cinema
// em um dia bonito. Dado um intervalo de dias numerados, e um número k, determine o número de dias bonitos no intervalo.
// Números bonitos são definidos como números onde a diferença entre o número e seu reverso é igualmente divisível por k.
// Se o valor de um dia é um número bonito, é um dia bonito. Retorna o número de dias bonitos no intervalo.

const beautifulDays = (i, j, k) => {
  const numbersList = [];
  const invertedNumbersList = [];

  for (let index = i; index <= j; index++) {
    numbersList.push(index);
    invertedNumbersList.push(Number(`${index}`.split("").reverse().join("")));
  }

  const subtraction = numbersList.map((num, index) => {
    return Math.abs(num - invertedNumbersList[index]);
  });

  const res = subtraction.reduce((acc, num) => {
    if (num % k === 0) return acc + 1;
    return acc;
  }, 0);

  return res;
};

beautifulDays(20, 23, 6); // 2
