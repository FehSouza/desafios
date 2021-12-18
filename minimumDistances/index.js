// A distância entre dois valores de um array é o número de índices entre eles. Dado "a", encontre a distância mínima
// entre qualquer par de elementos iguais no array. Se esse valor não existir, retorne -1. Exemplo: a = [3, 2, 1, 2, 3]
// Existem dois pares de valores correspondentes: 3 e 2. Os índices do 3 são i = 0 e j = 4, então a distância deles é
// d[i, j] = |j - i| = 4. Os índices do 2 são i = 1 e j = 3, então a distância deles é d[i, j] = |j - i| = 2. A distância
// mínima é 2.

const minimumDistances = (a) => {
  const getPositionsOfDuplicates = (arrAnalysis) => {
    let positionsDuplicates = [];
    for (let i = 0; i < arrAnalysis.length; i++) {
      const indexTemp = i;
      const elemTemp = arrAnalysis[i];
      for (let j = indexTemp + 1; j < arrAnalysis.length; j++) {
        if (elemTemp === arrAnalysis[j]) {
          positionsDuplicates.push(i, j);
        }
      }
    }
    return positionsDuplicates;
  };

  const positionsDuplicates = getPositionsOfDuplicates(a);

  const calcDistance = (arrAnalysis) => {
    let distance = [];
    for (let i = 0; i < arrAnalysis.length; i += 2) {
      distance.push(Math.abs(arrAnalysis[i] - arrAnalysis[i + 1]));
    }
    return distance;
  };

  const distances = calcDistance(positionsDuplicates);

  if (distances.length === 0) return -1;
  if (distances.length !== 0) return Math.min(...distances);
};

console.log(minimumDistances([3, 2, 1, 2, 3]), 2);
console.log(minimumDistances([7, 1, 3, 4, 1, 7]), 3);
console.log(minimumDistances([1, 2, 3, 4, 10]), -1);
