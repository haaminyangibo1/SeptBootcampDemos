//Create a user object 

const user = {
    username: 'Haami298',
    email: 'haami@email.com',
    password: 'Password1',

    //example object method 

    changeEmail(newEmail) {
        if(!newEmail.includes('@')){
            throw 'Must be a valid email'
        }
        this.email = newEmail
    },

    //more checks 
    updatePassword(oldPassword, newPassword, confrimNewPassword){
        if (this.password !== oldPassword){
            throw 'Please provide the correct old password'
        }
        if(newPassword !== confrimNewPassword){
            throw 'Passwords do not match'
        }
        if(newPassword.length < 8){
            throw 'Password is too short'
        }
        this.password = newPassword
    }
}

//Reading of values

console.log(user.username)
console.log(user.password)

//Update the user email 
user.changeEmail('haami25')
user.changeEmail('haami25@email.com')
console.log(user)

//Update Passwords
user.updatePassword('Password1', 'newpass', 'newpass')
console.log(user)


//getting keys and values 
console.log(Object.keys(user))
console.log(Object.values(user))

//how to further changes 
Object.freeze(user)
user.changeEmail('haami27@email.com')
console.log(user)