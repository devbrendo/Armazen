const { Router } = require('express')

const IndexController = require('./app/controllers/IndexController');
const FrutaController = require('./app/controllers/FrutaController');

const router = Router();

router.get('/', IndexController.inicio);
router.get('/frutas', FrutaController.index);
router.get('/frutas/show', FrutaController.show);
router.get('/frutas/store', FrutaController.store);
router.get('/frutas/update', FrutaController.update);
router.get('/frutas/delete', FrutaController.delete);

module.exports = router;