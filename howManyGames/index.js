// Você deseja comprar videogames de uma loja. Normalmente, todos os jogos são vendidos ao mesmo preço, 'p' dólares. No
// entanto, eles planejam ter a promoção sazonal de Halloween no próximo mês, na qual você pode comprar jogos a um preço
// mais barato. Especificamente, o primeiro jogo custará 'p' dólares, e cada jogo subsequente custará 'd' dólares a menos
// que o anterior. Isso continuará até que o custo se torne menor ou igual a 'm' dólares, após o qual cada jogo custará
// 'm' dólares. Quantos jogos você pode comprar durante a Promoção de Halloween, sabendo que possuí 's' dólares?
// Exemplo: p = 20, d = 3, m = 6, s = 70
// A seguir estão os custos dos 11 primeiros jogos, em ordem: 20, 17, 14, 11, 8, 6, 6, 6, 6, 6, 6.
// Começa ao custo de p = 20, reduza-o em d = 3 unidades a cada iteração até atingir um preço mínimo possível de m = 6.
// Começando com s = 70 unidades de moeda em sua carteira, você pode comprar 5 jogos: 20 + 17 + 14 + 11 + 8 = 70.

const howManyGames = (p, d, m, s) => {
  const amount = s;
  const priceFirst = p;
  const discount = d;
  const minimum = m;

  let restAmount = amount - priceFirst;
  let priceActually = priceFirst;
  let quantityGame = 1;

  if (amount < priceFirst) return (quantityGame = 0);

  while (priceActually - discount >= minimum) {
    priceActually -= discount;
    if (restAmount < priceActually) return quantityGame;
    restAmount -= priceActually;
    quantityGame++;
  }

  while (restAmount >= minimum) {
    restAmount = restAmount - minimum;
    quantityGame++;
  }

  return quantityGame;
};

console.log(howManyGames(20, 3, 6, 70), 5);
console.log(howManyGames(20, 3, 6, 80), 6);
console.log(howManyGames(20, 3, 6, 85), 7);
console.log(howManyGames(16, 2, 1, 9981), 9917);
console.log(howManyGames(100, 1, 1, 99), 0);
console.log(howManyGames(100, 19, 1, 180), 1);
