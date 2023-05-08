let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

function getAndPrintStudentAverage(scores) {
  let sum = 0;
  let i;
  for (i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  const avg = sum / i;
  //   console.log("sum", sum);
  //   console.log("i", i);
  return avg;
}

function getAndPrintClassAverage(students) {
  let i;
  let classSum = 0;
  let studentAvg = 0;
  for (i = 0; i < students.length; i++) {
    studentAvg = getAndPrintStudentAverage(students[i].scores);
    console.log(students[i].name, "average is:", studentAvg.toFixed(2));
    classSum += studentAvg;
  }
  const classAvg = classSum / i;
  console.log("The Class Average is:", classAvg.toFixed(2));
  console.log("-".repeat(30));
}
// getAndPrintClassAverage(students);
getAndPrintClassAverage(students);
