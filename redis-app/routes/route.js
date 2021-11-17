const express = require('express');
const router = new express.Router();
const fetch = require('cross-fetch');
const redis = require('redis');


const client = redis.createClient()



const setData = async(req, res, next)=>{
    client.get('name',(err, data)=>{
        if(err){
            throw err;
        }else if(data){
            console.log('redis data');
            res.send(data);
        }else{
            next();
        }
    })
}


const fetchData = async(req, res)=>{
    
    console.log('fetching data...');
    const apiData = await fetch('https://newsapi.org/v2/everything?q=health&from=2021-10-27&sortBy=publishedAt&apiKey=65d1657a27174dbabb6ad8d40bd8fe3f');
    const data = await apiData.json();
    //console.log(data)
    const author = data.articles[0].title;
    client.setex ('name',60,JSON.stringify(author));
    res.render('index',{author : author});
     
}


router.get('', setData, fetchData);


module.exports = router;