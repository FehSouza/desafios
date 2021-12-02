// Uma prisão tem prisioneiros e guloseimas para distribuir a eles. O carcereiro decide que a maneira mais justa de dividir
// as guloseimas é sentar os prisioneiros em torno de uma mesa circular em cadeiras numeradas sequencialmente. Um número de
// cadeira será tirado de um chapéu. Começando com o prisioneiro naquela cadeira, um doce será entregue a cada prisioneiro
// sequencialmente ao redor da mesa até que todos tenham sido distribuídos. O carcereiro está fazendo uma piadinha, no entanto.
// O último pedaço de doce se parece com todos os outros, mas tem um gosto horrível. Determine o número da cadeira ocupada
// pelo prisioneiro que receberá o doce.

const saveThePrisoner = (n, m, s) => {
  const restOfDivision = m % n;
  const restOfChair = n - s + 1;
  let chair = 0;

  if (restOfDivision === 0 && s === 1) {
    chair = n;
  } else if (restOfDivision === 0 && s !== 1) {
    chair = s - 1;
  } else if (restOfChair >= restOfDivision) {
    chair = s + restOfDivision - 1;
  } else if (restOfChair < restOfDivision) {
    const resettingChair = restOfDivision - restOfChair;
    chair = resettingChair;
  }

  return chair;
};

saveThePrisoner(6, 6, 1); // 6
saveThePrisoner(4, 6, 2); // 3
saveThePrisoner(5, 2, 1); // 2
saveThePrisoner(5, 2, 2); // 3
saveThePrisoner(7, 19, 2); // 6
saveThePrisoner(7, 19, 3); // 7
saveThePrisoner(7, 19, 4); // 1
saveThePrisoner(7, 19, 5); // 2
saveThePrisoner(3, 7, 3); // 3
saveThePrisoner(208526924, 756265725, 150817879); // 72975907
saveThePrisoner(962975336, 972576181, 396355184); // 405956028
saveThePrisoner(464237185, 937820284, 255816794); // 265162707
saveThePrisoner(499999999, 999999997, 2); // 499999999
saveThePrisoner(499999999, 999999998, 2); // 1
saveThePrisoner(999999999, 999999999, 1); // 999999999
