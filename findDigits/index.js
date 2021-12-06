// Um número inteiro 'd' é um divisor de um inteiro 'n' se o resto de n % d = 0. Dado um número inteiro, para cada dígito
// que compõe o número, determine se ele é um divisor. Conte o número de divisores que ocorrem dentro do número inteiro.
// Exemplo: n = 124 --> 1, 2 e 4 são divisores de 124, então volte 3.

const findDigits = (n) => {
  const arr = `${n}`.split("");

  const res = arr.reduce((acc, elem) => {
    if (n % Number(elem) === 0) return (acc += 1);
    return acc;
  }, 0);

  return res;
};

console.log(findDigits(124), 3);
console.log(findDigits(111), 3);
console.log(findDigits(10), 1);
console.log(findDigits(12), 2);
console.log(findDigits(1012), 3);
