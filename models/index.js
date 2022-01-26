//require the db configuration from the dbConfig file
const dbConfig = require('../config/dbConfig');

//require the sequelize Constructor and DataTypes from sequelize module
const { Sequelize, DataTypes } = require('sequelize');

//construct the sequelize object using the constructor
let sequelize = null;

    if (process && process.env.DATABASE_URL) {
        sequelize = new Sequelize(process.env.DATABASE_URL, {
            dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
                }
              }
            }
        );
    } else {
       sequelize = new Sequelize(
        { // use imported configurations from dbConfig
            database: process.env.DB,
            username: process.env.USER,
            password: process.env.PASSWORD,
            dialect: process.env.dialect,
            host: process.env.HOST,
        })
    }
//config for AWS
// const sequelize = new Sequelize(
//     {
//         database: dbConfig.DB,
//         username: dbConfig.USER,
//         password: dbConfig.PASSWORD,
//         dialect: dbConfig.dialect,
//         host: dbConfig.HOST,
//     });

//authenticate will test the connection with DB and return a promise
sequelize.authenticate()
    .then(() => {
        console.log("connected to Postgres DB")
    })
    .catch(e => {
        console.log('unable to connect to Postgres DB' + e)
    });

//create a db object to work with the sequelize table
const db = {};

//create an attribute storing the previously created sequelize instance
db.sequelize = sequelize;

db.MutualFunds = require('./mutualFundModel')(sequelize, DataTypes);
db.Accounts = require('./accountModel')(sequelize, DataTypes);
db.MFStocks = require('./mFStockModel')(sequelize, DataTypes);
db.Stocks = require('./stockModel')(sequelize, DataTypes);
db.Users = require('./userModel')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
    console.log('DB synced with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
});

db.Users.hasMany(db.Accounts);
db.Accounts.belongsTo(db.MutualFunds);
db.Accounts.belongsTo(db.Users);
db.MutualFunds.hasMany(db.Accounts);
db.MutualFunds.hasMany(db.MFStocks);
db.MFStocks.belongsTo(db.MutualFunds);
db.MFStocks.belongsTo(db.Stocks);
db.Stocks.hasMany(db.MFStocks);

module.exports = db;

