// Faça a função countApplesAndOranges, que deve imprimir o número de maçãs e laranjas que caíram na casa, cada uma em uma linha separada.
// A função countApplesAndOranges tem os seguintes parâmetros:
// s: inteiro, ponto inicial da localização da casa.
// t: inteiro, ponto final da localização da casa.
// a: inteiro, localização da macieira.
// b: inteiro, localização da laranjeira.
// maçãs: array de inteiros, distâncias em que cada maçã cai da árvore.
// laranjas: array de inteiros, distâncias em que cada laranja cai da árvore.

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const pontoInicialCasa = s;
  const pontoFinalCasa = t;
  const pontoMacieira = a;
  const pontoLaranjeira = b;
  const listaMacas = apples;
  const listaLaranjas = oranges;

  let contadorMaca = 0;
  let contadorLaranja = 0;

  for (let item of listaMacas) {
    const localizacaoMaca = pontoMacieira + item;
    if (
      localizacaoMaca >= pontoInicialCasa &&
      localizacaoMaca <= pontoFinalCasa
    ) {
      contadorMaca++;
    }
  }

  for (let item of listaLaranjas) {
    const localizacaoLaranja = pontoLaranjeira + item;
    if (
      localizacaoLaranja >= pontoInicialCasa &&
      localizacaoLaranja <= pontoFinalCasa
    ) {
      contadorLaranja++;
    }
  }

  const listaFrutasNaCasa = [contadorMaca, contadorLaranja];
  console.log(listaFrutasNaCasa.join("\n"));
};

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
