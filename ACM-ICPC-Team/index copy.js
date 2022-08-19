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
  const arr = []

  for (i = 0; i < topic.length; i++) {
    const tempI = topic[i]
    for (j = i + 1; j < topic.length; j++) {
      const tempJ = topic[j]
      arr.push([tempI, tempJ])
    }
  }

  const newArr = arr.map((elem) => {
    const [a, b] = elem
    const arrA = a.split('')
    const arrB = b.split('')

    return arrA.reduce((acc, elem, i) => {
      const aTemp = elem
      const bTemp = arrB[i]

      if (aTemp === '1' || bTemp === '1') acc = acc + 1
      return acc
    }, 0)
  })

  const newArrSort = newArr.sort((a, b) => b - a)

  const res = newArrSort.reduce((acc, elem) => {
    if (elem === newArrSort[0]) acc = acc + 1
    return acc
  }, 0)

  return [newArrSort[0], res]
}

console.log(acmTeam(['10101', '11110', '00010']), [5, 1])
console.log(acmTeam(['10101', '11100', '11010', '00101']), [5, 2])
