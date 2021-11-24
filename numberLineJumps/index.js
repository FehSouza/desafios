// Você está coreografando um espetáculo de circo com vários animais. Por um lado, você recebe dois cangurus em uma linha
// numérica prontos para pular na direção positiva (ou seja, em direção ao infinito positivo).
// O primeiro canguru começa no local x1 e se move a uma taxa de v1 metros por salto.
// O segundo canguru começa no local x2 e se move a uma taxa de v2 metros por salto.
// Você tem que descobrir uma maneira de colocar os dois cangurus no mesmo local ao mesmo tempo, como parte do show.
// Se for possível, retorne YES, caso contrário retorne NO.

const kangaroo = (x1, x2, v1, v2) => {
  let positionKangaroo1 = x1;
  let positionKangaroo2 = x2;
  const velocityKangaroo1 = v1;
  const velocityKangaroo2 = v2;

  let res = "NO";

  if (
    positionKangaroo1 === positionKangaroo2 &&
    velocityKangaroo1 === velocityKangaroo2
  ) {
    return (res = "YES");
  } else if (
    (positionKangaroo1 > positionKangaroo2 &&
      velocityKangaroo2 > velocityKangaroo1) ||
    (positionKangaroo2 > positionKangaroo1 &&
      velocityKangaroo1 > velocityKangaroo2)
  ) {
    while (positionKangaroo1 <= 100000000 && positionKangaroo2 <= 100000000) {
      positionKangaroo1 += velocityKangaroo1;
      positionKangaroo2 += velocityKangaroo2;
      if (positionKangaroo1 === positionKangaroo2) return (res = "YES");
    }
  } else {
    return (res = "NO");
  }

  return (res = "NO");
};

// kangaroo(4523, 9419, 8092, 8076); //YES
kangaroo(21, 47, 6, 3); //NO
// kangaroo(0, 4, 3, 2);
