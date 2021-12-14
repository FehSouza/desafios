// Um número Kaprekar modificado é um número inteiro positivo com uma propriedade especial: se você elevar ao quadrado,
// dividir o número em dois inteiros e somar esses inteiros, terá o mesmo valor com o qual começou. Considere um número
// inteiro positivo "n" com dígitos "d". Exemplo: n = 5; d = 1.
// Primeiro, calcule n² = 25. Divida isso em duas strings e converta-as de volta em inteiros: 2 e 5. Fazendo 2 + 5 = 7,
// e 7 != 5, portanto, este não é um número Kaprekar modificado. Se n = 9, ainda d = 1, e n² = 81. Isso nos dá 1 + 8 = 9,
// o original "n". Sendo assim, dados dois inteiros positivos "p" e "q", onde "p" é menor que "q", escreva um programa
// para imprimir os números Kaprekar modificados no intervalo entre "p" e "q", inclusive. Se nenhum número Kaprekar
// modificado existir no intervalo fornecido, imprima INVALID RANGE.

const kaprekarNumbers = (p, q) => {
  let arr = [];

  for (let i = p; i <= q; i++) {
    const square = i ** 2;

    const txt = String(square);

    const start = Number(txt.slice(0, txt.length / 2));
    const end = Number(txt.slice(txt.length / 2));

    if (start + end === i) arr.push(i);
  }
  if (arr.length !== 0) return arr.join(" ");
  if (arr.length === 0) return "INVALID RANGE";
};

console.log(kaprekarNumbers(1, 100), "1 9 45 55 99");
console.log(kaprekarNumbers(100, 300), "297");
console.log(kaprekarNumbers(2, 8), "INVALID RANGE");
