const { Schema, model } = require('mongoose');

const Visitor = new Schema({
    created: {
        type: Date,
        default: Date.now,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
});


module.exports = model('Visitor', Visitor);