const express = require('express');
const path = require('path');
const route = require('../routes/route');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/social-site');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
const public_path = path.join(__dirname, '../public');
app.use(express.static(public_path));
app.set('view engine','ejs');
app.use(route);





app.listen(port,()=>{
    console.log(`client running on port ${port}`);
})