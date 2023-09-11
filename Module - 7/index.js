
require('dotenv').config();
const app = require('./app.js');

PORT = process.env.RUNNING_PORT || 5500

// console.log(process.env.RUNNING_PORT);

app.listen(PORT, ()=>{
  console.log(`Running on port ${PORT}`);
})