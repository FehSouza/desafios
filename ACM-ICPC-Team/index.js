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
  let maxPoint = 0;
  let quantityTeam = 0;

  const compareParticipants = (part1, part2) => {
    let points = 0;
    for (let i = 0; i < part1.length; i++) {
      if (part1[i] === "1" || part2[i] === "1") points++;
    }
    return points;
  };

  for (let i = 0; i < topic.length; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      const participant1 = topic[i];
      const participant2 = topic[j];
      const points = compareParticipants(participant1, participant2);
      if (points > maxPoint) {
        maxPoint = points;
        quantityTeam = 0;
      }
      if (points === maxPoint) quantityTeam++;
    }
  }

  return [maxPoint, quantityTeam];
};

/*
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
    const concat = [...topic[elem[0]], ...topic[elem[1]]];
    for (let i = 0; i < concat.length / 2; i++) {
      if (concat[i] === "1" || concat[concat.length / 2 + i] === "1") acc++;
    }
    return acc;
  });

  const maxPoint = Math.max(...pointsForTeam);

  const res = pointsForTeam.reduce((acc, elem) => {
    if (elem === maxPoint) acc = acc + 1;
    return acc;
  }, 0);

  return [maxPoint, res];
};
*/

/*
const acmTeam = (topic) => {
  const listOfPoints = [];

  for (let i = 0; i < topic.length; i++) {
    const participantTemp = i;
    for (let j = i + 1; j < topic.length; j++) {
      const concat = [...topic[participantTemp], ...topic[j]];
      let acc = 0;
      for (let i = 0; i < concat.length / 2; i++) {
        if (
          Number(concat[i]) == 1 ||
          Number(concat[concat.length / 2 + i]) == 1
        )
          acc++;
      }
      listOfPoints.push(acc);
    }
  }

  const maxPoint = Math.max(...listOfPoints);

  const res = listOfPoints.reduce((acc, elem) => {
    if (elem == maxPoint) acc = acc + 1;
    return acc;
  }, 0);

  return [maxPoint, res];
};
*/

/*
const acmTeam = (topic) => {
  const listOfPoints = [];

  for (let i = 0; i < topic.length; i++) {
    const participantTemp = i;
    for (let j = i + 1; j < topic.length; j++) {
      const sum = String(Number(topic[participantTemp]) + Number(topic[j]));

      let acc = 0;
      for (const item of sum) {
        if (item != "0") acc++;
      }
      listOfPoints.push(acc);
    }
  }

  const maxPoint = Math.max(...listOfPoints);

  const res = listOfPoints.reduce((acc, elem) => {
    if (elem == maxPoint) acc = acc + 1;
    return acc;
  }, 0);

  return [maxPoint, res];
};
*/

/*
const acmTeam = (topic) => {
  const listOfParticipants = [];

  const createTeam = (participants) => {
    for (let i = 0; i < participants.length; i++) {
      const participantTemp = i;
      for (let j = i + 1; j < participants.length; j++) {
        listOfParticipants.push([participantTemp, j]);
      }
    }
  };

  createTeam(topic);

  const pointsForTeam = listOfParticipants.map((elem) => {
    let acc = 0;
    for (let i = 0; i < topic[elem[0]]; i++) {
      if (topic[elem[0]][i] === "1" || topic[elem[1]][i] === "1") acc++;
    }
    return acc;
  });

  const getHigherScore = (listOfPoints) => {
    return Math.max(...listOfPoints);
  };

  getHigherScore(pointsForTeam);

  const countTeams = pointsForTeam.reduce((acc, elem) => {
    if (elem === getHigherScore(pointsForTeam)) acc = acc + 1;
    return acc;
  }, 0);

  return [getHigherScore(pointsForTeam), countTeams];
};
*/

console.log(acmTeam(["10101", "11110", "00010"]), [5, 1]);
console.log(acmTeam(["10101", "11100", "11010", "00101"]), [5, 2]);
