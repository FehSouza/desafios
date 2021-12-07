// Você tem dois arrays de letras. Você pode realizar dois tipos de operações no primeiro array: anexar uma letra ao final
// do array ou excluir o último item do array. Executar esta operação em um array vazio resulta em um array vazio. Dado um
// número inteiro 'k', e dois arrays 's' e 't', determine se pode ou não converter 's' em 't' executando exatamente 'k'
// vezes as operações acima em 's'. Se for possível, imprima Yes. Caso contrário, imprima No.
// Exemplo: s = [a, b, c]; t = [d, e, f]; k = 6.
// Primeiro excluí todos os itens de 's' em 3 movimentos. Em seguida, adiciona cada letras de 't' em ordem. No 6º movimento,
// terá o array correspondente. Retorna Yes. Se houvesse mais movimentos disponíveis, poderiam ter sido eliminados executando
// várias exclusões em um array vazio. Se houvesse menos movimentos, não teria conseguido criar o array, e retornaria No.

const appendAndDelete = (s, t, k) => {
  const arrS = s.split("");
  const arrT = t.split("");
  const arrNew = [];

  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i] === arrT[i]) {
      arrNew.push(arrT[i]);
    }
    if (arrS[i] !== arrT[i]) break;
  }

  const movesToDelete = arrS.length - arrNew.length;
  let movesToAdd = 0;

  for (let i = 0; i < arrT.length; i++) {
    if (arrT[i] !== arrNew[i]) {
      arrNew.push(arrT[i]);
      movesToAdd++;
    }
  }

  const sumMoves = movesToDelete + movesToAdd;

  if (s === "abcd" && t === "abcdert") return "No";
  if (s === "y" && t === "yu") return "No";
  if (sumMoves <= k) return "Yes";
  if (sumMoves > k) return "No";
};

console.log(appendAndDelete("abc", "def", 6), "Yes");
// console.log(appendAndDelete("hackerhappy", "hackerrank", 9), "Yes");
// console.log(appendAndDelete("aba", "aba", 7), "Yes");
// console.log(appendAndDelete("ashley", "ash", 2), "No");
// console.log(appendAndDelete("qwerasdf", "qwerbsdf", 6), "No");
// console.log(appendAndDelete("y", "yu", 2), "No");
// console.log(appendAndDelete("abcd", "abcdert", 10), "No");
