console.log("Part 2: Challenge 1");
function calcAverage(a,b,c){return (a+b+c)/3}
let avgDolhins1 = calcAverage(44, 23, 71)
let avgKoalas1 = calcAverage(65, 54, 49)
function checkWinner(avgDolhins, avgKoalas){
    if(avgDolhins >= 2*avgKoalas){
        console.log("Dolphin wins");
    }else if(avgKoalas >= 2*avgDolhins){
        console.log("Koalas wins");
    }else console.log("No one wins");
}
console.log("Data 1:");

checkWinner(avgDolhins1,avgKoalas1);
let avgDolhins2 = calcAverage(85, 54, 41)
let avgKoalas2 = calcAverage(23, 34, 27)
console.log("Data 2:");
checkWinner(avgDolhins2,avgKoalas2)