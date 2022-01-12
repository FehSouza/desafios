// Breno adora chocolates e vai para a loja com "$N" dinheiro no bolso. O preço de cada chocolate é "$C". A loja oferece
// um desconto: para cada "M" embalagem que ele dá para a loja, ele ganha um chocolate grátis. Quantos chocolates Breno
// consegue comer?

const chocolateFeast = (n, c, m) => {
  const quantMoney = n;
  const price = c;
  const packages = m;

  let quantChocolate = Math.floor(quantMoney / price);

  let quantPackages = 0;

  while (quantChocolate / packages >= 1) {
    let swapChocolate = Math.floor(quantChocolate / packages);
    quantPackages += swapChocolate;
    quantChocolate = quantChocolate - packages * swapChocolate + swapChocolate;
  }

  const calcChocolate = Math.floor(quantMoney / price) + quantPackages;

  return calcChocolate;
};

console.log(chocolateFeast(1575, 1, 262), 1581);
console.log(chocolateFeast(2216, 8, 35), 285);
console.log(chocolateFeast(14440, 3, 275), 4830);
console.log(chocolateFeast(10, 2, 5), 6);
console.log(chocolateFeast(12, 4, 4), 3);
console.log(chocolateFeast(6, 2, 2), 5);
console.log(chocolateFeast(16809, 123, 11668), 136);
console.log(chocolateFeast(20373, 18211, 10188), 1);
console.log(chocolateFeast(92512, 413, 33040), 224);
console.log(chocolateFeast(2339, 4, 1337), 584);
console.log(chocolateFeast(96741, 945, 77194), 102);
console.log(chocolateFeast(53270, 182, 30238), 292);
console.log(chocolateFeast(47733, 230, 4840), 207);
console.log(chocolateFeast(60751, 346, 20578), 175);
console.log(chocolateFeast(19150, 99, 2945), 193);
console.log(chocolateFeast(94566, 514, 47583), 183);
console.log(chocolateFeast(17274, 5234, 12885), 3);
console.log(chocolateFeast(39478, 364, 23991), 108);
console.log(chocolateFeast(46052, 388, 43028), 118);
console.log(chocolateFeast(21816, 14645, 1827), 1);
console.log(chocolateFeast(98573, 74120, 44437), 1);
console.log(chocolateFeast(47151, 78, 28526), 604);
console.log(chocolateFeast(18991, 78, 10010), 243);
console.log(chocolateFeast(28583, 113, 5299), 252);
console.log(chocolateFeast(34587, 86, 33334), 402);
console.log(chocolateFeast(59272, 24946, 44416), 2);
console.log(chocolateFeast(41894, 36, 640), 1164);
console.log(chocolateFeast(65164, 522, 23728), 124);
console.log(chocolateFeast(40916, 399, 30670), 102);
console.log(chocolateFeast(7045, 25, 6484), 281);
console.log(chocolateFeast(45567, 63, 7564), 723);
console.log(chocolateFeast(63041, 302, 50870), 208);
console.log(chocolateFeast(33773, 13179, 6929), 2);
console.log(chocolateFeast(71656, 325, 52375), 220);
console.log(chocolateFeast(16974, 1248, 6090), 13);
console.log(chocolateFeast(74892, 314, 48340), 238);
console.log(chocolateFeast(45312, 848, 44198), 53);
console.log(chocolateFeast(96428, 81144, 43066), 1);
console.log(chocolateFeast(61264, 96, 14300), 638);
console.log(chocolateFeast(52734, 489, 40749), 107);
console.log(chocolateFeast(42751, 125, 8850), 342);
console.log(chocolateFeast(51803, 25, 38253), 2072);
