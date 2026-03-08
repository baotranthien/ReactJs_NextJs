function calcAverageHumanAge(ages) {
  const humanAges = ages.map((d) => (d <= 2 ? 2 * d : 16 + d * 4));

  const adults = humanAges.filter((age) => age >= 18);

  const avg = adults.reduce((sum, a) => sum + a, 0) / adults.length;

  return avg;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
