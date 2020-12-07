let notas = require('../notasSalvas')
const Nota = require('../models/modelo');

const controle = {
  home: function(req, res, next) {
    let fixos = notas.filter(nota => nota.pin === true)
    let naoFixos = notas.filter(nota => nota.pin === false)
    res.render('index', { fixos, naoFixos, qntNotas: notas.length });
  },
  homeDB: (req,res) => {
    Nota.find()
      .then((result) => {
        let fixos = result.filter(nota => nota.pin === true)
        let naoFixos = result.filter(nota => nota.pin === false)
        res.render('indexdb', { fixos, naoFixos })
      })
      .catch((err) => {
        console.log(err)
      })
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