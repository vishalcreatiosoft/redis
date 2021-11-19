const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    email : {
        type : String,
        trim : true,
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
        trim : true,
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
    }


})


module.exports = mongoose.model('registration',registrationSchema);