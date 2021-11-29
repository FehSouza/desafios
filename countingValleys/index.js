// Um caminhante mantém registros de suas caminhadas. Durante a última caminhada que durou exatamente steps passos, para
// cada passo foi observado se era uma subida U, ou uma descida D. As caminhadas sempre começam e terminam no nível do mar,
// e cada degrau para cima ou para baixo representa um mudança de unidade na altitude. Definimos os seguintes termos:
// - Uma montanha é uma sequência de degraus consecutivos acima do nível do mar, começando com um degrau acima do nível
// do mar e terminando com um degrau até o nível do mar.
// - Um vale é uma sequência de degraus consecutivos abaixo do nível do mar, começando com um degrau abaixo do nível do
// mar e terminando com um degrau até o nível do mar.
// Dada a sequência de subidas e descidas durante uma caminhada, localize e imprima o número de vales percorridos.

const countingValleys = (steps, path) => {
  const listWithPath = path.split("");

  const transformeLetterInNumber = (letter) => {
    if (letter === "D") return -1;
    if (letter === "U") return 1;
  };

  const pathWithNumbers = listWithPath.map(transformeLetterInNumber);

  let accPath = 0;

  const transformeInListOfNumbers = (item) => {
    return (accPath += item);
  };

  const listSum = pathWithNumbers.map(transformeInListOfNumbers);

  const valleysAccount = (acc, num, index, arr) => {
    if (num < 0 && index === 0) acc++;
    if (num === 0) {
      const valueZero = arr[index + 1];
      if (valueZero < 1) acc++;
    }
    return acc;
  };

  const valleys = listSum.reduce(valleysAccount, 0);

  console.log(valleys);
};

// countingValleys(8, "DDUUUUDD"); // 1
// countingValleys(8, "UDDDUDUU"); // 1
countingValleys(20, "UDDDUDUUUUUDDDDDDUUU"); // 2
