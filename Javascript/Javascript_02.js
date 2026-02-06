//challenge 1
console.log("Challenge 1:");

const calcAverage = (score1, score2, score3) => {
  avg = (score1 + score2 + score3) / 3;
  console.log(avg);
  return avg;
};

const checkWinner = (dol, koa) => {
  if (dol >= koa * 2) {
    console.log("Dolphins wins");
  } else if (koa >= dol * 2) {
    console.log("Koalas wins");
  } else {
    console.log("No team wins!");
  }
};

console.log("Data 1:");
dol_avg_1 = calcAverage(44, 23, 71);
koa_avg_1 = calcAverage(65, 54, 49);
checkWinner(dol_avg_1, koa_avg_1);

console.log("Data 2:");
dol_avg_2 = calcAverage(85, 54, 41);
koa_avg_2 = calcAverage(23, 34, 27);
checkWinner(dol_avg_2, koa_avg_2);

//challenge 2
console.log("Challenge 2:");
const calcTip = (bill) => {
  tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

bills = [125, 555, 44];
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
totals = [];
for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}
console.log("tips: " + tips);
console.log("totals: " + totals);

//challenge 3
console.log("Challenge 3:");

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

//Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    "Mark's BMI (" +
      mark.calcBMI() +
      ") is higher than John's (" +
      john.calcBMI() +
      ")!",
  );
} else {
  console.log(
    "John's BMI (" +
      john.calcBMI() +
      ") is higher than Mark's (" +
      mark.calcBMI() +
      ")!",
  );
}

//challenge 4
console.log("Challenge 4:");

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log("Bills: "+ bills);
console.log("Tips: "+ tips);
console.log("Totals: "+ totals);

function calcAverageBonus(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

const averageTotal = calcAverageBonus(totals);
console.log(averageTotal);

