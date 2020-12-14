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
  redictHome: (req, res) => {
    res.redirect('/');
  },
    notaIndividual: (req, res) => {
      Nota.findById(req.params.id)
      .then((result) => {
        let nota = result
        res.render('nota', { nota })
      })
      .catch((err) => {
        console.log(err)
      })
  },
    apagaIndividual: (req, res) => {
      const id = req.params.id;
    
      Nota.findByIdAndDelete(id)
        .then(result => {
          res.json({ redirect: '/' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    addQuery: (req, res) => {
      let { h, b, pin } = req.query;
      const notaTeste = new Nota({
        h: h,
        b: b,
        pin: pin
      });
      // Método pra salvar no banco de dados (assíncrona):
      notaTeste.save()
      .then((result) => {
        res.send(result)
        console.log('Aparentemente foi pra DB (index em routes)')
      })
      .catch((err) => {
        console.log(err);
      });
    },
  // notaIndividual: (req, res) => {
  //   let reg = notas.findIndex( element => element.id === parseInt(req.params.id))
  //   if (reg > -1) {
  //     res.render('nota', { id:req.params.id, nota: notas[reg] });
  //   } else {
  //     res.send('Nota inexistente')
  //   }
  // }
}

module.exports = controle;