const permutationEquation = (p) => {
  let newArr = [];

  for (let i = 1; i <= p.length; i++) {
    const position1 = p.indexOf(i) + 1;
    const position2 = p.indexOf(position1) + 1;
    newArr.push(position2);
  }

  return newArr;
};

console.log(permutationEquation([5, 2, 1, 3, 4]), [4, 2, 5, 1, 3]);
console.log(permutationEquation([2, 3, 1]), [2, 3, 1]);
console.log(permutationEquation([4, 3, 5, 1, 2]), [1, 3, 5, 4, 2]);
