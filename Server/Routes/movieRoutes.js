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

router.get("/get-all-movies", async (req, res) => {
  try {
    const movie = await Movie.find();

    res.send({
      success: true,
      message: "Movie fetched successfully",
      data: movie,
    });
  } catch (err) {
    res.send({
      success: false,
      message: "Movie went something wrong",
    });

    console.log(err, "error arun");
  }
});

router.post("/delete-movie", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.body.movieId);

    res.send({
      success: true,
      message: "Movie deleted successfully",
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
