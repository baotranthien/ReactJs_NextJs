const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((dog) => {
  dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
});

const sarahDog = dogs.find((d) => d.owners.includes("Sarah"));

console.log(
  sarahDog.curFood > sarahDog.recommendedFood
    ? "too much"
    : sarahDog.curFood < sarahDog.recommendedFood
      ? "too little"
      : "okay",
);

const ownersEatTooMuch = dogs
  .filter((d) => d.curFood > d.recommendedFood * 1.1)
  .flatMap((d) => d.owners);

const ownersEatTooLittle = dogs
  .filter((d) => d.curFood < d.recommendedFood * 0.9)
  .flatMap((d) => d.owners);

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);

console.log(dogs.some((d) => d.curFood === d.recommendedFood));

const checkOkay = (d) =>
  d.curFood > d.recommendedFood * 0.9 && d.curFood < d.recommendedFood * 1.1;

console.log(dogs.some(checkOkay));

const dogsOkay = dogs.filter(checkOkay);

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsOkay);
console.log(dogsSorted);
