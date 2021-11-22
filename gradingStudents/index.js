// Uma universidade tem a seguinte política de avaliação: cada aluno recebe uma nota de 0 a 100.
// Alguma nota menor que 40 é uma nota de reprovação.
// Sam é um professor da universidade e gosta de acompanhar cada aluno  de acordo com estas regras:
// - Se a diferença entre a nota e o próximo múltiplo de 5 é menor do que 3, a nota é o próximo múltiplo de 5.
// - Se o valor da nota é menor que 38, nenhum arredondamento ocorre, pois o resultado ainda será uma nota de reprovação.
// Dado o valor inicial de notas dos alunos de Sam, escreva o código para automatizar o processo de arredondamento.

const listOfGrades = [73, 67, 38, 33];

const gradingStudents = (grades) => {
  const listGrades = grades;

  const listRoundedGrades = [];

  for (const item of listGrades) {
    let grade = 0;

    if (item < 38) grade = item;
    if (item >= 38) {
      const restOfDivision = item % 5;
      const differenceValues = 5 - restOfDivision;

      if (differenceValues >= 3) grade = item;
      if (differenceValues < 3) {
        const division = Number.parseInt(item / 5);
        grade = (division + 1) * 5;
      }
    }
    listRoundedGrades.push(grade);
  }

  const newList = listRoundedGrades.join("\n");
  console.log(newList);
};

gradingStudents(listOfGrades);
