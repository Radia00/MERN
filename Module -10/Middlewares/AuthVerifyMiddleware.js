const jwt = require('jsonwebtoken');
const Student = require('../models/students');
require('dotenv').config();

const isAuthenticated = async (req, res, next)=>{
  const token = req.headers.authorization

  if(token){
    try{
      const info = jwt.verify(token, process.env.JWT_SECRET);
      const user = await Student.findOne({email:info.email}).count()

      if(!user){
        res.status(401).json({status:"Unauthorized"})
      }
      req.headers.email = info.email;
  
      next()
    }
    catch(err){
      console.log(err)
    }
  }
  else{
    res.status(401).json({status:"Unauthorized"})
  }

}

module.exports = isAuthenticated;