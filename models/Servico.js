const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicoSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    tiposervico: {
        type: String,
        required: true,
    },
    horario: {
        type: String,
        required: true,
    },
    rua: {
        type: String,
        required: true,
    },
    codigopostal: {
        type: String,
        required: true,
    },
    concelho: {
        type: String,
        required: true,
    },
    distrito: {
        type: String,
        required: true,
    },
    lat: {
        type: String,
        required: true,
    },
    long: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('Servico', ServicoSchema);