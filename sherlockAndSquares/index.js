// Watson gosta de desafiar Sherlock. Ele fornecerá um valor inicial e um final que descreve um intervalo de inteiros,
// incluindo os pontos finais. Sherlock deve determinar o número de inteiros que são quadrados dentro desse intervalo.
// Exemplo: a = 24; b = 49. Existem três quadrados no intervalo: 25, 36 e 49. Retornar 3.

const squares = (a, b) => {
  const first = Math.sqrt(a);
  const last = Math.sqrt(b);

  if (first === last) {
    if (first % 1 === 0) return 1;
    if (first % 1 !== 0) return 0;
  } else if (Math.floor(first) === Math.floor(last)) {
    return 0;
  } else {
    return Math.floor(last) - Math.ceil(first) + 1;
  }
};

console.log(squares(24, 49), 3);
console.log(squares(3, 9), 2);
console.log(squares(17, 24), 0);
console.log(squares(465868129, 988379794), 9855);
console.log(squares(181510012, 293922871), 3672);
console.log(squares(395151610, 407596310), 311);
console.log(squares(11, 734), 24);
console.log(squares(228, 919), 15);
console.log(squares(71, 188), 5);
console.log(squares(270, 303), 1);
console.log(squares(312, 701), 9);
console.log(squares(251, 325), 3);
console.log(squares(418, 954), 10);
console.log(squares(407, 597), 4);
console.log(squares(4, 4), 1);
console.log(squares(248, 583), 9);
console.log(squares(1, 1000000000), 31622);
console.log(squares(89784519, 103811134), 713);
console.log(squares(50979851, 733216221), 19937);
console.log(squares(171329332, 418580628), 7370);
console.log(squares(123905259, 755565730), 16356);
console.log(squares(427179538, 677407359), 5359);
console.log(squares(243896428, 791246640), 12512);
console.log(squares(444446178, 492806755), 1118);
console.log(squares(187339538, 484177206), 8317);
console.log(squares(1, 10000), 100);
console.log(squares(999999945, 999999985), 0);
console.log(squares(999999996, 999999996), 0);
console.log(squares(1000000000, 1000000000), 0);
console.log(squares(999999908, 999999951), 0);
console.log(squares(999999941, 999999989), 0);
