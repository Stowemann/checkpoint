const express = require("express");
const env = require ('dotenv').config()
const bodyparser = require('body-parser');
const path = require('path');
const userRoutes = require('./routes/web')
const connectdb = require('./database/dbconnect')

const port = process.env.PORT

const app = express('express');

// to avoid undefined res.body add to your content below 
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());




app.use(express.static('public'))

connectdb();
app.get('/',(req,res)=>{
  
  res.sendFile(path.join(__dirname, 'public','home.html'))
})
//app.use('/static', express.static(path.join(__dirname, 'public')

app.use('/register', userRoutes)

app.listen(port,function(){
  console.log('app is running at port:'+ port)
})


// app.get('/register',(req,res)=>{
//   res.sendFile(path.join(__dirname,'..','public','/register.html'))
// })


