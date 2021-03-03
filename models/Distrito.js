const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DistritoSchema = new Schema({
    distrito: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('Distrito', DistritoSchema);