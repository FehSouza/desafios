// Uma empresa está adotando uma nova estratégia de publicidade. Quando eles lançam um novo produto, eles o anunciam para
// exatamente 5 pessoas nas redes sociais. No primeiro dia, metade daquelas 5 pessoas (ou seja, 5 / 2 = 2) dão like no
// anúncio e cada um o compartilha com 3 de seus amigos. No início do segundo dia, 2 * 3 = 6 pessoas recebem o anúncio.
// Cada dia, metade dos destinatários gostam do anúncio e irão compartilhá-lo com mais 3 amigos no dia seguinte. Supondo
// que ninguém receba o anúncio duas vezes, determine quantas pessoas gostaram do anúncio ao final de um determinado dia.

const viralAdvertising = (n) => {
  let likes = [];
  let people = 5;

  for (let i = 1; i <= n; i++) {
    likes.push(Math.floor(people / 2));
    people = likes[i - 1] * 3;
  }

  const sumLikes = likes.reduce((acc, num) => acc + num, 0);

  console.log(sumLikes);
};

viralAdvertising(5); // 24
// viralAdvertising(3); // 9
