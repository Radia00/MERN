
const Student = require("../models/students")
const OPT = require('../models/otp')
const jwt = require('jsonwebtoken')
const OTP = require("../models/otp")
require('dotenv').config()


// Student creation functionalities
exports.studentRegister = async (req, res)=>{
  const payload = await req.body;

  await Student.create(payload).then(()=>{
    res.status(200).json({status:"successful", data:payload})
  }).catch(err => {
    console.log(err);
    res.status(400).json({status:"Operation failed"})
  })
}


// Student login functionalities
exports.studentLogin = async(req, res)=>{

  const email = req.body['email']
  const password = req.body['password']

  // Static method of Student Schema for logging in
  const result =  await Student.login(email, password)

  if(result === 404){
    res.status(404).json({status:"No Student Found"})
  }
  else if(result === 401){
    res.status(400).json({status:"Wrong credentials"})
  }
  else{
    const authKey = jwt.sign({email, password}, process.env.JWT_SECRET, { expiresIn: '30 days' })
    res.send({status:"success", token:authKey})
  }
}


// Read Student profile information
exports.studentProfile = async(req, res)=>{
  const email = req.headers['email']
  await Student.findOne({email:email},{firstName:1, lastName:1, roll:1, class:1, email:1, mobile:1, address:1}).then((data)=>{
      res.send(data)
  }).catch(err=>{
      res.send({status: "Failed"})
  })
}


// Update profile information
exports.updateProfile = async(req, res)=>{
  const email = req.headers['email']
  const updateData = req.body

  await Student.updateOne({email:email}, updateData).then((data)=>{
      res.json({status:"Update Complete", data:data})
  }).catch(err=>{
      res.send({status: "Failed"})
  })
}


// Delete Student Data
exports.deleteProfile = async(req, res)=>{
  const email = req.headers['email']

  await Student.deleteOne({email:email}).then(()=>{
      res.json({status:"Successfully deleted"})
  }).catch(err=>{
      res.send({status: "Failed"})
  })
}


// Reset Password functionality
exports.resetPassword = async (req, res)=>{

  const email = req.body['email'];
  const student = await Student.findOne({email}).count();

  if(student === 1){
    const code = Math.floor(Math.random() * (9999 - 1000 +1) + 1000)
    await OTP.create({email, otp:code, status:1})

    res.send(`Go to "http://localhost:5000/reset/${code}" path to verify otp`)
  }
  else{
    res.json({status:"User not found"})
  }

}


exports.verifyPassword = async (req, res)=>{
  const otp = req.params.otp;

  const { email, newPassword} = req.body;

  const match = await OTP.findOne({email:email, otp:otp});
  if(!match){
    res.json({status:"Does not match"})
  }

  await Student.updateOne({email:email}, {password:newPassword}).then(()=>{
    res.json({status: "Update successful"})
  }).catch(err =>{
    res.json({status:'Update failed'})
  })
}