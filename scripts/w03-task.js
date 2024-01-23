/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2
}

function addNumbers() {
    const n1 = Number(document.getElementById("add1").value)
    const n2 = Number(document.getElementById("add2").value)

    const result = add(n1, n2)

    document.getElementById("sum").value = result
}

document.getElementById("addNumbers").addEventListener("click", addNumbers)

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2
}

const subtractNumbers = function () {
    const n1 = Number(document.getElementById("subtract1").value)
    const n2 = Number(document.getElementById("subtract2").value)

    const result = subtract(n1, n2)

    document.getElementById("difference").value = result
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers)


/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {
    const n1 = Number(document.getElementById("factor1").value)
    const n2 = Number(document.getElementById("factor2").value)

    const result = multiply(n1, n2)

    document.getElementById("product").value = result
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers)


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2

function divideNumbers() {
    const n1 = Number(document.getElementById("dividend").value)
    const n2 = Number(document.getElementById("divisor").value)

    const result = divide(n1, n2)

    document.getElementById("quotient").value = result
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers)


/* Decision Structure */
document.getElementById("getTotal").addEventListener("click", (e) => {
    const subtotal = Number(document.getElementById("subtotal").value)
    const hasMembership = document.getElementById("member").checked
    // The instructions say 15%, but the rubric says 20%, I used the percent in the rubric
    const DISCOUNT = 0.20
    let total = subtotal
    if (hasMembership) {
        total -= total * DISCOUNT
    }


    document.getElementById("total").innerText = `$ ${total.toFixed(2)}`
})

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
document.getElementById("array").innerText = numberArray

/* Output Odds Only Array */
document.getElementById("odds").innerText = numberArray.filter((x) => (x % 2) === 1)

/* Output Evens Only Array */
document.getElementById("evens").innerText = numberArray.filter((x) => (x % 2) === 0)

/* Output Sum of Org. Array */
document.getElementById("sumOfArray").innerText = numberArray.reduce((acc, v) => acc + v, 0)

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerText = numberArray.map((x) => x * 2)

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").innerText = numberArray.map((x) => x * 2).reduce((acc, v) => acc + v, 0)