const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConcelhoSchema = new Schema({
    concelho: {
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('Concelho', ConcelhoSchema);