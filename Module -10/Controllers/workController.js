
const Work = require("../models/works")
const jwt = require('jsonwebtoken')
require('dotenv').config()


// Work creation functionalities
exports.create = async (req, res)=>{
  const email = req.headers['email']
  const payload = {
    email,
    ...req.body
  };

  await Work.create(payload).then(()=>{
    res.status(200).json({status:"Created successfully", data:payload})
  }).catch(err => {
    console.log(err);
    res.status(400).json({status:"Operation failed"})
  })
}


// Read Work information
exports.read = async(req, res)=>{
  const email = req.headers['email']
  const id = req.params['id']
  await Work.find({_id:id, email:email},{title:1, classNote:1, description:1, status:1}).then((data)=>{
      res.send(data)
  }).catch(err=>{
      res.send({status: "Failed"})
  })
}


// Update profile information
exports.update = async(req, res)=>{
  const email = req.headers['email']
  const id = req.params.id;
  const updateData = req.body

  await Work.updateOne({_id:id, email:email}, updateData).then((data)=>{
      res.json({status:"Update Complete", data:data})
  }).catch(err=>{
      res.send({status: "Failed"})
  })
}


// Delete Work Data
exports.delete = async(req, res)=>{
  const email = req.headers['email']
  const id = req.params.id;

  await Work.deleteOne({_id:id, email:email}).then(()=>{
      res.json({status:"Successfully deleted"})
  }).catch(err=>{
      res.send({status: "Failed"})
  })
}