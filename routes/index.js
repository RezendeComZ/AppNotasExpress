var express = require('express');
var router = express.Router();
let notas = require('../notasSalvas')

console.log(notas)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { notas: notas });
});

router.get('/nota/:id', (req, res) => {
  let reg = notas.findIndex( element => element.id === parseInt(req.params.id))
  res.render('nota', { id:req.params.id, nota: notas[reg] });
});

router.get('/form', function(req, res, next) {
  res.render('_form');
});


module.exports = router;
