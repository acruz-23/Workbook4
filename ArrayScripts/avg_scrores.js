let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
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
console.log("myScores Average:", getAverage(myScores).toFixed(2));
console.log("yourScores Average:", getAverage(yourScores).toFixed(2));
