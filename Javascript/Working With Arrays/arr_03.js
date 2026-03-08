const calcAverageHumanAgeChained = (ages) =>
  ages
    .map((d) => (d <= 2 ? 2 * d : 16 + d * 4))
    .filter((h) => h >= 18)
    .reduce((acc, v, _, arr) => acc + v / arr.length, 0);

console.log(calcAverageHumanAgeChained([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeChained([16, 6, 10, 5, 6, 1, 4]));
