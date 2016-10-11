
var answer = 0;
function add (num1, num2) {
    return num1 + num2
}
function subtract (num1, num2) {
    return num1 - num2
}
function multiply (num1, num2) {
    return num1 * num2
}
function divide (num1, num2) {
    return num1 / num2
}

answer = add(40, 110)
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)
