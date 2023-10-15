
require('dotenv').config();
const app = require('./app.js');
const mongoose = require('mongoose')

PORT = process.env.RUNNING_PORT || 5500

// console.log(process.env.RUNNING_PORT);

mongoose.connect(process.env.DATABASE)
  .then(()=>{
    console.log("Database is connected");
    app.listen(PORT, ()=>{
      console.log(`Running on port ${PORT}`);
    })
  })
  .catch((err)=>{
    console.log("cannot connect to the database", err);
  });
