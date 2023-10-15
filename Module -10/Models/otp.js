const mongoose = require('mongoose')

const OTPModel = mongoose.Schema(
  {
    email:{type:String},
    otp:{type:String},
    status:{type:Number}
  },

  {timestamps:true}
);


const OTP = mongoose.model('otps', OTPModel);

module.exports = OTP;