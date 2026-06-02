// require express
const express = require("express");
//router
const router = express.Router();
//require controller
const loginController = require("../controllers/authAdmin.controller"); 
//init method request 
router.post("/login", loginController)
//export
module.exports = router;
