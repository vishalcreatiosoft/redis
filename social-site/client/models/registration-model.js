const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        unique : true,
    },
    firstName : {
        type : String,
        trim : true,
    },
    lastName : {
        type : String,
        trim : true,
    },
    age : {
        type : Number,
        trim : true,
    },
    phone : {
        type : Number,
        maxlength : 10,
        required : true,
        trim : true
    },
    city : {
        type : String,
        trim : true,
    },
    state : {
        type : String,
        trim : true,
    },
    password : {
        type : String,
        trime : true,
    },
    image : String


})


module.exports = mongoose.model('registration',registrationSchema);