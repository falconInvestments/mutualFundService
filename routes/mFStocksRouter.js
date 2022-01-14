const mFStockController = require('../controllers/mFStockController');

const router = require('express').Router();

router.post('/', mFStockController.addMFStock);

router.get('/', mFStockController.getAllMFStocks);

router.get('/:stockId&mFId', mFStockController.getOneMFStock);

router.put('/:stockId&mFId', mFStockController.updateMFStock);

router.delete('/:stockId&mFId', mFStockController.deleteMFStock);

module.exports = router;