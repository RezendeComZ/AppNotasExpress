const mongoose = require('../node_modules/mongoose')
const Schema =  mongoose.Schema;

const notaSchema = new Schema({
  id: {
    type: Number,
    required: false
  },
  h: {
    type: String,
    required: true
  },
  b: {
    type: String,
    required: false
  },
  pin: {
    type: Boolean,
    required: false
  }

}, { timestamps: true });


const Nota = mongoose.model('Nota', notaSchema) // Vai acessar a coleção na DB

module.exports = Nota;