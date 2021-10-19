// const exampleArray = [1, 20, 300, 500];

// function execSum(arr) {
//   let soma = 0;
//   for (const indice of arr) {
//     soma = soma + indice;
//   }
//   console.log(soma);
// }

// execSum(exampleArray);



const exampleArray = [1, 20, 300, 500];

function execSum(arr) {
  let soma = 0;
  for (const key in arr) {
    soma = soma + arr[key];
  }
  console.log(soma);
}

execSum(exampleArray);
