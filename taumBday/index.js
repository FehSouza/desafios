// Taum está planejando comemorar o aniversário de sua amiga. Existem dois tipos de presentes que sua amiga quer: um é preto
// e o outro é branco. Para fazê-la feliz, Taum tem que comprar 'b' presentes pretos e 'w' presentes brancos. O custo de
// cada presente preto é 'bc' unidades. O custo de cada presente branco é 'wc' unidades. O custo para converter um presente
// preto em um presente branco, ou vice-versa, é 'z' unidades. Determine o custo mínimo dos presentes de sua amiga.
// Exemplo: b = 3; w = 5; bc = 3; wc = 4; z = 1
// O menor custo será de 29.

const presents = (b, w, bc, wc, z) => {
  const black = BigInt(b);
  const white = BigInt(w);
  const priceBlack = BigInt(bc);
  const priceWhite = BigInt(wc);
  const swap = BigInt(z);

  if (priceBlack === priceWhite) return black * priceBlack + white * priceWhite;

  if (priceBlack + swap < priceWhite)
    return black * priceBlack + white * (priceBlack + swap);

  if (priceWhite + swap < priceBlack)
    return black * (priceWhite + swap) + white * priceWhite;

  if (priceBlack + swap > priceWhite || priceWhite + swap > priceBlack)
    return black * priceBlack + white * priceWhite;
};

console.log(presents(3, 5, 3, 4, 1), 29);
console.log(presents(10, 10, 1, 1, 1), 20);
console.log(presents(5, 9, 2, 3, 4), 37);
console.log(presents(3, 6, 9, 1, 1), 12);
console.log(presents(7, 7, 4, 2, 1), 35);
console.log(presents(3, 3, 1, 9, 2), 12);
console.log(presents(742407782, 90529439, 847666641, 8651519, 821801924), 617318315833461267n);
console.log(presents(142640749, 652432197, 701695848, 936714099, 324221606), 711232858900355655n);
console.log(presents(736418699, 754161925, 912285746, 841360803, 736841333), 1306346564995590229n);
