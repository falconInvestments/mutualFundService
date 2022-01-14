const { sequelize, DataTypes } = require("sequelize/dist");

module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    })
    return User;
}