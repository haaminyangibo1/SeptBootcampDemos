//Push - one element to the end and returns the new length, mutates the original arrays
// let numbers = [1,2,3]
// console.log(numbers.push(4))
// console.log(numbers)

//.Pop remove shte last element, returns that element, mutates the original array
// let colour = ['red', 'orange', 'purple']
// console.log(colour.pop())
// console.log(colour)

// // .shift removes the first element, returns the element, mutates the original array 
// let fruits = ['apples', 'oranges', 'pears']
// console.log(fruits.shift())
// console.log(fruits)

//.unshift adds to the beginning of the array, returns the new length, and mutates the original
// let cars = ['toyota', 'bmw', 'volvo']
// console.log(cars.unshift('mercedes'))
// console.log(cars)

//.indexOf() returns the first index of when it's found, or -1 if it's not there
// let animals = ['cats', 'dogs', 'rabbits']
// console.log(animals.indexOf('horses'))

//.slice shows you a portion of an array, with given indexes
// let letters = ['a', 'b', 'c', 'd', 'e','f']
// console.log(letters.slice(1,3))
// console.log(letters)

//.splice removes or adds to the original array, can replace existing elements. Mutates the original array 
// let fruits = ['apples', 'oranges', 'pears', 'bannanas']
// console.log(fruits.splice(1, 1, 'berries', 'melons'))
// console.log(fruits)

// .reverse reversees the elements of the array
// let fruits = ['apples', 'oranges', 'pears', 'bannanas']
// console.log(fruits.reverse())
// console.log(fruits)

// .join concatenates everything in the array and returns a new string. it does not mutate the original arra
// let fruits = ['apples', 'oranges', 'pears', 'bannanas']
// console.log(fruits.join(','))
// console.log(fruits)


//2D arrays
let grades = [
    ['name', 'grade', 'out of', '%'],
    ['haami', 7, 15, 0.5],
    ['sam', 9, 10, 0.5],
    ['john', 6, 17, null],
]

grades[1][0] = 'sarah'
grades.splice(1,1)
console.log(grades)





// console.table(grades)