const otherFrases = [
  {
    input:
      "Seja estranho. Seja aleatório. Seja quem você é. Porque você nunca sabe quem amaria a pessoa que você esconde.",
    expected: 46,
  },
  { input: "A vida é um caos aleatório, Ördenada pelo tempo.", expected: 21 },
  {
    input:
      "O aleatórìo não exïste, nosso cérebro semprÊ toma decÏsões mesmo que Ócultas.",
    expected: 32,
  },
  {
    input:
      "Um Àto aleatório de bondade, por menor que seja, pode ter Ùm tremendo impacto na vida de oùtrà pessoa.",
    expected: 40,
  },
];

const frases = [
  { input: "uma frase legal", expected: 6 },
  {
    input: "A vida e uma caixa preta nunca saberemos o seu real significado.",
    expected: 27,
  },
  { input: "não deveríâmos temer a morte, mas sim a vida.", expected: 17 },
];

frases.forEach((i) => {
  const output = myFunction(i.input);
  if (output === i.expected) console.log("✔️ - ", i.expected);
  if (output !== i.expected) console.log("❌ - ", output, i.expected);
});

/*
    a função deve retornar a quantidade de vogais da frase
    o unico lugar que deve escrever codigo é dentro da função
  */

/*
function myFunction(frase) {
  const dicionario = "aáàãâäeéèêëiíìîïoóòõôöuúùûü";
  let vogais = 0;
  for (const letra of frase) {
    if (dicionario.includes(letra.toLowerCase())) vogais++;
  }
  return vogais;
}
*/

/*function myFunction(frase) {
  const dicionario = "aáàãâäeéèêëiíìîïoóòõôöuúùûü";
  let vogais = 0;
  [...frase].forEach(function (item) {
    if (dicionario.includes(item.toLowerCase())) vogais++;
  });
  return vogais;
}
*/

/*
function myFunction(frase) {
  const dicionario = "aáàãâäeéèêëiíìîïoóòõôöuúùûü";
  const letras = [...frase].filter(function (item) {
    return dicionario.includes(item.toLowerCase());
  });
  return letras.length;
}
*/

/*
function myFunction(frase) {
  const dicionario = "aáàãâäeéèêëiíìîïoóòõôöuúùûü";
  const letras = [...frase].filter((item)=> {
    return dicionario.includes(item.toLowerCase());
  });
  return letras.length;
}
*/

function myFunction(frase) {
  const dicionario = "aáàãâäeéèêëiíìîïoóòõôöuúùûü";
  const letras = [...frase].filter((item) =>
    dicionario.includes(item.toLowerCase())
  );
  return letras.length;
}
