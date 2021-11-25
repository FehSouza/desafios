// Dada uma série de avistamentos de pássaros, em que cada elemento representa um id de tipo de pássaro,
// determine o id do tipo avistado com mais frequência.
// Se mais de 1 tipo tiver sido identificado com o valor máximo, retorne o menor de seus ids.

// const migratoryBirds = (arr) => {
//   const listInOrder = arr.sort((a, b) => {
//     return a - b;
//   });

//   let externalAccountant = 0;
//   let typeBird = 0;

//   for (let i = 0; i < listInOrder.length; i++) {
//     const numberInAnalyse = listInOrder[i];

//     let internalAccountant = 0;

//     for (const item of listInOrder) {
//       if (numberInAnalyse === item) internalAccountant++;
//     }

//     if (internalAccountant > externalAccountant) {
//       externalAccountant = internalAccountant;
//       typeBird = numberInAnalyse;
//     }
//   }

//   return typeBird;
// };

const migratoryBirds = (arr) => {
  const listInOrder = arr.sort((a, b) => {
    return a - b;
  });

  let typeBird1 = 0;
  let typeBird2 = 0;
  let typeBird3 = 0;
  let typeBird4 = 0;
  let typeBird5 = 0;

  for (let i = 0; i < listInOrder.length; i++) {
    if (listInOrder[i] === 1) typeBird1++;
    if (listInOrder[i] === 2) typeBird2++;
    if (listInOrder[i] === 3) typeBird3++;
    if (listInOrder[i] === 4) typeBird4++;
    if (listInOrder[i] === 5) typeBird5++;
  }

  let typeBird = 0;
  let typeBirdAnalyse = 0;

  if (typeBirdAnalyse < typeBird1) {
    typeBird = 1;
    typeBirdAnalyse = typeBird1;
  }
  if (typeBirdAnalyse < typeBird2) {
    typeBird = 2;
    typeBirdAnalyse = typeBird2;
  }
  if (typeBirdAnalyse < typeBird3) {
    typeBird = 3;
    typeBirdAnalyse = typeBird3;
  }
  if (typeBirdAnalyse < typeBird4) {
    typeBird = 4;
    typeBirdAnalyse = typeBird4;
  }
  if (typeBirdAnalyse < typeBird5) {
    typeBird = 5;
    typeBirdAnalyse = typeBird5;
  }

  return typeBird;
};

// migratoryBirds([1, 1, 2, 2, 3]); // 1
// migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]); // 3
migratoryBirds([1, 4, 4, 4, 5, 3]); // 4
