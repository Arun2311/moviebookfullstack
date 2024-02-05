const express = require("express");
const router = express.Router();
const Theatre = require("../model/theatreModel");

router.post("/add-theatre", async (req, res) => {
  try {
    const newtheare = new Theatre(req.body);
    await newtheare.save();

    res.send({
      success: true,
      message: "theatre added successfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: "theatre went  wrong",
    });
  }
});

router.post("/get-all-theatre-by-owner", async (req, res) => {
  try {
    const theatre = await Theatre.find({ owner: req.body.owner });
    console.log(theatre);
    res.send({
      success: true,
      message: "theatre fetched successfully",
      data: theatre,
    });
  } catch (err) {
    res.send({
      success: false,
      message: "theatre went  wrong",
    });
  }
});

module.exports = router;
