const firstFn = (callback) => {
    setTimeout(() => {
        console.log('First Function complete')
        callback()
    }, 1000)
}

const secondFn = (callback) => {
    setTimeout(() => {
        console.log('Second Function complete')
        callback()
    }, 1000)
}

const thirdFn = (callback) => {
    setTimeout(() => {
        console.log('Third Function complete')
        callback()
    }, 1000)
}

const fourthFn = (callback) => {
    setTimeout(() => {
        console.log('Fourth Function complete')
        callback()
    }, 1000)
}

//Callback hell exmpale
firstFn(() => {
    secondFn(() => {
        thirdFn(() => {
            fourthFn(() => {
                console.log('All functions completed')
            })
        })
    })
}) 


