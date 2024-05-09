const express = require("express");
const router = express.Router();
const {signupController, loginController} = require("../controller/user")

router.post("/signup", signupController);
router.post("/login", loginController);
router.get("/login",(req,res) =>{
    res.send('login')
})

module.exports = router;