// Dois gatos e um rato estão em várias posições em uma linha. Você receberá as posições iniciais. Determine qual gato alcançará
// o rato primeiro, supondo que o rato não se mova e os gatos viajem com a mesma velocidade. Se os gatos chegarem ao mesmo
// tempo, o rato poderá mover-se e escapar enquanto eles lutam. Para você é dado q consultas na forma de x, y, z e  representando
// as respectivas posições para gatos A e B e para o rato C. Complete a função para retornar a resposta adequada a cada consulta,
// que será impressa em uma nova linha:
// Se gato A pegar o rato primeiro, imprime Cat A.
// Se gato B pegar o rato primeiro, imprime Cat B.
// Se os dois gatos alcançarem o rato ao mesmo tempo, imprima Mouse C enquanto os dois gatos lutam e o rato escapa.

const catAndMouse = (x, y, z) => {
  const distanceCatA = Math.abs(x - z);
  const distanceCatB = Math.abs(y - z);

  if (distanceCatA < distanceCatB) return `Cat A`;
  if (distanceCatB < distanceCatA) return `Cat B`;
  if (distanceCatA === distanceCatB) return `Mouse C`;
};

// catAndMouse(2, 5, 4); // Cat B
// catAndMouse(1, 2, 3); // Cat B
catAndMouse(1, 3, 2); // Mouse C
