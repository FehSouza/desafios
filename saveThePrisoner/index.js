const checkResult = (value, expected) => {
  const isEqual = value === expected;
  if (isEqual)
    console.log(`✔ valor esperado é: ${expected} e o resultado foi: ${value}`);
  if (!isEqual)
    console.log(`❌ valor esperado é: ${expected} e o resultado foi: ${value}`);
};

// Uma prisão tem prisioneiros e guloseimas para distribuir a eles. O carcereiro decide que a maneira mais justa de dividir
// as guloseimas é sentar os prisioneiros em torno de uma mesa circular em cadeiras numeradas sequencialmente. Um número de
// cadeira será tirado de um chapéu. Começando com o prisioneiro naquela cadeira, um doce será entregue a cada prisioneiro
// sequencialmente ao redor da mesa até que todos tenham sido distribuídos. O carcereiro está fazendo uma piadinha, no entanto.
// O último pedaço de doce se parece com todos os outros, mas tem um gosto horrível. Determine o número da cadeira ocupada
// pelo prisioneiro que receberá o doce.

const saveThePrisoner = (p, d, c) => {
  let chair = 0;
  for (let i = 0; i < d; i++) {
    const tempChair = (i + c) % p;
    if (tempChair) chair = tempChair;
    if (!tempChair) chair = p;
  }

  return chair;
};

checkResult(saveThePrisoner(6, 6, 1), 6); // 6
checkResult(saveThePrisoner(4, 6, 2), 3); // 3
checkResult(saveThePrisoner(5, 2, 1), 2); // 2
checkResult(saveThePrisoner(5, 2, 2), 3); // 3
checkResult(saveThePrisoner(7, 19, 2), 6); // 6
checkResult(saveThePrisoner(7, 19, 3), 7); // 7
checkResult(saveThePrisoner(7, 19, 4), 1); // 1
checkResult(saveThePrisoner(7, 19, 5), 2); // 2
checkResult(saveThePrisoner(3, 7, 3), 3); // 3
checkResult(saveThePrisoner(208526924, 756265725, 150817879), 72975907); // 72975907
checkResult(saveThePrisoner(962975336, 972576181, 396355184), 405956028); // 405956028
checkResult(saveThePrisoner(464237185, 937820284, 255816794), 265162707); // 265162707
checkResult(saveThePrisoner(499999999, 999999997, 2), 499999999); // 499999999
checkResult(saveThePrisoner(499999999, 999999998, 2), 1); // 1
checkResult(saveThePrisoner(999999999, 999999999, 1), 999999999); // 999999999
