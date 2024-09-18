/**
 * Control statements
 */
const nums = [2, 4, 10, 16, 5, 4, 2, 1, 6, 7]

// e.g. find the first odd number in the array
// Problem: We can write a for loop with an if statement, but how do we stop when the first value is reached?

let firstOdd = null

for (let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 1){
        firstOdd = nums[i]
        break
    }
}
// console.log(firstOdd)

// e.g. find the sum of only the odd numbers

let sumOdd = 0

for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
        continue
    }
    sumOdd += nums[i]
}
// console.log(sumOdd)



/**
 * Nested loops
 */

// e.g. find the sum of all the numbers in the structure below:
const nest = [
    [4, 1, 7],
    [2, 8],
    [4, 7, 9, 10],
]

// What happens if we use only a single for loop? What is returned?

let nestSum = 0

for (let i = 0; i < nest.length; i++){
    for ( let j = 0; j < nest[i].length; j++){
        nestSum += nest[i][j]
    }
}

console.log(nestSum)

// What happens when we put a second for loop INSIDE our first for loop?

// e.g. print the pattern:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++){
    let str = ''
    for ( let j = 1; j <= i; j++){
        str += j + ' '
    }
    console.log(str)
}

for (let i = 1; i <= 10; i ++){
    let str2 = ''
    for (let j = 1; j <= i; j++ ){
        str2 += '*'
    }
    console.log(str2)
}


