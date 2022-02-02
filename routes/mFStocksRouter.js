const mFStockController = require('../controllers/mFStockController');

const router = require('express').Router();

router.post('/', mFStockController.addMFStock);

router.get('/', mFStockController.getAllMFStocks);

router.get('/:stockId&mf_id', mFStockController.getOneMFStock);

router.put('/:stockId&mf_id', mFStockController.updateMFStock);

router.delete('/:stockId&mf_id', mFStockController.deleteMFStock);

module.exports = router;