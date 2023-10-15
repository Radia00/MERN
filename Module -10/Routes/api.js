const express = require('express')
const router = express.Router()

const studentsController = require('../controllers/studentController')
const worksController = require('../controllers/workController')
const isAuthenticated = require('../middlewares/AuthVerifyMiddleware')


router.post('/student/register', studentsController.studentRegister)
router.post('/student/login', studentsController.studentLogin)
router.get('/student/profile', isAuthenticated, studentsController.studentProfile)
router.post('/student/update', isAuthenticated, studentsController.updateProfile)
router.get('/student/delete',  isAuthenticated, studentsController.deleteProfile)
router.post('/reset', studentsController.resetPassword)
router.post('/reset/:otp', studentsController.verifyPassword)



router.post('/work/create', isAuthenticated, worksController.create)
router.get('/work/read/:id', isAuthenticated, worksController.read)
router.post('/work/update/:id', isAuthenticated, worksController.update)
router.get('/work/delete/:id',  isAuthenticated, worksController.delete)

module.exports = router;