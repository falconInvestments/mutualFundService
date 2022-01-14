const db = require('../models/index');

const MutualFund = db.MutualFunds;

//C
const addMutualFund = async (req, res) => {
    let input_data = {
        mFId: req.body.mFId,
        fundName: req.body.fundName,
        symbol: req.body.symbol,
        yTD: req.body.yTD,
        yearOne: req.body.yearOne,
        yearThree: req.body.yearThree,
        yearFive: req.body.yearFive,
        yearTen: req.body.yearTen,
        inceptionDate: req.body.inceptionDate,
        inceptionRate: req.body.inceptionRate,
        expenseRatio: req.body.expenseRatio,
        nAV: req.body.nAV,
        risk: req.body.risk,
        minimum: req.body.minimum
        // topHoldings: req.body.topHoldings
    }
    const mutualFund = await MutualFund.create(input_data);

    res.status(200).send(mutualFund);
}

//R ALL
const getAllMutualFunds = async (req, res) => {
    let mutualFunds = await MutualFund.findAll({});
    res.status(200).send(mutualFunds);
}

//R
const getOneMutualFund = async (req, res) => {
    let mFId = req.params.mFId;
    
    let mutualFunds = await MutualFund.findOne({where: {mFId: mFId}});
    res.status(200).send(mutualFunds);
};

//??? why is update have a const and why does read one return mutualFunds?
//-- look up async and await

//U
const updateMutualFund = async (req, res) => {
    let mFId = req.params.mFId;

    const mutualFund = await MutualFund.update(req.body, {where: {mFId: mFId}});
    res.status(200).send(mutualFund);
};

//D
const deleteMutualFund = async (req, res) => {
    let mFId = req.params.mFId;

    await MutualFund.destroy({where: {mFId: mFId}});
    res.status(200).send(`The Mutual Fund with the id of: ${mFId} has been deleted.`);
};

module.exports = {
    addMutualFund,
    getAllMutualFunds,
    getOneMutualFund,
    updateMutualFund,
    deleteMutualFund
};