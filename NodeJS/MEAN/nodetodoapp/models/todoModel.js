
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: String,
    hasAttachment: Boolean
});

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;