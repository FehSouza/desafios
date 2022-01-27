// Marie inventou uma Máquina do Tempo e quer testá-la viajando no tempo para visitar a Rússia no Dia do Programador (o
// 256º dia do ano) durante um intervalo de 1700 a 2700. De 1700 a 1917, o calendário oficial da Rússia era o calendário
// juliano; desde 1919 eles usam o sistema de calendário gregoriano. A transição do calendário juliano para o gregoriano
// ocorreu em 1918, quando o dia seguinte após 31 de janeiro era 14 de fevereiro. Isso significa que em 1918, 14 de
// fevereiro era o 32º dia do ano na Rússia.
// Em ambos os sistemas de calendário, fevereiro é o único mês com uma quantidade variável de dias; tem 29 dias durante
// um ano bissexto e 28 dias durante todos os outros anos.
// No calendário juliano, os anos bissextos são divisíveis por 4;
// No calendário gregoriano, os anos bissextos são um dos seguintes:
// --> Divisível por 400.
// --> Divisível por 4 e não divisível por 100.
// Dado um ano 'y', encontre a data do 256º dia daquele ano de acordo com o calendário oficial russo durante aquele ano.
// Em seguida, imprima-o no formato dd.mm.yyyy, onde dd é o dia de dois dígitos, mm é o mês de dois dígitos e yyyy é 'y'.

const dayOfProgrammer = (year) => {
  let day = 0;

  if (year <= 1917) {
    if (year % 4 === 0) {
      const calc = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31;
      day = 256 - calc;
    } else {
      const calc = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
      day = 256 - calc;
    }
  }

  if (year >= 1919) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      const calc = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31;
      day = 256 - calc;
    } else {
      const calc = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
      day = 256 - calc;
    }
  }

  if (year === 1918) {
    const calc = 28 - 14 + 31 + 30 + 31 + 30 + 31 + 31;
    day = 256 - 32 - calc;
  }

  return `${day}.09.${year}`;
};

console.log(dayOfProgrammer(1984), "12.09.1984");
console.log(dayOfProgrammer(2017), "13.09.2017");
console.log(dayOfProgrammer(2016), "12.09.2016");
console.log(dayOfProgrammer(1800), "12.09.1800");
console.log(dayOfProgrammer(1801), "13.09.1801");
console.log(dayOfProgrammer(1802), "13.09.1802");
console.log(dayOfProgrammer(1803), "13.09.1803");
console.log(dayOfProgrammer(1804), "12.09.1804");
console.log(dayOfProgrammer(1918), "26.09.1918");
