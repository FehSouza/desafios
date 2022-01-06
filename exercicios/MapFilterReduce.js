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

/* 
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

const newProducts = products.reduce((acc, elem) => {
  const category = elem.category;
  let itemTemp = [];

  acc[elem.category] ? (itemTemp = acc[elem.category]) : (itemTemp = []);

  return { ...acc, [category]: [...itemTemp, elem] };
}, {});

console.log(newProducts);  
*/

// EXERCÍCIO 5:
// Filtro de filmes pela classificação

/* 
const films = [
  { title: "Titanic", time: 195, grade: 7.5 },
  { title: "The Avengers", time: 203, grade: 9.5 },
  { title: "Bean", time: 90, grade: 6.5 },
  { title: "Harry Potter Deathly Hallows", time: 130, grade: 8.1 },
  { title: "The Shawshank Redemption", time: 142, grade: 9.3 },
];

const classification = films.reduce((acc, elem) => {
  let rank = "";
  let moviesTemp = [];

  elem.grade >= 8 ? (rank = "good movies") : (rank = "bad movies");
  acc[rank] ? (moviesTemp = acc[rank]) : (moviesTemp = []);

  return { ...acc, [rank]: [...moviesTemp, elem] };
}, {});

const BAD_MOVIES = "bad movies";
const GOOD_MOVIES = "good movies";

const classification2 = films.reduce(
  (acc, elem) => {
    if (elem.grade >= 8)
      return { ...acc, [GOOD_MOVIES]: [...acc[GOOD_MOVIES], elem] };
    return { ...acc, [BAD_MOVIES]: [...acc[BAD_MOVIES], elem] };
  },
  { [BAD_MOVIES]: [], [GOOD_MOVIES]: [] }
);

const classification3 = films.reduce(
  (acc, elem) => {
    if (elem.grade >= 8)
      return { ...acc, goodMovies: [...acc.goodMovies, elem] };
    return { ...acc, badMovies: [...acc.badMovies, elem] };
  },
  { goodMovies: [], badMovies: [] }
);

console.log(classification);
console.log(classification2);
console.log(classification3); 
*/

const a = {
  "Harry Potter e a Pedra Filosofal": { livro: true, filme: true, ano: "2001" },
  "Harry Potter e a Câmara Secreta": { livro: true, filme: true, ano: "2002" },
  "Harry Potter e o Prisioneiro de Azkaban": {
    livro: true,
    filme: true,
    ano: "2004",
  },
  "Harry Potter e o Cálice de Fogo": { livro: true, filme: true, ano: "2005" },
  "Harry Potter e a Ordem da Fênix": { livro: true, filme: true, ano: "2007" },
  "Os Contos de Beedle, o Bardo": { livro: true, filme: false, ano: "2008" },
  "Harry Potter e o Enigma do Príncipe": {
    livro: true,
    filme: true,
    ano: "2009",
  },
  "Harry Potter e as Relíquias da Morte: Parte 1": {
    livro: true,
    filme: true,
    ano: "2010",
  },
  "Animais Fantásticos e Onde Habitam": {
    livro: false,
    filme: true,
    ano: "2016",
  },
  "Animais Fantásticos: Os Crimes de Grindelwald": {
    livro: false,
    filme: true,
    ano: "2018",
  },
  "Harry Potter e as Relíquias da Morte: Parte 2": {
    livro: true,
    filme: true,
    ano: "2011",
  },
};

/* 
const listArr = Object.entries(a);

const list = listArr.reduce(
  (acc, elem) => {
    let res = {};
    const elemAdd = elem[0];
    const value = elem[1];
    if (value.livro === true && value.filme === true)
      res = {
        ...acc,
        livroFilme: [...acc.livroFilme, elemAdd],
        temLivro: [...acc.temLivro, elemAdd],
        temFilme: [...acc.temFilme, elemAdd],
      };
    if (value.livro === true && value.filme === false)
      res = {
        ...acc,
        apenasLivro: [...acc.apenasLivro, elemAdd],
        temLivro: [...acc.temLivro, elemAdd],
      };
    if (value.livro === false && value.filme === true)
      res = {
        ...acc,
        apenasFilme: [...acc.apenasFilme, elemAdd],
        temFilme: [...acc.temFilme, elemAdd],
      };
    return res;
  },
  {
    livroFilme: [],
    apenasLivro: [],
    apenasFilme: [],
    temLivro: [],
    temFilme: [],
  }
);

console.log(list); 
*/

const nameFilms = Object.keys(a);

const list = nameFilms.reduce(
  (acc, elem) => {
    let res = {};
    const value = a[elem];
    if (value.livro === true && value.filme === true)
      res = {
        ...acc,
        livroFilme: [...acc.livroFilme, elem],
        temLivro: [...acc.temLivro, elem],
        temFilme: [...acc.temFilme, elem],
      };
    if (value.livro === true && value.filme === false)
      res = {
        ...acc,
        apenasLivro: [...acc.apenasLivro, elem],
        temLivro: [...acc.temLivro, elem],
      };
    if (value.livro === false && value.filme === true)
      res = {
        ...acc,
        apenasFilme: [...acc.apenasFilme, elem],
        temFilme: [...acc.temFilme, elem],
      };
    return res;
  },
  {
    livroFilme: [],
    apenasLivro: [],
    apenasFilme: [],
    temLivro: [],
    temFilme: [],
  }
);

console.log(list);
