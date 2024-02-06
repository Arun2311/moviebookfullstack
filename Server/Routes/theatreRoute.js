const express = require("express");
const router = express.Router();
const Theatre = require("../model/theatreModel");
const Show = require("../model/showModel");


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

router.post("/update-theatre", async (req, res) => {
  try {
    await Theatre.findByIdAndUpdate(req.body.theatreId, req.body);
    res.send({
      success: true,
      message: "theatre updated successfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: "theatre went  wrong",
    });
  }
});

router.get("/get-all-theatre", async (req, res) => {
  try {
    const theatre = await Theatre.find().populate("owner");

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


router.post("/get-all-shows-by-theatre", async (req, res) => {
  try {
    const shows = await Show.find({theatre:req.body.theatreId})

    res.send({
      success: true,
      message: "theatre fetched successfully",
      data: shows,
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



router.post("/add-shows", async (req, res) => {
  try {
    const newshow = new Show(req.body);
    await newshow.save();

    res.send({
      success: true,
      message: "shows added successfully",
    });

  } catch (err) {

    console.log(err);
    res.send({
      success: false,
      message: "shows went  wrong",
    });
  }
});





module.exports = router;
