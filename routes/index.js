var express = require('express');
var router = express.Router();
let notas = require('../notasSalvas')

// Home
router.get('/', function(req, res, next) {
  let fixos = notas.filter(nota => nota.pin === true)
  let naoFixos = notas.filter(nota => nota.pin === false)
  res.render('index', { fixos: fixos, naoFixos: naoFixos });
});

// Página de nota indidual
router.get('/nota/:id', (req, res) => {
  let reg = notas.findIndex( element => element.id === parseInt(req.params.id))
  if (reg > -1) {
    res.render('nota', { id:req.params.id, nota: notas[reg] });
  } else {
    res.send('Nota inexistente')
  }
});

// Form - incompleto
router.get('/form', function(req, res, next) {
  res.render('_form');
});


module.exports = router;
