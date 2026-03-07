function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const t = calcTip(bills[i]);
  tips.push(+t.toFixed(2));
  totals.push(+(bills[i] + t).toFixed(2));
}

console.log("tips:", tips);
console.log("totals:", totals);

// Bonus: average function
function calcAverageArr(arr) {
  let sum = 0;
  for (let v of arr) sum += v;
  return sum / arr.length;
}

console.log("Average of totals:", calcAverageArr(totals).toFixed(2));
