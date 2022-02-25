// EXERCÍCIO 1:
// Converter temperatura de Fahrenheit para Celsius:
// deve retornar um objeto com a temperatura em graus Celsius e em graus Fahrenheit.
// EXEMPLO: { Fahrenheit: 212, Celsius: 100 }
// deve utilizar map
// nota: 1 grau de Celsius = (Fahrenheit - 32) / ( 5 / 9 )

// const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

// const temperatures = fahrenheit.map((elem) => {
//   const Celsius = Number(((elem - 32) / (5 / 9)).toFixed(2));
//   return { Fahrenheit: elem, Celsius: Celsius };
// });
// console.log(temperatures);



// EXERCÍCIO 2:
// Remover elementos duplicados de um array:
// esse exercício deve ser resolvido de 2 formas com filter e posteriormente com  reduce.
// EXEMPLO: [ 1, 2, 3, 4, 5...]

// const duplicated = [5, 7, 8, 9, 10, 5, 7, 6, 3, 2, 8, 6, 1, 10, 50, 20, 30, 0];

// const duplicatedFormat = [...duplicated].sort((a, b) => a - b);

// const withoutDuplicated = duplicatedFormat.filter((elem, index) => {
//   if (elem !== duplicatedFormat[index + 1]) return true;
// });
// console.log(withoutDuplicated);

// const withoutDuplicated = duplicatedFormat.reduce((acc, elem, index) => {
//   if (elem !== duplicatedFormat[index + 1]) return [...acc, elem];
//   return acc;
// }, []);
// console.log(withoutDuplicated);



// EXERCÍCIO 3:
// Realizar a soma de lançamentos de foguetes em um período de 1 ano:
// esse exercício deve retornar um objeto com a quantidade de foguetes lançados e a quantidade de países que lançaram foguetes.
// EXEMPLO: { foguetes: 5, países: 2 }
// deve ser resolvido com reduce.

// const rocketsLaunches = [
//   { country: "Russia", launches: 32 },
//   { country: "US", launches: 23 },
//   { country: "China", launches: 16 },
//   { country: "Europe(ESA)", launches: 7 },
//   { country: "India", launches: 4 },
//   { country: "Japan", launches: 3 },
// ];

// const launches = rocketsLaunches.reduce((acc, elem) => {
//   if (acc.launches && acc.countries)
//     return {
//       launches: acc.launches + elem.launches,
//       countries: acc.countries + 1,
//     };
//   return { launches: elem.launches, countries: 1 };
// }, {});
// console.log(launches);



// EXERCÍCIO 4:
// Formatação de dados:
// esse exercício deve retornar um objeto com os itens separados por categoria.
// EXEMPLO: { Vestuário: [ { id: 123, name: "Blusa", color: "preto", size: "G", category: "Vestuário" }... ], Esporte: [ { id: 123, name: "Rede", color: "preto", size: "100m", category: "Esporte" } ] }
// deve ser resolvido com reduce.

// const products = [
//   {
//     id: 123,
//     name: "Camiseta",
//     color: "preto",
//     size: "G",
//     category: "Vestuário",
//   },
//   {
//     id: 125,
//     name: "Shorts",
//     color: "preto",
//     size: "G",
//     category: "Vestuário",
//   },
//   {
//     id: 456,
//     name: "Tênis",
//     color: "preto",
//     size: "41",
//     category: "Vestuário",
//   },
//   {
//     id: 789,
//     name: "Bola",
//     color: "verde",
//     size: "Único",
//     category: "Esporte",
//   },
//   {
//     id: 456,
//     name: "Tênis",
//     color: "preto",
//     size: "41",
//     category: "Vestuário",
//   },
// ];

// const categories = products.reduce((acc, elem) => {
//   const key = elem.category;

//   if (acc[key]) return { ...acc, [key]: [...acc[key], elem] };
//   return { ...acc, [key]: [elem] };
// }, {});
// console.log(categories);



// EXERCÍCIO 5:
// Filtro de filmes pela classificação
// esse exercício deve retornar um objeto com os filmes classificados por classificação.
// EXEMPLO: { badMovies: [ { title: "Bad Movie", grade: "7.7" }... ], goodMovies: [ { title: "Good Movie", grade: "8.7" } ] }
// deve ser resolvido com reduce.
// nota: goodMovies deve ser um array de filmes com classificação maior ou igual a 8

// const films = [
//   { title: "Titanic", time: 195, grade: 7.5 },
//   { title: "The Avengers", time: 203, grade: 9.5 },
//   { title: "Bean", time: 90, grade: 6.5 },
//   { title: "Harry Potter Deathly Hallows", time: 130, grade: 8.1 },
//   { title: "The Shawshank Redemption", time: 142, grade: 9.3 },
// ];

// const classification = films.reduce((acc, elem) => {
//   if (elem.grade >= 8) {
//     if (acc.goodMovies) return { ...acc, goodMovies: [...acc.goodMovies, elem] };
//     return { ...acc, goodMovies: [elem] };
//   } else {
//     if (acc.badMovies) return { ...acc, badMovies: [...acc.badMovies, elem] };
//     return { ...acc, badMovies: [elem] };
//   }
// }, {});
// console.log(classification);



// EXERCÍCIO 6:
// agrupamento de filmes por tipo de conteúdo
// esse exercício deve retornar um objeto com os filmes agrupados por tipo de conteúdo.
// EXEMPLO: { bookFilm: [], onlyBook: [], onlyFilm: [], haveBook: [], haveFilm: [] }
// deve ser resolvido com reduce.
// nota: onlyBook deve ser um array de livros que não tem conteúdo de filme
// nota: onlyFilm deve ser um array de filmes que não tem conteúdo de livro
// nota: haveBook deve ser um array que tem conteúdo de livro
// nota: haveFilm deve ser um array que tem conteúdo de filme
// nota: bookFilm deve ser um array que tem conteúdo de livro e de filme
// nota: para facilitar iterar o objeto, utilize o método keys do objeto Object

// const harryPotterContent = {
//   "Harry Potter e a Pedra Filosofal": { book: true, film: true, year: "2001" },
//   "Harry Potter e a Câmara Secreta": { book: true, film: true, year: "2002" },
//   "Harry Potter e o Prisioneiro de Azkaban": { book: true, film: true, year: "2004" },
//   "Harry Potter e o Cálice de Fogo": { book: true, film: true, year: "2005" },
//   "Harry Potter e a Ordem da Fênix": { book: true, film: true, year: "2007" },
//   "Os Contos de Beedle, o Bardo": { book: true, film: false, year: "2008" },
//   "Harry Potter e o Enigma do Príncipe": { book: true, film: true, year: "2009" },
//   "Harry Potter e as Relíquias da Morte: Parte 1": { book: true, film: true, year: "2010" },
//   "Animais Fantásticos e Onde Habitam": { book: false, film: true, year: "2016" },
//   "Animais Fantásticos: Os Crimes de Grindelwald": { book: false, film: true, year: "2018" },
//   "Harry Potter e as Relíquias da Morte: Parte 2": { book: true, film: true, year: "2011" },
// };

// const listValues = Object.values(harryPotterContent);
// const listFilms = Object.keys(harryPotterContent);

// const classification1 = listValues.reduce((acc, elem, index) => {
//   const element = { title: listFilms[index], ...elem };

//   if (elem.book === true && elem.film === true) {
//     if (acc.bookFilm) return { ...acc, bookFilm: [...acc.bookFilm, element] };
//     return { ...acc, bookFilm: [element] };
//   }
//   if (elem.book && elem.film === false) {
//     if (acc.onlyBook) return { ...acc, onlyBook: [...acc.onlyBook, element] };
//     return { ...acc, onlyBook: [element] };
//   }
//   if (elem.book === false && elem.film) {
//     if (acc.onlyFilm) return { ...acc, onlyFilm: [...acc.onlyFilm, element] };
//     return { ...acc, onlyFilm: [element] };
//   }

//   return acc;
// }, {});

// const classification2 = listValues.reduce((acc, elem, index) => {
//   const element = { title: listFilms[index], ...elem };

//   if (elem.book) {
//     if (acc.haveBook) return { ...acc, haveBook: [...acc.haveBook, element] };
//     return { ...acc, haveBook: [element] };
//   }

//   return acc;
// }, {});

// const classification3 = listValues.reduce((acc, elem, index) => {
//   const element = { title: listFilms[index], ...elem };

//   if (elem.film) {
//     if (acc.haveFilm) return { ...acc, haveFilm: [...acc.haveFilm, element] };
//     return { ...acc, haveFilm: [element] };
//   }

//   return acc;
// }, {});

// const classification = {
//   ...classification1,
//   ...classification2,
//   ...classification3,
// };
// console.log(classification);

// const test = (obj) => {
//   const test1 = obj.bookFilm.every((elem) =>
//     elem.book && elem.film ? true : false
//   );
//   const test2 = obj.onlyBook.every((elem) =>
//     elem.book && elem.film === false ? true : false
//   );
//   const test3 = obj.onlyFilm.every((elem) =>
//     elem.book === false && elem.film ? true : false
//   );
//   const test4 = obj.haveBook.every((elem) => (elem.book ? true : false));
//   const test5 = obj.haveFilm.every((elem) => (elem.film ? true : false));

//   return {
//     bookFilm: test1,
//     onlyBook: test2,
//     onlyFilm: test3,
//     haveBook: test4,
//     haveFilm: test5,
//   };
// };

// console.log(test(classification));



// EXERCÍCIO 7:
// usar reduce para montar uma lista com os números pares e impares
// { pares: [2,4,6...], impares: [1,3,5....] }

const arrayEx7 = [10, 50, 1, 2, 6, 8, 9, 11, 33, 41];

const evenAndOdd = arrayEx7.reduce((acc, elem) => {
  if (elem % 2 === 0) {
    if (acc.even) return { ...acc, even: [...acc.even, elem] };
    return { ...acc, even: [elem] };
  } else {
    if (acc.odd) return { ...acc, odd: [...acc.odd, elem] };
    return { ...acc, odd: [elem] };
  }
}, {});
console.log(evenAndOdd);
