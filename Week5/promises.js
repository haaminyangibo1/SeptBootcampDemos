const firstFn = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('First Function complete')
            resolve()
        }, 1000)
    })
}
 
const secondFn = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Second Function complete')
            resolve()
        }, 1000)
    })
}

const thirdFn = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Third Function complete')
            resolve()
        }, 1000)
    })
}

const fourthFn = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Fourth Function complete')
            resolve()
        }, 1000)
    })
}

//Promises Example

firstFn()
.then(()=>{
    return secondFn()
})
.then(()=>{
    return thirdFn()
})
.then(()=>{
    return fourthFn()
}).then(
    console.log('all functions completed')
)
