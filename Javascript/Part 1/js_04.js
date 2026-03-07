function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

[275, 40, 430].forEach((bill) => {
  const tip = calcTip(bill);
  console.log(
    `The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${(bill + tip).toFixed(2)}`,
  );
});
