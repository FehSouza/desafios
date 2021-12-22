// Um motorista está dirigindo. A luz do motor do veículo está acesa e o motorista deseja obter manutenção imediatamente.
// Felizmente, uma faixa de serviço é paralela à rodovia. Ela varia em largura ao longo de seu comprimento. Você receberá
// um array de larguras em pontos ao longo da estrada (índices) e, em seguida, uma lista dos índices de pontos de entrada
// e saída. Considerando os pontos de entrada e saída, calcule o tamanho máximo do veículo que pode viajar no segmento da
// via de serviço com segurança. Exemplo: n = 4; width = [2, 3, 2, 1]; cases = [[1, 2], [2, 3]]
// Se o índice de entrada é i = 1 e o de saída é j = 2, existem duas larguras de segmento de 3 e 2, respectivamente. O
// veículo mais largo que pode passar por ambos é 2. Se i = 2 e j = 3, as larguras são [2, 1], que limita a largura do
// veículo a 1.

const serviceLane = (width, cases) => {
  const extractPieceFromArray = cases.map((elem) => {
    let start = elem[0];
    let end = elem[1] + 1;

    return width.slice(start, end);
  });

  const minValue = extractPieceFromArray.map((elem) => {
    return Math.min(...elem);
  });

  return minValue;
};

console.log(
  serviceLane(
    [2, 3, 2, 1],
    [
      [1, 2],
      [2, 3],
    ]
  ),
  [2, 1]
);

console.log(
  serviceLane(
    [2, 3, 1, 2, 3, 2, 3, 3],
    [
      [0, 3],
      [4, 6],
      [6, 7],
      [3, 5],
      [0, 7],
    ]
  ),
  [1, 2, 3, 2, 1]
);
