const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Todo = new Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    contact: {
        type: Number,
    },
})

module.exports = mongoose.model('Todo', Todo);