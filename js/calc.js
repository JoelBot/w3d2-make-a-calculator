
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
function remainder (num1, num2) {
    return num1 % num2
}
function increment (num1) {
    return num1 + 1
}
function decrement (num1) {
    return num1 - 1
}

answer = add(40, 110)
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)
answer = remainder(20, 9)
console.assert(answer === 2)
answer = increment(20)
console.assert(answer === 21)
answer = decrement(20)
console.assert(answer === 19)
