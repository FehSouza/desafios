// let cat = {
//   name: "Bertie",
//   color: "branca",
//   greeting: () => console.log("Meow!"),
// };

// let catName = cat.name; // poderia ser cat["name"]

// console.log(
//   `O nome do gato é ${catName} e a cor é ${cat["color"] /* cat.color */}.`
// );

// cat.color = "preta"; // aqui foi atualizada a cor de branca para preta.

// console.log(`O nome do gato é ${catName} e a cor dele é ${cat["color"]}.`);

// cat.greeting();

const band = {
  name: "Linkin Park",
  nationality: "americana",
  genre: "rock",
  members: 5,
  formed: 1996,
  split: 2017,
  albums: [
    { name: "Hybrid Theory", released: 2000 },
    { name: "Meteora", released: 2003 },
    { name: "Minutes to Midnight", released: 2007 },
    { name: "A Thousand Suns", released: 2010 },
    { name: "Living Things", released: 2012 },
    { name: "The Hunting Party", released: 2014 },
    { name: "One More Light", released: 2017 },
  ],
};

let bandInfo = `${band.name} é uma banda ${band.nationality} de ${band.genre} que foi fundada no ano de ${band.formed}`;
bandInfo += ` por ${band.members} membros. A banda ficou ativa até o ano de ${band.split}. O primeiro álbum lançado pelo`;
bandInfo += ` ${band.name} foi o ${band.albums[0].name}, lançado no ano de ${band.albums[0].released}.`

console.log(bandInfo)
