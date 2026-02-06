//challenge 1
console.log("Challenge 1:")
mark_weight_1 = 78
mark_height_1 = 1.69
john_weight_1 = 92
john_height_1 = 1.95


mark_weight_2 = 95
mark_height_2 = 1.88
john_weight_2 = 85
john_height_2 = 1.76

function CalBMI(mass, height) {
    bmi = mass / height ** 2
    console.log(bmi)
    return bmi
}

console.log("Data 1:")
mark_bmi_1 = CalBMI(mark_weight_1, mark_height_1)
john_bmi_1 = CalBMI(john_weight_1, john_height_1)

markHigherBMI_1 = (mark_bmi_1 - john_bmi_1) > 0
console.log(markHigherBMI_1)

console.log("Data 2:")
mark_bmi_2 = CalBMI(mark_weight_2, mark_height_2)
john_bmi_2 = CalBMI(john_weight_2, john_height_2)

markHigherBMI_2 = (mark_bmi_2 - john_bmi_2) > 0
console.log(markHigherBMI_2)


//challenge 2
console.log("Challenge 2:")
function compareBmi(markBmi, johnBmi) {
    if (markBmi > johnBmi) {
        console.log("Mark's BMI ("+ markBmi +") is higher than John's ("+ johnBmi +")!")
    }
    else {
        console.log("John's BMI ("+ johnBmi +") is higher than Mark's ("+ markBmi +")!")
    }
}

compareBmi(mark_bmi_1, john_bmi_1)
compareBmi(mark_bmi_2, john_bmi_2)

//challenge 3
console.log("Challenge 3:")
function calAvg(score1, score2, score3) {
    avg = (score1 + score2 + score3) / 3
    console.log(avg)
    return avg
}

console.log("Data 1:")
dol_avg_1 = calAvg(96, 108, 89)
koa_avg_1 = calAvg(88, 91, 110)

function compareScore(dol, koa) {
    if (dol > koa) {
        console.log("Dolphins wins")
    }
    else if (dol < koa) {
        console.log("Koalas wins")
    }
    else {
        console.log("Dolphins and Koalas Draws!")
    }
}

compareScore(dol_avg_1, koa_avg_1)

function compareScoreWithMin(dol, koa) {
    if (dol > koa && dol >= 100) {
        console.log("Dolphins wins")
    }
    else if (dol < koa && koa >= 100) {
        console.log("Koalas wins")
    }
    else if (dol >= 100 && koa >= 100 && dol == koa) {
        console.log("Dolphins and Koalas Draws!")
    }
    else {
        console.log("No team wins the trophy")
    }
}

console.log("Data 2:")
dol_avg_2 = calAvg(97, 112, 101)
koa_avg_2 = calAvg(109, 95, 123)
compareScoreWithMin(dol_avg_2, koa_avg_2)

console.log("Data 3:")
dol_avg_2 = calAvg(97, 112, 101)
koa_avg_2 = calAvg(109, 95, 106)
compareScoreWithMin(dol_avg_2, koa_avg_2)

//challenge 4
console.log("Challenge 4:")

function calTip(bill) {
    tip = (bill >= 50 && bill <= 300) ? bill*0.15 : bill*0.2
    console.log("The bill was "+bill+", the tip was "+tip+", and the total value "+(bill+tip))
    return tip
}

tip_1 = calTip(275)
tip_2 = calTip(40)
tip_3 = calTip(430)