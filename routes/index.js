var express = require('express');
var router = express.Router();
const controle = require('../controllers/controle')
const Nota = require('../models/modelo');

// Middleware usado na encodar os dados do form
router.use(express.urlencoded({ extended: true }));

// Home
router.get('/', controle.home);

// Nova Nota
router.get('/novaNota', controle.novaNota)

// Post
router.post('/', (req, res) => {
  const nota = new Nota(req.body)
  console.log(req.body)

  nota.save()
    .then((result) => {
      res.redirect('/')
    })
    .catch((err) => {
      console.log(err)
    })
})

// Deletar
router.delete('')

// Página de nota indidual
router.get('/nota/:id', controle.notaIndividual);

// Deletar
router.delete('/nota/:id', controle.apagaIndividual)

// Redirectionar
router.get('/notas', controle.redictHome)

module.exports = router; 


// Mostrar o que tem no banco de dados:
router.get('/todas-notas', (req, res) => {
  Nota.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

// Mostrar uma nota
router.get('/uma-nota', (req, res) => {
  Nota.findById('5fcd52e100b2cda9e2e75994')
    .then((result) => {
      res.send(result) // Uma forma de redirectionar para a nota criada?
    })
    .catch((err) => {
      console.log(err)
    })
})

// add nota via querys:
router.get('/add', controle.addQuery);