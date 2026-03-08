const events = [...new Set(gameEvents.values())];

gameEvents.delete(64);

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`,
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`[${half}] ${min}: ${event}`);
}
