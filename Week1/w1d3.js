// Use comparison Operators to compare vales 


//Comparison operator 1: Greater Than
let greaterThan1 = 9 > 2
let greatherThan2 = 20 > 40

// console.log( greaterThan1 , greatherThan2)

//Comparison operator 2: Less than

let lessThan1 = 12 < 4
let lessThan2 = 8 < 10

// console.log( lessThan1, lessThan2 )

//Comparison Operator 3: Loosely Equals 
let looseEqual1 = 3 == '3'
let looseEqual2 = 8 == 4

// console.log(looseEqual1 , looseEqual2)


//Comparison Operator 4: Strictly Equals 

let strictEqual1 = 3 === '3'
let strictEqual2 = 8 === 8
// console.log(strictEqual1, strictEqual2)

// Comparison Operator 5: Greater than or Loosely Equal to 
let gte1 = 9 >= '9' //true
let gte2 = 23 >= 15 //true
let gte3 = 24 >= 32 //false
let gte4 = 30 >= '90' //false 
// console.log(gte1 , gte2, gte3, gte4)


//Comparison Operator 6: Less than or Loosely Equal to 
let lte1 = 9 <= '9' // true
let lte2 = 8 <= 12 // true
let lte3 = 7 <= '4' //false
let lte4 = 12 <= 9 //false
// console.log( lte1, lte2, lte3, lte4)


///Logical Operators 

//Lo1: And && 
let and1 = true && false // false
let and2 = true && true //true
let and3 = false && true //false
let and4 = false && false //false 

// console.log( and1, and2, and3, and4)

//Lo2 OR ||
let or1 = true||false //true 
let or2 = true||true //true
let or3 = false||true  //true
let or4 = false||false //false

//LO3 Not 
let not1 = !true
let not2 = !false

//If Statements 

//if statements with numbers
// let num = 20
// if (num > 21){
//     console.log('this number is gereater than 21')
// }

//if statements with strings 

// let word = 'Iced Coffee is great drink'

// if (word.includes('Coffee')){
//     console.log('Coffee is present')
// }

//if statement with a boolean

// if(true){
//     console.log('we are in the IF Block')
// }


//If statement with logical and comparison 

// let word2 = 'Learn Coding'

// if (9 > 13 && word2.includes('Learn')){
//     console.log( 'both conditions are true ')
// }


// let word3 = 'Listen to Music'

// if (word3.includes('Music') || 9 < 8){
//     console.log( 'one condition is true ')
// }

let word4 = 'Learn Coding'

if ( 9 > 7 && word4.includes('Learn')){
    console.log(' We passed the logical operator AND expression')
} else if ( true || false){
    console.log(' We made it to else if block')
} else{
    console.log( ' nothing was passed')
}
