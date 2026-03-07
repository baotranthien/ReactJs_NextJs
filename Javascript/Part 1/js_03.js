function winnerFromScores(dolphinsScores, koalasScores) {
  const avg = (arr) => arr.reduce((s, v) => s + v, 0) / arr.length;

  const avgD = avg(dolphinsScores);
  const avgK = avg(koalasScores);

  if (avgD === avgK && avgD >= 100 && avgK >= 100) {
    console.log(
      `Draw (both ${avgD.toFixed(1)}). No single winner, trophy shared.`,
    );
  } else if (avgD > avgK && avgD >= 100) {
    console.log(`Dolphins win (${avgD.toFixed(1)} vs ${avgK.toFixed(1)})`);
  } else if (avgK > avgD && avgK >= 100) {
    console.log(`Koalas win (${avgK.toFixed(1)} vs ${avgD.toFixed(1)})`);
  } else {
    console.log(
      `No team wins the trophy. Scores -> Dolphins: ${avgD.toFixed(1)}, Koalas: ${avgK.toFixed(1)}`,
    );
  }
}

// Test data:
winnerFromScores([96, 108, 89], [88, 91, 110]); // Data 1
winnerFromScores([97, 112, 101], [109, 95, 123]); // Bonus 1
winnerFromScores([97, 112, 101], [109, 95, 106]); // Bonus 2
