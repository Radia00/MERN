const router = require('express').Router();
const Registration = require('../controller/RegistrationController');
// API Routing End Points
router.post('/register', Registration.register);
router.get('/getdata', Registration.getdata);
router.post('/update/:id', Registration.update);
router.get('/delete/:id', Registration.delete);
router.get('/singleStudent/:id', Registration.singleStudent);







module.exports = router