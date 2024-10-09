const {db, DataTypes, Model} = require("../db/connection")

class User extends Model {}

User.init(
    {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        age: DataTypes.DECIMAL()
    },
    {
        sequelize: db,
        modelName: "User"
    }
)

module.exports = User