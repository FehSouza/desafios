// const animais = [
//   {
//     nome: "Fumaça",
//     idade: 3,
//     tipo: "cao",
//   },
//   {
//     nome: "Tobby",
//     idade: 6,
//     tipo: "cao",
//   },
//   {
//     nome: "Laminha",
//     idade: 1,
//     tipo: "gato",
//   },
//   {
//     nome: "Nutella",
//     idade: 3,
//     tipo: "cao",
//   },
// ];

// const listDogs = animais.filter((index) => {
//   if (index.tipo === "cao") return true;
// });

// const listAge = listDogs.map((index) => {
//   return index.idade * 7;
// });

// const sumAge = listAge.reduce((acc, age) => {
//   return (acc += age);
// }, 0);

// console.log(sumAge);

// const numeros = [1, 2, 3, 4, 5, 6];

// const soma = numeros.reduce((acc, num) => {
//   return (acc += num);
// }, 0);

// console.log(soma);

// const numbers = [175, 50, 25];

// const subtraction = (acc, num) => {
//   return (acc -= num);
// };

// const sum = (acc, num) => {
//   return (acc += num);
// };

// const listSub = numbers.reduce(subtraction);
// const listSum = numbers.reduce(sum);

// console.log(listSub, listSum);

const numbers = [15.5, 2.3, 1.1, 4.7];

const roundedNumberList = numbers.map((num) => {
  return Math.round(num);
});

const sum = roundedNumberList.reduce((acc, num) => {
  return (acc += num);
}, 0);

console.log(sum);
