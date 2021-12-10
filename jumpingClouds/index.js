// Há um jogo que começa com nuvens numeradas consecutivamente. Algumas das nuvens são nuvens de tempestade (1) e outras
// são cúmulos (0). O jogador pode saltar em qualquer nuvem cumulus e deve evitar as nuvens de tempestade. Determine o
// número mínimo de saltos necessários para saltar da posição inicial para a última nuvem, considerando que pode saltar
// de nuvem em nuvem, ou saltar duas nuvens por vez. Exemplo: c = [0, 1, 0, 0, 0, 1, 0].
// Indexar a matriz de 0 a 6. O jogador deve evitar as nuvens em c[1] e c[5]. Eles podem seguir estes dois caminhos: 0
// --> 2 --> 4 --> 6 ou 0 --> 2 --> 3 --> 4 --> 6. O primeiro caminho leva 3 pulos enquanto o segundo leva 4. Retornar 3.

const jumpingOnClouds = (c) => {
  let numberOfJumping = -1;

  for (let i = 0; i <= c.length; i += 2) {
    if (c[i] === 1) i = i - 1;
    if (i > c.length - 1) i = c.length - 1;
    numberOfJumping++;
  }

  return numberOfJumping;
};

console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]), 3);
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]), 4);
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]), 3);
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0, 0]), 4);
