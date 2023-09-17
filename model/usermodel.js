const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
      fullname:{
        type:String,
        required: true,
      },
      email:{
        type:String,
        required: true,
        unique: true
      },
      username:{
        type:String,
        required: true,
      },
      password:{
        type:String,
        required: true,
      },
      address:{
        type:String,
        required: true,
      },
      userstatus:{
        type:Number, default:0,
      }
  
  },
  { timestamp: true }

  
)

const Users = mongoose.model('Users', UserSchema);

module.exports=Users;