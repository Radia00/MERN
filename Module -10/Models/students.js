const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const StudentsModel = mongoose.Schema(
  {
    email: {type:String},
    firstName:{type:String},
    lastName:{type:String},
    mobile:{type:String},
    password:{type:String},
    address:{type:String},
    roll:{type:String},
    class:{type:String}
  },

  {timestamps:true}
);

// Static method for Students Login
StudentsModel.statics.login = async (email, password) =>{
  const student = await Student.findOne({email});
  if(!student){
    return 404;
  }
  const match = await bcrypt.compare(password, student.password);

  if(!match){
    return 401;
  }
  return student;
}

// Method to hash password before saving to database
StudentsModel.pre('save', async function(next){
  const student = this;

  if (this.isModified('password') || this.isNew()) {
		student.password = await bcrypt.hash(student.password, 6);
	}
	next();
})


const Student = mongoose.model('students', StudentsModel);

module.exports = Student;











