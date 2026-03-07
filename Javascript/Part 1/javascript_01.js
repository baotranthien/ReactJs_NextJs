console.log(`Part 1: Challenge 1`)
let  markMass = 78, markHeight = 1.69
let johnMass = 92, johnHeight = 1.95
let markBMI1 = markMass / (markHeight**2)
let johnBMI1 = johnMass / (johnHeight*johnHeight)
let markHigherBMI1 = markBMI1 > johnBMI1

console.log('Data 1:');
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Mark has higher BMI than John: ${markHigherBMI1}`);


const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / (markHeight2 * markHeight2);
const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

const markHigherBMI2 = markBMI2 > johnBMI2;

console.log('\nData 2:');
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Mark has higher BMI than John: ${markHigherBMI2}`);

console.log(`Challenge 2`);
if(markBMI1>johnBMI1){
    console.log(`Data 1: Mark's BMI ${markBMI1.toFixed(2)} is higher than John's ${johnBMI1.toFixed(2)}`)
}else{
    console.log(`Data 1: John's BMI ${johnBMI1.toFixed(2)} is higher than Mark's ${markBMI1.toFixed(2)}`)
}

if(markBMI2>johnBMI2){
    console.log(`Data 2: Mark's BMI ${markBMI2.toFixed(2)} is higher than John's ${johnBMI2.toFixed(2)}`)
}else{
    console.log(`Data 2: John's BMI ${johnBMI2.toFixed(2)} is higher than Mark's ${markBMI2.toFixed(2)}`)
}

console.log(`Challenge 3`);
function avg(a,b,c){return (a+b+c)/3}
let dolpAvgBase = avg(96,108,89)
let koalAvgBase = avg(88,91,110)
console.log(`Data 1:`);
if(dolpAvgBase > koalAvgBase){
    console.log(`Dolphin wins!`);
}else if(koalAvgBase > dolpAvgBase){ 
    console.log(`Koalas wins!`);
}else{
    console.log(`Draw game`);
}
console.log(`Data bonus 1`);
let dolpAvgB1= avg(97, 112, 101)
let koalAvgB1= avg(109, 95, 123)
console.log(`Dolphin's avg: ${dolpAvgB1.toFixed(2)}`);
console.log(`Koalas's avg: ${koalAvgB1}`);
if(dolpAvgB1 > koalAvgB1 && dolpAvgB1 >=100){
    console.log(`Dolphin wins`);
}else if(koalAvgB1 > dolpAvgB1 && koalAvgB1>=100){
    console.log(`Koalas wins`);
}else if(dolpAvgB1 === koalAvgB1 && dolpAvgB1 >= 100){
    console.log(`Draw game`);
}else{
    console.log(`No one wins`);
}
const dolphinsScoreBonus2 = avg(97, 112, 101);
const koalasScoreBonus2 = avg(109, 95, 106);

console.log('\nBonus 2:');
console.log(`Dolphins average: ${dolphinsScoreBonus2.toFixed(2)}`);
console.log(`Koalas average: ${koalasScoreBonus2.toFixed(2)}`);

if (dolphinsScoreBonus2 > koalasScoreBonus2 && dolphinsScoreBonus2 >= 100) {
  console.log('Dolphins win!');
} else if (koalasScoreBonus2 > dolphinsScoreBonus2 && koalasScoreBonus2 >= 100) {
  console.log('Koalas win!');
} else if (dolphinsScoreBonus2 === koalasScoreBonus2 && dolphinsScoreBonus2 >= 100 && koalasScoreBonus2 >= 100) {
  console.log('It\'s a draw!');
} else {
  console.log('No team wins the trophy!');
}

console.log(`Challenge 4`);
function tipCal(bill){
    return (bill >=50 && bill<=300) ? bill*0.15 : bill*0.2
}
console.log(`Bill value: 275`);
let bill = 275
let tip = tipCal(bill)
console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${bill+tip}`);

console.log(`Bill value: 40`);
bill = 40
tip = tipCal(bill)
console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${bill+tip}`);

console.log(`Bill value: 430`);
bill = 430
tip = tipCal(bill)
console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${bill+tip}`);