var express = require('express');
var router = express.Router();
const controle = require('../controllers/controle')

// Home
router.get('/', controle.home);

// Página de nota indidual
router.get('/nota/:id', controle.notaIndividual);

// Form - incompleto
router.get('/form', controle.mostraNota);

// Redirectionar
router.get('/notas', controle.redictHome)

module.exports = router;
