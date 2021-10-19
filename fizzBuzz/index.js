/*
  escreva um programa que imprima de 1 a 100. Mas para multiplos de tres imprima "Fizz" ao invés do 
  numero e para multiplos de cinco imprima "Buzz". para numeros que são multiplos dos dois imprima apenas "FizzBuzz"
*/

/* 
function myFunction(inicio, fim) {
  for (index = inicio; index <= fim; index++) {
    let contadorPrint = index;
    if (index % 3 === 0) contadorPrint = "Fizz";
    if (index % 5 === 0) contadorPrint = "Buzz";
    if (index % 3 === 0 && index % 5 === 0) contadorPrint = "FizzBuzz";

    console.log(contadorPrint);
  }
}
 */

function myFunction(inicio, fim) {
  for (index = inicio; index <= fim; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
}

myFunction(1, 100);
