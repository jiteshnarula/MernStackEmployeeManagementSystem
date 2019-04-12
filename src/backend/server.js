 var express = require('express');
 var mongoose =require('mongoose');
 var router = require('./router/serverrouter');
 const bodyParser = require('body-parser');
 var cors = require('cors');
 var app = express(); 

 
 mongoose.connect('mongodb://localhost:27017/productManagement',{useNewUrlParser:true})

 mongoose.connection.on('connected',()=>{
     console.log("Conenction established at port number 27017");
 })

 app.use(cors());
 app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

 app.use('/api',router);

 const port = 4444;
 app.listen((port),()=>{
     console.log(`Hello from port number ${port}`)
 })