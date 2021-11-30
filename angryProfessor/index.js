// Um professor tem uma turma de alunos. Frustrado com a falta de disciplina, ele decide cancelar a aula se menos do que
// k alunos estiver presente no início da aula. A hora da aula começa no 0, então quem chegar após 0, está atrasado. Dada
// as horas de chegada e o número limite de participantes, determine se a aula será cancelada (YES) ou não (NO).

const angryProfessor = (k, a) => {
  const presentStudents = a.reduce((acc, timeStudent) => {
    if (timeStudent <= 0) acc++;
    return acc;
  }, 0);

  if (presentStudents >= k) return "NO";
  if (presentStudents < k) return "YES";
};

// angryProfessor(3, [-2, -1, 0, 1, 2]); // NO
// angryProfessor(3, [-1, -3, 4, 2]); // YES
// angryProfessor(2, [0, -1, 2, 1]); // NO
