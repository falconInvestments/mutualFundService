//import the controller functions
const mutualFundController = require('../controllers/mutualFundController');

const router = require('express').Router();

router.post('/', mutualFundController.addMutualFund);

router.get('/', mutualFundController.getAllMutualFunds);

router.get('/:mf_id', mutualFundController.getOneMutualFund);

router.put('/:mf_id', mutualFundController.updateMutualFund);

router.delete('/:mf_id', mutualFundController.deleteMutualFund);

module.exports = router;
