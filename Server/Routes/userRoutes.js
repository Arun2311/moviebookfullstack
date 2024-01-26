const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const hashpawword = await bcrypt.hash(req.body.password, salt);

    req.body.password = hashpawword;

    console.log(req.body);
    
    const Userexist = await User.findOne({ email: req.body.email });

    if (Userexist) {
      return res.send({
        sucess: false,
        message: "User Alredy exist",
      });
    }

    const newuser = await new User(req.body);

    await newuser.save();

    res.send({
      sucess: true,
      message: "User Register Succesfully",
    });
  } catch (err) {
    console.log(err, "error arun");
  }
});

module.exports = router;
