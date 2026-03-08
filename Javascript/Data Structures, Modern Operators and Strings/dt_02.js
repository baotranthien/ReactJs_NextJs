for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
}

average /= odds.length;
console.log(average);

for (const [key, value] of Object.entries(game.odds)) {
  const teamStr = key === "x" ? "draw" : `victory ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
