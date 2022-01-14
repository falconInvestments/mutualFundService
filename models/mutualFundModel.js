//this file stores the "mutualFund" model (model is table schema in sequelize lingo)

const { sequelize, DataTypes } = require("sequelize/dist");

//inputs: sequelize instance and DT Class, returns: a mutualFund Model object
module.exports = (sequelize, DataTypes) => {

    //modelName is 'mutualFund'(first argument of the define() function and adds a "s" for the table name once synced)
    const MutualFund = sequelize.define('mutualFund', {
        mFId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fundName: {
            type: DataTypes.STRING,    //standard is varchar(255)
            allowNull: false
        },
        symbol: {
            type: DataTypes.STRING,
            stringallowNull: false
        },
        yTD: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: false
        },
        yearOne: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: false
        },
        yearThree: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: false
        },
        yearFive: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: false
        },
        yearTen: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: true
        },
        inceptionDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        inceptionRate: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: false
        },
        expenseRatio: {
            type: DataTypes.DECIMAL(3, 2),
            allowNull: false
        },
        nAV: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false
        }, 
        risk: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        minimum: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        topHoldings: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        }
    })
    return MutualFund;
}