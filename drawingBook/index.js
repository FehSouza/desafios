// Um professor pede à turma para abrir seus livros em um número de página. Um aluno pode começar a virar as páginas da
// frente ou do final do livro. Eles sempre viram uma página de cada vez. Quando eles abrem o livro, a página 1 está sempre
// do lado direito. Quando eles viram a página 1, eles veem as páginas 2 e 3. Cada página, exceto a última, sempre será
// impressa em ambos os lados. A última página só pode ser impressa na capa. Se o livro tem n páginas, e um aluno deseja
// virar até a página p, qual é o número mínimo de páginas para virar? Eles podem começar no início ou no final do livro.

const pageCount = (n, p) => {
  const quantidadePaginasInicio = Math.floor(p / 2);

  const quantidadePaginasFim = Math.floor(n / 2) - quantidadePaginasInicio;

  let menorNumero = 0;

  if (quantidadePaginasInicio < quantidadePaginasFim)
    menorNumero = quantidadePaginasInicio;
  if (quantidadePaginasInicio > quantidadePaginasFim)
    menorNumero = quantidadePaginasFim;
  if (quantidadePaginasInicio === quantidadePaginasFim)
    menorNumero = quantidadePaginasInicio;

  console.log(menorNumero);
};

// pageCount(5, 3); // 1
// pageCount(6, 2); // 1
// pageCount(5, 4); // 0
// pageCount(5, 1); // 0
