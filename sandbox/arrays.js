// activity 1
let activityArray = ["one", "two", "three"]

let ulElement = document.getElementById("myList")

ulElement.innerHTML = activityArray.map((x) => `<li>${x}</li>`).join("")



// activity 2
let grades = ["A", "B", "A"]

function gradeToPoints(grade) {
    let points = 0
    switch (grade) {
        case "A":
            points = 4
            break;

        case "B":
            points = 3
            break;

        default:
            points = 0
            break;
    }
    return points
}


console.log("points", grades.map(gradeToPoints));



// activity 3
console.log("total GPA", (grades.map(gradeToPoints).reduce((acc, val) => acc + val, 0) / grades.length));



// activity 4
let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
console.log("fruits with > 6 chars", fruits.filter((x) => x.length > 6));



// activity 5
let numbers = [12, 34, 21, 54]
let luckNumber = 21
console.log("luckyNumber = ", luckNumber, ", index:", numbers.indexOf(luckNumber));