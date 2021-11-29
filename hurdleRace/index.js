// Há um jogo em que o personagem compete em uma corrida de obstáculos, onde as barreiras têm alturas variadas e os personagens
// têm uma altura máxima que podem pular. Há uma poção mágica que eles podem tomar que aumenta sua altura máxima de salto
// em 1 unidade para cada dose. Quantas doses da poção o personagem deve tomar para conseguir pular todos os obstáculos?
// Se o personagem já pode superar todos os obstáculos, volte 0. Exemplo: height = [1, 2, 3, 3, 2]; k = 1;
// O personagem pode pular 1 unidade de alta inicialmente e deve levar 3-1=2 doses de poção para poder pular todos os obstáculos.

const hurdleRace = (k, height) => {
  height.sort((a, b) => a - b);

  const lastValue = height[height.length - 1];

  const calc = lastValue - k;

  if (calc >= 0) return calc;
  if (calc < 0) return 0;
};

// hurdleRace(1, [1, 2, 3, 3, 2]); // 2
// hurdleRace(4, [1, 6, 3, 5, 2]); // 2
hurdleRace(7, [2, 5, 4, 5, 2]); // 0
