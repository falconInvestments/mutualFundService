const { sequelize, DataTypes } = require("sequelize/dist");

module.exports = (sequelize, DataTypes) => {

    const Stock = sequelize.define('stock', {
        stockId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,   
            allowNull: false
        }
    })
    return Stock;
}