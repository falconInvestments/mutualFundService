//require the db configuration from the dbConfig file
const dbConfig = require('../config/dbConfig');

//require the sequelize Constructor and DataTypes from sequelize module
const { Sequelize, DataTypes } = require('sequelize');

//construct the sequelize object using the constructor
const sequelize = new Sequelize(
    {
        database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
    });

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

db.sequelize.sync({ force: true }).then(() => {
    console.log('DB synced with sequelize')
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error)
});

module.exports = db;

