// Várias pessoas estarão participando das Finais Mundiais. Cada um deles pode ser bom em vários tópicos. Dada uma lista
// de tópicos conhecidos por cada participante, apresentada como cadeias binárias, determine o número máximo de tópicos
// que uma equipe de 2 pessoas pode saber. Cada assunto tem uma coluna na string binária, '1' significa que o assunto é
// conhecido, e '0' significa que não é. Além disso, determine o número de equipes que sabem o número máximo de tópicos.
// Retorna uma matriz inteira com dois elementos: o número máximo de tópicos conhecidos e o número de equipes que conhecem,
// aquele número de tópicos. Exemplo: n = [3]; topics = ['10101', '11110', '00010']
// Os dados do participante estão alinhados para maior clareza abaixo:
// 10101
// 11110
// 00010
// Estas são todas as equipes possíveis que podem ser formadas:
// Members Subjects
// (1,2)   [1,2,3,4,5]
// (1,3)   [1,3,4,5]
// (2,3)   [1,2,3,4]
// Neste caso, a primeira equipe conhecerá todos os 5 assuntos. Eles são a única equipe que pode ser criada que conhece
// tantos assuntos, então é devolvido [5, 1].

const acmTeam = (topic) => {
  const listOfParticipants = [];

  for (let i = 0; i < topic.length; i++) {
    const participantTemp = i;
    for (let j = i + 1; j < topic.length; j++) {
      listOfParticipants.push([participantTemp, j]);
    }
  }

  const pointsForTeam = listOfParticipants.map((elem) => {
    let acc = 0;
    for (let i = 0; i < topic[elem[0]]; i++) {
      if (topic[elem[0]][i] === "1" || topic[elem[1]][i] === "1") acc++;
    }
    return acc;
  });

  const countTeams = pointsForTeam.reduce((acc, elem) => {
    if (elem === Math.max(...pointsForTeam)) acc = acc + 1;
    return acc;
  }, 0);

  return [Math.max(...pointsForTeam), countTeams];
};

// const acmTeam = (topic) => {
//   const listOfParticipants = [];

//   const createTeam = (participants) => {
//     for (let i = 0; i < participants.length; i++) {
//       const participantTemp = i;
//       for (let j = i + 1; j < participants.length; j++) {
//         listOfParticipants.push([participantTemp, j]);
//       }
//     }
//   };

//   createTeam(topic);

//   const pointsForTeam = listOfParticipants.map((elem) => {
//     let acc = 0;
//     for (let i = 0; i < topic[elem[0]]; i++) {
//       if (topic[elem[0]][i] === "1" || topic[elem[1]][i] === "1") acc++;
//     }
//     return acc;
//   });

//   const getHigherScore = (listOfPoints) => {
//     return Math.max(...listOfPoints);
//   };

//   getHigherScore(pointsForTeam);

//   const countTeams = pointsForTeam.reduce((acc, elem) => {
//     if (elem === getHigherScore(pointsForTeam)) acc = acc + 1;
//     return acc;
//   }, 0);

//   return [getHigherScore(pointsForTeam), countTeams];
// };

// console.log(acmTeam(["10101", "11110", "00010"]), [5, 1]);
console.log(acmTeam(["10101", "11100", "11010", "00101"]), [5, 2]);
