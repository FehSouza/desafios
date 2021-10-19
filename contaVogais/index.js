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

otherFrases.forEach((i) => {
  const output = myFunction(i.input);
  if (output === i.expected) console.log("✔️ - ", i.expected);
  if (output !== i.expected) console.log("❌ - ", output, i.expected);
});

/*
    a função deve retornar a quantidade de vogais da frase
    o unico lugar que deve escrever codigo é dentro da função
  */

function myFunction(frase) {
  let vogais = 0;
  for (let index = 0; index < frase.length; index++) {
    let letra = frase[index];
    let letraMinuscula = letra.toLowerCase();
    if (
      letraMinuscula == "a" ||
      letraMinuscula == "e" ||
      letraMinuscula == "i" ||
      letraMinuscula == "o" ||
      letraMinuscula == "u" ||
      letraMinuscula == "á" ||
      letraMinuscula == "à" ||
      letraMinuscula == "â" ||
      letraMinuscula == "ã" ||
      letraMinuscula == "ä" ||
      letraMinuscula == "é" ||
      letraMinuscula == "è" ||
      letraMinuscula == "ê" ||
      letraMinuscula == "ë" ||
      letraMinuscula == "í" ||
      letraMinuscula == "ì" ||
      letraMinuscula == "î" ||
      letraMinuscula == "ï" ||
      letraMinuscula == "ó" ||
      letraMinuscula == "ò" ||
      letraMinuscula == "ô" ||
      letraMinuscula == "õ" ||
      letraMinuscula == "ö" ||
      letraMinuscula == "ú" ||
      letraMinuscula == "ù" ||
      letraMinuscula == "û" ||
      letraMinuscula == "ü"
    ) {
      vogais++;
    }
  }
  return vogais;
}
