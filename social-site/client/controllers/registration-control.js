const Registration = require('../models/registration-model');

const users = {};



users.registerUser = async(userData)=>{
    try{
        const register = new Registration(userData);
        const saveUser = await register.save(userData);
    }catch(e){
        console.log('Unable to save userData',e);
    }
}


users.loginUser = async(loginInfo)=>{
    try{
        const loginResult = await Registration.find({email : loginInfo.email, password : loginInfo.password});
        //console.log(loginResult);
        if(loginResult == 0){
            return 0;
        }
        else{
            return loginResult;
        }
        
    }catch(e){
        console.log('Unable to login',e);
    }
}



module.exports = users;