const db = require('../models/index');

const Account = db.Accounts;

//C
const addAccount = async (req, res) => {
    let input_data = {
        accountId: req.body.accountId,
        amount: req.body.amount,
        mfId: req.body.mfId
    }
    const account = await account.create(input_data);

    res.status(200).send(account);
}

//R ALL
const getAllAccounts = async (req, res) => {
    let accounts = await Account.findAll({});
    res.status(200).send(accounts);
}

//R
const getOneAccount = async(req, res) => {
    let accountId = req.params.accountId;

    let accounts = await Account.findOne({where: {accountId: accountId}});
    res.status(200).send(accounts); 
};

//U
const updateAccount = async(req, res) => {
    let accountId = req.params.accountId;

    const account = await Account.update(req.body, {where: {accountId: accountId}});
    res.status(200).send(account);
}

//D
const deleteAccount = async(req, res) => {
    let accountId = req.params.accountId;

    await MutualFunds.destroy({where: {accountId: accountId}});
    res.status(200).send(`The account with the id of: ${accountId} has been deleted`);
};

module.exports = {
    addAccount,
    getAllAccounts,
    getOneAccount,
    updateAccount,
    deleteAccount
};