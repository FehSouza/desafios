//Imprima uma escada, onde sua base e sua altura são iguais a "n"
// A escada deve ser desenhada usando o símbolo de # e espaços. A última linha não é precedida de espaços.

const tamanhoEscada = 4;

function staircase(n) {
  const tamanhoAlturaLargura = n;

  for (let linha2 = 0; linha2 < tamanhoAlturaLargura; linha2++) {
    let temporario = [];
    for (let linha1 = 0; linha1 < tamanhoAlturaLargura; linha1++) {
      if (linha1 <= linha2) temporario.push("#");
      else temporario.push(" ");
    }
    console.log(temporario.reverse().join(" "));
  }
}

staircase(tamanhoEscada);
