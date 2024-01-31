const express = require("express");

//router object
const router = express.Router();

const authCtrl = require('../controllers/authController')

//routes
// REGISTER
router.post("/register", authCtrl.registerController);

//LOGIN
router.post("/login", authCtrl.loginController);


module.exports = router;
