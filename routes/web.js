const express = require('express');
const router = express.Router();
const path = require('path')

const User = require('../model/usermodel.js')

router.get('/register',(req,res)=>{
  // let pp = path.join(__dirname,'..','public/register.html')
  // res.send(pp)
 res.sendFile(path.join(__dirname,'..','public/register.html'))
})


router.post('/register', async (req, res)=>{
  console.log(req.body)

  let email = req.body.email;
  let fullname = req.body.fullname;
  let username = req.body.username;
  let password = req.body.password;
  let address = req.body.address;

  const user = await User.findOne({email});
  if(user){
    res.send('User Already Exists')
    //throw error
  }

  const obj = {
    email:email,
    fullname:fullname,
    username,
    password,
    address
  }

  let result = await User.create(obj)
  console.log(result)
  res.json(result).status(200)
  
// const newUser = await User.create({
//   fullname: req.body.name,
//   email: req.body.email,
//   username: req.body.username,
//   password: req.body.password,
//   address: req.body.address
// });
// console.log(newUser)


 // res.send("Name:"+req.body.fullname +''+'Email:'+ req.body.email)

})
  












module.exports = router;