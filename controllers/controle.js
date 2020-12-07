let notas = require('../notasSalvas')
const Nota = require('../models/modelo');

const controle = {
  home: (req,res) => {
    Nota.find()
      .then((result) => {
        let fixos = result.filter(nota => nota.pin === true)
        let naoFixos = result.filter(nota => nota.pin !== true)
        res.render('index', { fixos, naoFixos })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  novaNota: (req, res) => {
    res.render('novaNota');
  },
  mostraNota: (req, res,) => {
    res.render('_form');
  },
  redictHome: (req, res) => {
    res.redirect('/');
  },
  notaIndividual: (req, res) => {
    let reg = notas.findIndex( element => element.id === parseInt(req.params.id))
    if (reg > -1) {
      res.render('nota', { id:req.params.id, nota: notas[reg] });
    } else {
      res.send('Nota inexistente')
    }
  }
}

module.exports = controle;