//
//
// whatsUp()
//
// var name = 'Joel'
// console.log(name)
// console.log('What\'s Up?')
//
//
// function whatsUp() {
//     console.log('What\'s Up?')
//     var name = 'Watson'
//     function () {
//         console.log('happy happy joy joy')
//     }
// }
//
// whatsUp()

//JS functions
// console.log()
// document.write()
// alert()
//
// var mph1 = 10;
// var hours1 = 5;
// var distance1 = mph1 * hours1
//
// // console.log(distance1)
// var mph2 = 55;
// var hours2 = 2;
// var distance2 = mph2 * hours2
//
// // console.log(distance2)
// var mph3 = 90;
// var hours3 = .75;
// var distance3 = mph3 * hours3
//
// // console.log(distance3)
//
// function distance (mph, hours = 10) {
//     if (hours === undefined) {
//         hours = 10
//     }
//     // return 'bums'
//     // return true
//     // if (mph > 65) {
//     //     return 'Warning: Too Fast.  No way you\'ll get distance from us.'
//     // }
//     return mph * hours //end of function
    // console.log('not going to see this.')
// }

// console.log(distance(66, 2))
//
// var distanceTraveled = distance(mph1)
// distanceTraveled= distanceTraveled + distance(mph2, hours2)
// distanceTraveled= distanceTraveled + distance(mph3, hours3)
//
// console.log(distanceTraveled)
// var movie = 'The Rock'
// var year = 1995

// if (movie === 'Forest Gump') {
//     console.log('Life is like a box of chocolates.')
// }
// else if (movie === 'Groundhog Day') {
//     console.log('Repeat.')
// }
//
// else {
//     console.log('Do you smell what The Rock is cookin\'?!')
// }

// switch (movie) {
//     case 'Forest Gump':
//         console.log(' Bubba Gump Shrimp')
//         break;
//     case 'Groundhog Day':
//         console.log('Repeat')
//         break
//     case 'Star Wars':
//         console.log('I am your father')
//         break
//     case 'The Rock':
//         console.log('Do you smell what The Rock is cookin\'?!')
//         break
//     default :
//         console.log('nothing matched.')
// }


// if (4 % 3 === 0) {
//     console.log('Yes it is divisible by three.')
// }
// if ( % 3) {
//     console.log('Yes it is divisible by three.')
// }
// else {
//     console.log('Nope, not divisible by 3.')
// }
// // var list = ['Collin','Tom','Whitney','Jeff','Troy']
// for (var i = 0 ; i < list.length; i++) {
//     console.log(list[i]+ ' - Looping...')
// }
//
// for (var i = 0 ; i < 100 ; i++) {
//     console.log(`<div id="row` + i + `" class="row"><div class="col-sm-12"></div></div>`)
// // }
// var total = 0
// for (var i = 0; i < 300 ; i++) {
//     total += i
//     // document.querySelector('.container-fluid').innerHTML += `<button class="btn btn-primary btn-lg">CLICK${i}</button>`
//     console.log(total)
// }
// function add() {
//
// }
// console.assert(true === false)
// console.assert(add(1,1) === 2)
function sayHello (greeting) {
    return greeting
}
console.assert(sayHello('Hello') === 'Hello')
// while ()
