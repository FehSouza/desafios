// Dada uma sequência de inteiros "a", um trigêmeo (a[i], a[j], a[k]) é lindo se:
// --> i < j < k
// --> a[k] - a[j] = a[j] - a[i] = d
// Dada uma sequência crescente de números inteiros e o valor de "d", conte o número de lindos trigêmeos na sequência.

const beautifulTriplets = (d, arr) => {
  let listOfTriplets = [];

  for (const elem of arr) {
    const temporaryElement = elem;
    const pair1 = arr.find(
      (elem) => temporaryElement > elem && temporaryElement - elem === d
    );
    const pair2 = arr.find((elem) => pair1 > elem && pair1 - elem === d);
    if (pair1 !== undefined && pair2 !== undefined)
      listOfTriplets.push([temporaryElement, pair1, pair2]);
  }

  for (const arrTriplets of listOfTriplets) {
    for (const caractere of arrTriplets) {
      const numberOfRepetitions = arr.filter((elem) => {
        return elem === caractere;
      });
      if (numberOfRepetitions.length > 1) listOfTriplets.push([arrTriplets]);
    }
  }

  return listOfTriplets.length;
};

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]), 3);
console.log(beautifulTriplets(3, [1, 6, 7, 7, 8, 10, 12, 13, 14, 19]), 2);
