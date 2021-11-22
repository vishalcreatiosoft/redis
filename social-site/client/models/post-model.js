const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post : String
})

module.exports = mongoose.model('post',postSchema);