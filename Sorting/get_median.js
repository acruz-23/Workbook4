let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100, 90];

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
function sortNumbersAsc(array) {
  let sortedArray = array.sort(function (a, b) {
    return a - b;
  });

  return sortedArray;
}

function getMedian(sortedArray) {
  const midpoint = sortedArray.length / 2;
  let median;
  if (sortedArray.length % 2 == 0) {
    const smallerCenter = sortedArray[midpoint - 1];
    const largerCenter = sortedArray[midpoint];
    median = (smallerCenter + largerCenter) / 2;
    return median;
  } else {
    median = sortedArray[Math.ceil(midpoint) - 1];
  }
  return median;
}
console.log(sortNumbersAsc(myScores));
console.log(getMedian(sortNumbersAsc(myScores)));
console.log(sortNumbersAsc(yourScores));
console.log(getMedian(sortNumbersAsc(yourScores)));
