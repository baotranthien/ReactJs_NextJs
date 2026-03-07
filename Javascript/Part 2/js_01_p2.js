const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgD, avgK) {
  if (avgD >= 2 * avgK) {
    console.log(`Dolphins win (${avgD.toFixed(0)} vs ${avgK.toFixed(0)})`);
  } else if (avgK >= 2 * avgD) {
    console.log(`Koalas win (${avgK.toFixed(0)} vs ${avgD.toFixed(0)})`);
  } else {
    console.log("No team wins because no team has at least double the other.");
  }
}

// Test data
let avgD = calcAverage(44, 23, 71);
let avgK = calcAverage(65, 54, 49);
checkWinner(avgD, avgK);

avgD = calcAverage(85, 54, 41);
avgK = calcAverage(23, 34, 27);
checkWinner(avgD, avgK);
