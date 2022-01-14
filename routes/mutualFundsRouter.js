//import the controller functions
const mutualFundController = require('../controllers/mutualFundController');

const router = require('express').Router();

router.post('/', mutualFundController.addMutualFund);

router.get('/', mutualFundController.getAllMutualFunds);

router.get('/:id', mutualFundController.updateMutualFund);

router.put('/:id', mutualFundController.updateMutualFund);

router.delete('/:id', mutualFundController.deleteMutualFund);

module.exports = router;
