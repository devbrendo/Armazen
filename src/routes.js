const { Router } = require('express')

const IndexController = require('./app/controllers/IndexController');
const FrutaController = require('./app/controllers/FrutaController');
const ProdutoController = require('./app/controllers/ProdutoController');

const router = Router();
router.get('/', IndexController.inicio);


router.get('/frutas', FrutaController.index,);
router.get('/frutas/:id', FrutaController.show);
router.post('/frutas', FrutaController.store);
router.post('/frutas/:id', FrutaController.update);
router.delete('/frutas/:id', FrutaController.delete);


router.get('/produtos', ProdutoController.index);
router.get('/produtos/:id', ProdutoController.show);
router.post('/produtos', ProdutoController.store);
router.post('/produtos/:id', ProdutoController.update);
router.delete('/produtos/:id', ProdutoController.delete);
module.exports = router;