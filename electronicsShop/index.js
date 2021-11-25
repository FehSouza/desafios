// Uma pessoa deseja determinar o teclado e o USB mais caros que podem ser comprados com um orçamento. Dadas as listas de
// preços dos itens e o orçamento, encontre o maior custo para comprá-los. Se não for possível comprar os dois, devolva -1.

const getMoneySpent = (keyboards, drives, b) => {
  let acc = 0;

  for (const itemKeyboard of keyboards) {
    for (const itemDrive of drives) {
      const price = itemKeyboard + itemDrive;
      if (price <= b) {
        if (price > acc) acc = price;
      }
    }
  }

  if (acc === 0) console.log(-1);
  if (acc !== 0) console.log(acc);
};

getMoneySpent([40, 50, 60], [5, 8, 12], 60); // 58
// getMoneySpent([3, 1], [5, 2, 8], 10) // 9
// getMoneySpent([4], [5], 5); // -1
