const express = require("express");
const router = express.Router();

// controller functions import section
const userController = require('../controllers/userController')
const adminController = require('../controllers/adminController')
const subAdminController = require('../controllers/subAdminController')
const postController = require('../controllers/postController')

router.get("/", (req, res)=>{
  res.end("This is the home page")
})
// Routing url
router.get("/user/create", userController.create)
router.get("/user/read", userController.read)
router.get("/user/update", userController.update)
router.get("/user/delete", userController.delete)

router.get("/admin/create", adminController.create)
router.get("/admin/read", adminController.read)
router.get("/admin/update", adminController.update)
router.get("/admin/delete", adminController.delete)

router.get("/sub-admin/create", subAdminController.create)
router.get("/sub-admin/read", subAdminController.read)
router.get("/sub-admin/update", subAdminController.update)
router.get("/sub-admin/delete", subAdminController.delete)

router.get("/post/create", postController.create)
router.get("/post/read", postController.read)
router.get("/post/update", postController.update)
router.get("/post/delete", postController.delete)


// // Response for undefined routing
// router.get('*', (req, res)=>{
//   res.status(404)
//   res.end(JSON.stringify({title:"Not found", message:"The page you are searching could not be found!"}))
// })

module.exports = router;
