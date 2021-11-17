const express = require('express');
const route = require('../routes/route');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.set('view engine', 'ejs');
app.use(route);

 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

