const DAYS = 6;
const LIMIT = 30;
const studentReport = [11, 42, 33, 64, 29, 37, 44];


console.log("using for loop");
for (let i = 0; i < studentReport.length; i++) {
    const currentV = studentReport[i]

    if (currentV < LIMIT) {
        console.log(currentV);
    }

}



console.log("using while loop");
let whileFlag = -1
while (whileFlag < studentReport.length) {
    whileFlag++

    const currentV = studentReport[whileFlag]

    if (currentV < LIMIT) {
        console.log(currentV);
    }
}


console.log("using forEach loop");
studentReport.forEach((v) => {
    if (v < LIMIT) { console.log(v); }
})


console.log("using for in loop");
for (const v in studentReport) {
    const element = studentReport[v];
    if (element < LIMIT) {
        console.log(element);
    }
}


console.log(`the names of the next ${DAYS} days`);
for (let i = 1; i <= DAYS; i++) {
    const today = new Date()

    const day = new Date(Number(today) + i * (24 * 60 * 60 * 1000))

    console.log(day.toLocaleDateString("en-US", { weekday: 'long' }));
}