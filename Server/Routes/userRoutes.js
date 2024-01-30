const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

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

// login routes

router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  console.log(user);
  if (!user) {
    return res.send({
      sucess: false,
      message: "user does not exit",
    });
  }

  const isvalidpassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isvalidpassword) {
    return res.send({
      sucess: false,
      message: "invalid password",
    });
  }

  const token = jwt.sign({ userid: user._id }, process.env.jwt_Secretkey, {
    expiresIn: "1d",
  });

  res.send({
    sucess: true,
    message: "You logied in crctly",
    data: token,
  });
});

// get by id user in fe
router.get("/get-currntuser", async (req, res) => {
  try {
    const user = await User.findById(req.body.userid).select("-password");
    res.send({
      success: true,
      message: "detail fetched ",
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "fail",
    });
  }
});

module.exports = router;
