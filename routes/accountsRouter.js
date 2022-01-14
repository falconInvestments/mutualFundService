//import the controller functions
const accountController = require('../controllers/accountController');

const router = require('express').Router();

router.post('/', accountController.addAccount);

router.get('/', accountController.getAllAccounts);

router.get('/:id', accountController.getOneAccount);

router.put('/:id', accountController.updateAccount);

router.delete('/:id', accountController.deleteAccount);

module.exports = router;