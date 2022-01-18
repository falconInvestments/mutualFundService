module.exports = (sequelize, DataTypes) => {

    const Account = sequelize.define('accounts', {
        accountId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mFId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,           
        }
    })
    return Account;
}