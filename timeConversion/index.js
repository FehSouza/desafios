// Dado uma hora em formato AM/PM, converte para o horário militar (24 horas).
// Nota: 12:00:00AM em um relógio de 12 horas é 00:00:00 em um relógio de 24 horas.
// Nota: 12:00:00PM em um relógio de 12 horas é 12h00 em um relógio de 24 horas.

const time1 = "11:30:00AM";
const time2 = "11:30:00PM";

function timeConversion(s) {
  const time = s;

  let res = "";

  if (time.slice(8) === "AM") {
    res = time.slice(0, 8);
    if (time.slice(0, 2) === "12") {
      res = "00:00:00";
    }
  }

  if (time.slice(8) === "PM") {
    let horaParaTroca = time.slice(0, 2);
    let hora = Number(horaParaTroca) + 12;
    res = time.slice(0, 8).replace(horaParaTroca, hora);
    if (time.slice(0, 2) === "12") {
      res = "12:00:00";
    }
  }

  return res;
}

timeConversion(time1);
