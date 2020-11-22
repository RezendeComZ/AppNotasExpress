var express = require('express');
var router = express.Router();
let notas = require('../notasSalvas')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { notas: notas });
});

router.get('/nota/:id', (req, res) => {
  let reg = notas.findIndex( element => element.id === parseInt(req.params.id))
  if (reg > -1) {
    res.render('nota', { id:req.params.id, nota: notas[reg] });
  } else {
    res.send('Nota inexistente')
  }
});

router.get('/form', function(req, res, next) {
  res.render('_form');
});


module.exports = router;
