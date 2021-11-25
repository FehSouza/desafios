// Dois amigos, 'A' e 'B', estão decidindo como dividir a conta em um jantar. Cada um pagará pelos itens que consome. 'B'
// recebe o cheque e calcula a porção de 'A'. Você deve determinar se o cálculo dele está correto. Por exemplo, suponha
// que a conta tenha os seguintes preços: bill = [2, 4, 6]. 'A' se recusa a comer o item k = bill[2], que custa 6. Se 'B'
// calcular a conta corretamente, 'A' pagará (2+4)/2 = 3. Se ele incluir o custo de bill[2], ele vai calcular (2+4+6)/2 = 6.
// No segundo caso, ele deve reembolsar 3 para 'A'. A função deve imprimir Bon Appetit se a conta for dividida de maneira
// justa. Caso contrário, ela deve imprimir a quantia inteira de dinheiro que 'B' deve a 'A'.
// bill: array de inteiros que representam o custo de cada item pedido;
// k: um inteiro que representa o item que 'A' não come;
// b: a quantidade de dinheiro que 'A' contribuiu para a conta.

const bonAppetit = (bill, k, b) => {
  bill.splice(k, 1);

  let billToPay = 0;

  for (const item of bill) {
    billToPay += item;
  }

  const splitBill = billToPay / 2;

  if (splitBill === b) return console.log("Bon Appetit");
  if (splitBill !== b) return console.log(b - splitBill);
};

bonAppetit([3, 10, 2, 9], 1, 12); // 5
// bonAppetit([3, 10, 2, 9], 1, 7); // Bon Appetit
