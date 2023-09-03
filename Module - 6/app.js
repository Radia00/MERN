
const express = require('express');
const router = require('./src/Routes/api.js');


const app = new express();

app.use('/', router);
app.use(express.json())


module.exports = app;
