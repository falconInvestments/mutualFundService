const res = require('express/lib/response');
const db = require('../models/index');

const mFStock = db.mFStocks;

//C
const addMFStock = async (req, res) => {
    let input_data = {
        stockId: req.body.stockId,
        mFId: req.body.mFId,
        shares: req.body.shares
    }
    const mFStock = await MFStock.create(input_data);

    res.status(200).send(mFStock);
}

//R ALL
const getAllMFStocks = async (req, res) => {
    let mFStocks = await MFStock.findall({});
    res.status(200).send(mFStocks);
}

//R
const getOneMFStock = async (req, res) => {
    let stockId = req.params.stockId;
    let mFId = req.params.mFId;

    let mFStocks = await MFStock.findOne({where: {stockId: stockId, mFId: mFId}});
    res.status(200).send(mFStocks);
};

//U
const updateMFStock = async (req, res) => {
    let stockId = req.params.stockId;
    let mFId = req.params.mFId;

    let mFStocks = await MFStock.update({where: {stockId: stockId, mFId: mFId}});
    res.status(200).send(mFStocks);
};

//D
const deleteMFStock = async (req, res) => {
    let stockId = req.params.stockId;
    let mFId = req.params.mFId;

    let mFStocks = await MFStock.destroy({where: {stockId: stockId, mFId: mFId}});
    res.status(200).send(mFStocks);
}

module.exports = {
    addMFStock,
    getAllMFStocks,
    getOneMFStock,
    updateMFStock,
    deleteMFStock
};