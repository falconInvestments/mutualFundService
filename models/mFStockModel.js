module.exports = (sequelize, DataTypes) => {

    const mFStock = sequelize.define('mFStock', {
        stockId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        mFId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        shares: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return mFStock;
}