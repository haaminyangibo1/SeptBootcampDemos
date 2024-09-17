// // function helloWorld(name, planet){
// //     console.log('Hello ' + name + ' from planet ' + planet)
// // }

// // function greeting(){
// //     console.log('greeting')
// // }


// // function greeting2(){
// //     console.log('greeting')
// // }


// // greeting()
// // greeting2()
// // helloWorld()


// //ARROW FUNCTIONS

// // let helloWorld = () => {
// //     console.log('hello world')
// // }

// // let helloWorld2 = () => console.log('hello world')


// // helloWorld3 = function(){
// //     console.log('hello world')
// // }


// let returnValueFunction = () => {
//     let returnValue = console.log('I am in the returnValueFunction')
//     return returnValue
// }

// returnValueFunction()


//Calculator

const calculate = (num1, num2, operator) => {
    switch(operator){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2

        default: 
            return 'This is an invalid operator'
    }
}

// console.log(calculate(3, 6, '+'))
// console.log(calculate(5, 7, '*'))

// TODO List 

let tasks = []

const addTasks = (task) => {
    tasks.push(task)
}

const removeTask = (taskIndex) =>{
    tasks.splice(taskIndex, 1)
}

addTasks('Wash the dishes')
addTasks('Wash clothes')
removeTask(0)

console.log(typeof(addTasks))


console.log(tasks)