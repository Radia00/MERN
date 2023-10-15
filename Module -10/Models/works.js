
const mongoose = require('mongoose')

const WorksModel = mongoose.Schema(
  {
    title: {type:String},
    classNote:{type:String},
    description:{type:String},
    status:{type:String},
    email:{type:String},
  },

  {timestamps:true}
);


const Work = mongoose.model('works', WorksModel);

module.exports = Work;











