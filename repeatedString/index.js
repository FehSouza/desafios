// Existe uma string 's', de letras minúsculas, que se repetem infinitamente muitas vezes. Dado um número inteiro 'n',
// encontre e imprima o número de letras 'a' que aparecem na string infinita. Exemplo: s = 'abcac'; n = 10.
// A substring que consideramos é abcacabcac. Existem 4 ocorrências de 'a' na substring.

// const repeatedString = (s, n) => {
//   const countCharacters = n - s.length;
//   let arr = [];
//   let string = "";
//   let numbersA = 0;

//   if (s === "a") {
//     return (numbersA = n);
//   } else if (s.length === 1 && s !== "a") {
//     return (numbersA = 0);
//   } else if (s.length === n) {
//     return (numbersA = s.split("a").length - 1);
//   } else {
//     const repeatString = (string, numLeft) => {
//       if (numLeft < 0) {
//         for (let i = 0; i <= Math.abs(numLeft); i++) arr.push(string[i]);
//       }
//       if (numLeft > 0) {
//         for (let i = 0; i < numLeft; i++) {
//           arr.push(string[i % string.length]);
//         }
//       }
//     };

//     const convertArrayToString = (arr) => {
//       string = arr.join("");
//     };

//     const calcA = (string1, string2) => {
//       if (string2.length < string1.length)
//         numbersA = string2.split("a").length - 1;
//       if (string2.length >= string1.length)
//         numbersA =
//           string1.split("a").length - 1 + (string2.split("a").length - 1);
//     };

//     repeatString(s, countCharacters);
//     convertArrayToString(arr);
//     calcA(s, string);
//   }

//   return numbersA;
// };

const repeatedString = (s, n) => {
  const wordSize = s.length;
  const quantityOfWords = Math.floor(n / wordSize);
  const quantityOfRestLetters = n - wordSize * quantityOfWords;

  let substring = "";
  if (quantityOfRestLetters > 0) substring = s.slice(0, quantityOfRestLetters);

  let quantityStringA = 0;
  for (const item of s) if (item === "a") quantityStringA++;

  let quantitySubstringA = 0;
  for (const item of substring) if (item === "a") quantitySubstringA++;

  const quantityTotal = quantityStringA * quantityOfWords + quantitySubstringA;
  return quantityTotal;
};

console.log(repeatedString("abcac", 10), 4);
console.log(repeatedString("aba", 10), 7);
console.log(repeatedString("a", 1000000000000), 1000000000000);
console.log(repeatedString("x", 970770), 0);
console.log(repeatedString("ababa", 3), 2);
console.log(repeatedString("ababa", 5), 3);
