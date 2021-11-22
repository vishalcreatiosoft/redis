const express = require('express');
const router = new express.Router();
const multer = require('multer');
const path = require('path');
const Registration = require('../controllers/registration-control');
const Posts = require('../controllers/post-control');
const redis = require('redis');

const client = redis.createClient();

router.get('',(req, res)=>{
    res.render('index');
})

router.get('/login',(req, res)=>{
    res.render('login')
})

router.get('/register',(req, res)=>{
    res.render('register');
})
const storage = multer.diskStorage({
    destination : './public/uploads',
    filename : (req, file, cb)=>{
        cb(null, file.filename+"_"+Date.now()+path.extname(file.originalname));
    }
})
const upload = multer({storage : storage}).single('file');
router.post('/registerUser',upload,(req, res)=>{

    const userData = {
        email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        age : req.body.age,
        phone : req.body.phone,
        city : req.body.city,
        state : req.body.state,
        password : req.body.password,
        image : req.file.filename
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

    client.get(`${loginInfo.email}`, async(error, data)=>{
        if(error){
            throw error;
        }
        else if(data != null){
            console.log('cache hit');
            const resultInfo = JSON.parse(data);
            console.log(resultInfo);
            res.render('home',{data : resultInfo});
        }else{
            console.log('cache miss');
            const loginResult = await Registration.loginUser(loginInfo);
            if(loginResult == 0){
                res.send('Invalid creadentials');
            }else{
                const resultInfo = JSON.stringify(loginResult);   
                client.setex(`${loginInfo.email}`,3600,resultInfo)    
                res.render('home',{data : resultInfo});
            }
        }

    })
})

router.post('/userPost',(req, res)=>{
    
    const postMessage =  {
        post : req.body.postMessage
    }
    console.log(postMessage);
    Posts.uploadPost(postMessage);

    res.render('register');
})



router.post('/logout',(req, res)=>{
    res.redirect('login');
})


module.exports = router;