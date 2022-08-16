alert("Welcome to the Calculator!")

var calculator = prompt("What would you like to do? (add, subtract, divide, multiply, exponent, square root)")


function sum (a, b) {
    alert("Enter the two numbers you would like to add")
    var a = Number(prompt ("Enter a number: ", ""))
    var b = Number(prompt (`${a} plus: `, ""))
    return a + b;
}

function subtract (a, b) {
    alert("Enter the two numbers you would like to subtract")
    var a = Number(prompt ("Enter a number: ", ""))
    var b = Number(prompt (`${a} minus: `, ""))
    return a - b;
}

function divide (a, b) {
    alert("Enter the two numbers you would like to divide")
    var a = Number(prompt ("Enter a number: ", ""))
    var b = Number(prompt (`${a} divided by: `, ""))
    return a / b;
}

function multiply (a, b) {
    alert("Enter the two numbers you would like to multiply")
    var a = Number(prompt ("Enter a number: ", ""))
    var b = Number(prompt (`${a} multiplied by: `, ""))
    return a * b;
}

function exponent (a, b) {
    alert("Enter the base number and the exponent")
    var a = Number(prompt ("Enter a number: ", ""))
    var b = Number(prompt (`${a} raised to the power of: `, ""))
    return a ** b;
}

function squareRoot (x) {
    alert("Enter the number you'd like to find the square root of: ")
    var x = Number(prompt ("Enter a number: ", ""))
    return Math.sqrt(x)
}

if (calculator === "add") {
    sum();
} else if (calculator === "subtract") {
    subtract();
} else if (calculator === "divide") {
    divide();
} else if (calculator === "multiply") {
    multiply();
} else if (calculator === "exponent") {
    exponent();
} else if (calculator === "square root") {
    squareRoot();
} else {
    calculator();
}