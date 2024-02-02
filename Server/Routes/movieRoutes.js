const express = require("express");
const router = express.Router();
const Movie = require("../model/movieModel");

router.post("/add-movie", async (req, res) => {
  try {
    const movie = await new Movie(req.body);
    await movie.save();

    res.send({
      success: true,
      message: "Movie added successfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: "Movie went something wrong",
    });

    console.log(err, "error arun");
  }
});
















module.exports = router;
