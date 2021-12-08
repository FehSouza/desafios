// Dadas as datas de devolução esperadas e reais de um livro, crie um programa que calcule a multa. A estrutura de taxas
// é a seguinte: --> Se o livro for devolvido na data prevista de devolução ou antes dela, não será cobrada multa (fine
// = 0). --> Se o livro for devolvido após o dia de devolução esperado, mas ainda dentro do mesmo mês e ano da data
// esperada, fine = 15 x o nº de dias atrasados. --> Se o livro for devolvido após o mês de devolução esperado, mas ainda
// dentro do mesmo ano da data esperada, fine = 500 x o nº de meses atrasados. --> Se o livro for devolvido após o ano em
// que era previsto, há multa fixa de 10000.
// As cobranças são baseadas apenas na medida menos precisa de atraso. Por exemplo, se um livro tem vencimento em 1º de
// janeiro de 2017 ou 31 de dezembro de 2017, se ele for devolvido em 1º de janeiro de 2018, isso significa um ano de
// atraso e a multa seria 10000.

const libraryFine = (d1, m1, y1, d2, m2, y2) => {
  if (y1 === y2 && m1 === m2) {
    if (d1 <= d2) return 0;
    if (d1 > d2) return 15 * (d1 - d2);
  }

  if (y1 === y2 && m1 !== m2) {
    if (m1 < m2) return 0;
    if (m1 > m2) return 500 * (m1 - m2);
  }

  if (y1 !== y2) {
    if (y1 < y2) return 0;
    if (y1 > y2) return 10000;
  }
};

console.log(libraryFine(14, 7, 2018, 5, 7, 2018), 135);
console.log(libraryFine(9, 6, 2015, 6, 6, 2015), 45);
console.log(libraryFine(9, 12, 2015, 6, 6, 2015), 3000);
console.log(libraryFine(1, 1, 2018, 1, 1, 2017), 10000);
console.log(libraryFine(1, 1, 2018, 31, 12, 2017), 10000);
console.log(libraryFine(6, 6, 2015, 9, 6, 2016), 0);
