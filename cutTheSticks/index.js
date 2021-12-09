// Você recebe uma série de palitos de comprimentos variados. Você cortará iterativamente os palitos em palitos menores,
// descartando os pedaços mais curtos até que não haja mais nenhum. Em cada iteração, você determinará o comprimento do
// pedaço mais curto restante, cortará esse comprimento de cada um dos pedaços mais longos e, em seguida, descartará todos
// os pedaços do menor comprimento. Quando todos os palitos restantes tiverem o mesmo comprimento, eles não podem ser
// encurtados, portanto, descarte-os. Dados os comprimentos de n palitos, imprima o número de palitos que sobram antes de
// cada iteração até que não haja mais nenhum.
// Exemplo: arr = [1 ,2, 3] --> O menor comprimento de palito é 1, então corte esse comprimento dos dois mais longos e
// descarte os pedaços de comprimento 1. Agora os comprimentos são arr = [1, 2]. Novamente, o palito mais curto é de
// comprimento 1, então corte essa quantidade do palito mais longo e descarte os pedaços. Resta apenas um palito arr = [1],
// então descarte esse pedaço. O número de palitos em cada iteração foi answer = [3, 2, 1].

const cutTheSticks = (arr) => {
  let arrOfIteration = arr.sort((a, b) => a - b);
  let quantityOfNumbers = [arrOfIteration.length];

  const makeIteration = (list) => {
    const smallestNumberIteration = Math.min(...list);
    let arrTemp = [];
    for (const item of list) {
      arrTemp.push(item - smallestNumberIteration);
    }
    return (arrOfIteration = arrTemp);
  };

  const updatesIteration = (list) => {
    const smallestNumberUpdate = Math.min(...list);
    let arrTemp = [];
    for (const item of list) {
      if (item !== smallestNumberUpdate) {
        arrTemp.push(item);
      }
    }
    return (arrOfIteration = arrTemp);
  };

  for (
    let loop = 0;
    arrOfIteration[0] !== arrOfIteration[arrOfIteration.length - 1];
    loop++
  ) {
    makeIteration(arrOfIteration);
    updatesIteration(arrOfIteration);
    quantityOfNumbers.push(arrOfIteration.length);
  }

  return quantityOfNumbers;
};

console.log(cutTheSticks([1, 2, 3]), [3, 2, 1]);
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]), [6, 4, 2, 1]);
console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]), [8, 6, 4, 1]);
