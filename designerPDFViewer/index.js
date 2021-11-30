// Existe uma lista de 26 alturas de caracteres alinhadas pelo index às letras do alfabeto. Por exemplo, 'a' está no index
// 0 e 'z' está no index 25. Há também uma palavra à ser analisada. Usando as alturas das letras fornecidas, determine a
// área do retângulo destacado, em mm², assumindo que todas as letras possuem 1mm de largura. Exemplo:
// h = [1,3,1,3,1,4,1,3,2,5,5,5,5,1,1,5,5,1,5,2,5,5,5,5,5,5]
// word = "torn"
// As alturas são t = 2, o = 1, r = 1 e n = 1. A letra mais alta possui 2 de altura e ao todo são 4 letras. Assim, a área
// iluminada será de 8 mm². Retorne 8.

const designerPdfViewer = (h, word) => {
  const alphabet = [
    "a", //0
    "b", //1
    "c", //2
    "d", //3
    "e", //4
    "f", //5
    "g", //6
    "h", //7
    "i", //8
    "j", //9
    "k", //10
    "l", //11
    "m", //12
    "n", //13
    "o", //14
    "p", //15
    "q", //16
    "r", //17
    "s", //18
    "t", //19
    "u", //20
    "v", //21
    "x", //22
    "w", //23
    "y", //24
    "z", //25
  ];

  const listOfLetters = word.split("");

  const alphabetPositionList = listOfLetters.map((letter) => {
    return alphabet.indexOf(letter);
  });

  const alphabetNumbersList = alphabetPositionList.map((position) => {
    return h[position];
  });

  alphabetNumbersList.sort((a, b) => a - b);

  const calc =
    alphabetNumbersList[alphabetPositionList.length - 1] *
    alphabetPositionList.length;

  return calc;
};

// designerPdfViewer(
//   [
//     1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 5, 1, 5, 2, 5, 5, 5, 5, 5,
//     5,
//   ],
//   "torn"
// ); // 8

// designerPdfViewer(
//   [
//     1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
//     5,
//   ],
//   "abc"
// ); // 9

designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7,
  ],
  "zaba"
); // 28
