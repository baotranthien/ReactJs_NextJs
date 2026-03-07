function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = bills.map(calcTip);
const totals = bills.map((b, i) => b + tips[i]);

console.log("bills:", bills);
console.log(
  "tips:",
  tips.map((t) => +t.toFixed(2)),
);
console.log(
  "totals:",
  totals.map((t) => +t.toFixed(2)),
);
