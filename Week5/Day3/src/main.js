//Import datatbase and models
const {db} = require("../db/connection")
const User = require("./model")

const main = async () => {

    //syncing database but also want remove content
    await db.sync({force: true})


    // CREATE 
    const user1 = await User.create({
        name: 'Haami',
        username: 'HaamiN',
        age: 28
    })

    // console.log(user1.toJSON())

    await User.bulkCreate([
        {
            name: 'Jordan',
            username: 'Jordan1',
            age:35

        },
        {
            name: 'Kieran',
            username: 'Kieran1',
            age: 30
        },
        {
            name: 'Bob',
            username: 'Bob1',
            age: 30
        },

    ])

    //READ
    //Finding one record
    const findOneUser = await User.findOne({where: {name: 'Jordan'}})
    // console.log(findOneUser.toJSON())

    //Finding all records
    const findAllUsers = await User.findAll()
    // console.log(JSON.stringify(findAllUsers))

    //UPDATE

    const updateHaami = await User.update(
        {name: 'Haami Nyangibo', username: 'haami1', age: 28},
        {where: { name: 'Haami'}}
    )
    // console.log(JSON.stringify(updateHaami))

    const findHaami = await User.findOne({where: {name: 'Haami Nyangibo'}})
    // console.log(findHaami.toJSON())

    //DELETE
    const deleteHaami = await User.destroy({where: {name:'Haami Nyangibo'}})
    console.log(deleteHaami)

}

main()