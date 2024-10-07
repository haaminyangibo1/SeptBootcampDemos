let pets = ["hamster", "dog", "cat", "horse", "tortoise"]

//This is a callback function
//For each loops through the array and calls the function for each item in the array

// pets.forEach(function(pet){
// console.log(pet)
// })


const myForEach = (arr, callbackFn) => {
    for( let i = 0; i < arr.length; i++){
        let currentItem = arr[i]
        callbackFn(currentItem)
    }
}

// myForEach(pets, function(whatever){
//     console.log(whatever)
// })

setTimeout(() => { 
    console.log('hello')
}, 3000)