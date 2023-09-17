const mongoose = require('mongoose')
const dburl = process.env.MONGO_URL

const connectdb = async ()=>{
  try{
    const dbconnect = await mongoose.connect(dburl);
    console.log('database connected'+ dbconnect.connection.host)
  }catch (error) {
    console.log('Error Occur'+ error.message)
  }
}



module.exports = connectdb