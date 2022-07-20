const { Router } = require('express')

const IndexController = require('./app/controllers/IndexController');
const FrutaController = require('./app/controllers/FrutaController');

const router = Router();
router.get('/', IndexController.inicio);
router.get(
  '/frutas',
  FrutaController.index,
);
router.get('/frutas/:id', FrutaController.show);
router.post('/frutas', FrutaController.store);
router.post('/frutas/:id', FrutaController.update);
router.delete('/frutas/:id', FrutaController.delete);

module.exports = router;