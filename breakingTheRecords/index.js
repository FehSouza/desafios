// Maria joga basquete universitário e quer se tornar profissional. Cada temporada ela mantém um registro de seu jogo.
// Ela tabula o número de vezes que quebra o recorde da temporada de mais e menos pontos em um jogo.
// Os pontos marcados no primeiro jogo estabelecem seu recorde para a temporada, e ela começa a contar a partir daí.
// Dadas as pontuações de uma temporada, determine o número de vezes que ela quebra seus recordes de + e - pontos marcados.

const breakingRecords = (scores) => {
  const points = scores;

  let biggestPoint = -1;
  let biggestRecord = -1;
  let lowestPoint = Infinity;
  let lowestRecord = -1;

  for (const item of points) {
    if (item < lowestPoint) {
      lowestPoint = item;
      lowestRecord++;
    }
    if (item > biggestPoint) {
      biggestPoint = item;
      biggestRecord++;
    }
  }

  const res = [biggestRecord, lowestRecord];

  console.log(res);
};

// breakingRecords([0, 9, 3, 10, 2, 20]); // 3, 0
// breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]); // 4, 0
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]); // 2, 4
