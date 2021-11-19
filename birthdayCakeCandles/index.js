// Você fica encarregado do bolo de aniversário de uma criança.
// Você decidiu que o bolo terá uma vela para cada ano de sua idade total.
// Eles só serão capazes de apagar as velas mais altas.
// Retorne quantas velas são as mais altas.

const candlesArr = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
  const cakeCandles = candles;

  const orderCakeCandles = cakeCandles.sort((a, b) => {
    return a - b;
  });

  const lastValue = orderCakeCandles[orderCakeCandles.length - 1];

  let quantityCandles = 0;

  for (let i = 0; i < orderCakeCandles.length; i++) {
    let analyzedValue = orderCakeCandles[i];
    if (analyzedValue === lastValue) quantityCandles += 1;
  }

  const integer = quantityCandles;

  console.log(integer);
}

birthdayCakeCandles(candlesArr);
