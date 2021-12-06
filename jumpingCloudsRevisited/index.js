// Uma criança está jogando um jogo de salto de nuvens. No jogo, existem nuvens numeradas sequencialmente que podem ser
// nuvens de tempestade (1) ou cúmulos (0). Há uma série de nuvens organizadas no array 'c', e um nível de energia 'e'.
// O personagem começa com e = 100, e usa 1 unidade de energia para dar um salto de tamanho 'k' para a próxima nuvem. Se
// cair em uma nuvem de tempestade, sua energia diminui em 2 unidades. O jogo termina quando o personagem volta para a
// nuvem inicial. Dados os valores de 'k' e o array 'c', determine o valor final de energia 'e' após o término do jogo.

const jumpingOnClouds = (c, k) => {
  let acc = 100;

  for (let i = 0; i <= 100; i += k) {
    const indexTemp = i % c.length;

    if (indexTemp === 0 && i !== 0) {
      if (c[indexTemp] === 1) acc -= 3;
      if (c[indexTemp] !== 1) acc -= 1;
      break;
    }

    if (indexTemp !== 0 && i !== 0) {
      if (c[indexTemp] === 1) acc -= 3;
      if (c[indexTemp] !== 1) acc -= 1;
    }
  }

  return acc;
};

console.log(jumpingOnClouds([0, 0, 1, 0], 2), 96);
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2), 92);
console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3), 80);
