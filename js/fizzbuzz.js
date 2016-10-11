

function FizzBuzz(num) {
    var output = ''
    for (var i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 !== 0){
            output = output + 'fizz'
        }
        else if (i % 3 !== 0 && i % 5 === 0) {
            output = output + 'buzz'
        }
        else if (num % 3 === 0 && num % 5 === 0) {
            output = output + 'fizzbuzz'
        }
        else {
            output = output + '.'
        }
    }
    return output
}
// console.log(FizzBuzz(1))
// console.log(FizzBuzz(2))
// console.log(FizzBuzz(3))
// console.log(FizzBuzz(5))
// console.log(FizzBuzz(10))
console.assert(FizzBuzz(1) === '.')
console.assert(FizzBuzz(2) === '..')
console.assert(FizzBuzz(3) === '..fizz')
console.assert(FizzBuzz(5) === '..fizz.buzz')
console.assert(FizzBuzz(10) === '..fizz.buzzfizz..fizzbuzz')


// for (var i = 0; i < num; i++) {
//     if (num % 3 !== 0 && num % 5 !== 0){
//         output = output + '.'
//     }
//     if (num % 3 === 0){
//         output = output + 'fizz'
//     }
//     if (num % 5 === 0){
//         output = output + 'buzz'
//     }
//
//
// }
