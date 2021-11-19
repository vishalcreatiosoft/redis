const express = require('express');
const router = new express.Router();
const Registration = require('../controllers/registration-control');

router.get('',(req, res)=>{
    res.render('index');
})

router.get('/login',(req, res)=>{
    res.render('login')
})

router.get('/register',(req, res)=>{
    res.render('register');
})

router.post('/registerUser',(req, res)=>{

    const userData = {
        email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        age : req.body.age,
        phone : req.body.phone,
        city : req.body.city,
        state : req.body.state,
        password : req.body.password
    }

    console.log(userData);
    Registration.registerUser(userData);

    setTimeout(()=>{
        res.redirect('login');
    },1000);

})

router.post('/loginUser', async(req, res)=>{
    const loginInfo = {
        email : req.body.email,
        password : req.body.password
    }

    const loginResult = await Registration.loginUser(loginInfo);
    if(loginResult == 0){
        res.send('Invalid creadentials');
    }else{
        const resultInfo = JSON.stringify(loginResult)
        res.render('home',{data : resultInfo});
    }
    

})


module.exports = router;