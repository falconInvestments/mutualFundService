const db = require('../models/index');

const MutualFund = db.MutualFunds;

//C
const addMutualFund = async (req, res, next) => {
    try {
        let input_data = {
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
        console.log("My input data is", input_data);
        const mutualFund = await MutualFund.create(input_data);

        res.status(201).send(mutualFund);
    } catch(err) {
        console.log(err);
    }
}

//R ALL
const getAllMutualFunds = async (req, res) => {
    try {
        let mutualFunds = await MutualFund.findAll({});
        res.status(200).send(mutualFunds);
    } catch(err) {
        console.log(err);
    }
}

//R
const getOneMutualFund = async (req, res) => {
    try {
    let id = req.params.mf_id;
    
    let mutualFunds = await MutualFund.findOne({where: {mf_id: id}});
    res.status(200).send(mutualFunds);
    } catch(err) {
        console.log(err);
    }
};

//??? why is update have a const and why does read one return mutualFunds?
//-- look up async and await

//U
const updateMutualFund = async (req, res) => {
    try {
    let id = req.params.mf_id;

    const mutualFund = await MutualFund.update(req.body, {where: {mf_id: id}});
    res.status(200).send(mutualFund);
    } catch(err) {
        console.log(err);
    }
};

//D
const deleteMutualFund = async (req, res) => {
    try {
    let id = req.params.mf_id;

    await MutualFund.destroy({where: {mf_id: id}});
    res.status(200).send(`The Mutual Fund with the id of: ${mf_id} has been deleted.`);
    } catch(err) {
        console.log(err);
    }
};

module.exports = {
    addMutualFund,
    getAllMutualFunds,
    getOneMutualFund,
    updateMutualFund,
    deleteMutualFund
};