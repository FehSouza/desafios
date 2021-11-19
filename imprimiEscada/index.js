//Imprima uma escada, onde sua base e sua altura são iguais a "n"
// A escada deve ser desenhada usando o símbolo de # e espaços. A última linha não é precedida de espaços.

const tamanhoEscada = 5;

function staircase(n) {
  const tamanhoAlturaLargura = n;

  for (let linha2 = 0; linha2 < tamanhoAlturaLargura; linha2++) {
    let arrTemporario = [];
    for (let linha1 = 0; linha1 < tamanhoAlturaLargura; linha1++) {
      if (linha1 <= linha2) arrTemporario.push("#");
      else arrTemporario.push(" ");
    }
    console.log(arrTemporario.join(" "));
  }
}

staircase(tamanhoEscada);
