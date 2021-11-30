// A árvore utópica passa por 2 ciclos de crescimento todos os anos. A cada primavera, ela dobra de altura. A cada verão,
// sua altura aumenta em 1 metro. Uma muda de árvore utópica com uma altura de 1 metro é plantada no início da primavera.
// Qual será a altura da árvore depois de n ciclos de crescimento?

const utopianTree = (n) => {
  let treeSize = 1;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) treeSize *= 2;
    if (i % 2 === 1) treeSize++;
  }

  return treeSize;
};

// utopianTree(5); // 14
// utopianTree(0) // 1
// utopianTree(1) // 2
utopianTree(4); // 7
