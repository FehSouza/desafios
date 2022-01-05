// EXERCÍCIO 1:
// Converter temperatura de Fahrenheit para Celsius:

/* 
const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const CelsiusWithMap = fahrenheit.map((item, index, arr) => {
  const calc = Number(((item - 32) * (5 / 9)).toFixed(2));
  return { Fahrenheit: arr[index], Celsius: calc };
});

const CelsiusWithReduce = fahrenheit.reduce((acc, item, index, arr) => {
  const calc = Number(((item - 32) * (5 / 9)).toFixed(2));
  return [...acc, { Fahrenheit: arr[index], Celsius: calc }];
}, []);

console.log(CelsiusWithMap, CelsiusWithReduce); 
*/

// EXERCÍCIO 2:
// Remover elementos duplicados de um array:

/* 
const a = [5, 6, 8, 9, 10, 5, 7, 6, 3, 2, 8, 6, 1, 10, 50, 20, 30, 0];

const withoutDuplicatesWithFilterA = a.filter((elem, _, arr) => {
  let acc = 0;
  for (const item of arr) {
    if (item === elem) acc++;
  }
  if (acc === 1) return true;
});

const withoutDuplicatesWithFilterB = a.filter(
  (elem, _, arr) => arr.filter((item) => item === elem).length === 1
);

const withoutDuplicatesWithReduce = a.reduce((accumulator, elem, _, arr) => {
  const quantityOfNumbers = arr.reduce((acc, item) => {
    if (item === elem) return acc + 1;
    return acc;
  }, 0);
  if (quantityOfNumbers === 1) return [...accumulator, elem];
  return accumulator;
}, []);

console.log(withoutDuplicatesWithFilterA);
console.log(withoutDuplicatesWithFilterB);
console.log(withoutDuplicatesWithReduce); 
*/

// EXERCÍCIO 3:
// Realizar a soma de lançamentos de foguetes em um período de 1 ano:

/* 
const rockets = [
  { country: "Russia", launches: 32 },
  { country: "US", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europe(ESA)", launches: 7 },
  { country: "India", launches: 4 },
  { country: "Japan", launches: 3 },
];

const sumLaunches = rockets.reduce(
  (acc, elem) => ({
    totalCountries: acc.totalCountries + 1,
    totalLaunches: acc.totalLaunches + elem.launches,
  }),
  { totalCountries: 0, totalLaunches: 0 }
);

console.log(sumLaunches); 
*/

// EXERCÍCIO 4:
// Formatação de dados:

const products = [
  {
    id: 123,
    name: "Camiseta",
    color: "preto",
    size: "G",
    category: "Vestuário",
  },
  {
    id: 125,
    name: "Shorts",
    color: "preto",
    size: "G",
    category: "Vestuário",
  },
  {
    id: 456,
    name: "Tênis",
    color: "preto",
    size: "41",
    category: "Vestuário",
  },
  {
    id: 789,
    name: "Bola",
    color: "verde",
    size: "Único",
    category: "Esporte",
  },
];

const newProducts = products.reduce((acc, elem, index, arr) => {
  let category = elem.category;

  let listCategory = arr.reduce(() => {
    
  }, [])

  return { ...acc, [category]: [elem] };
}, {});

console.log(newProducts);
