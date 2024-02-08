const express = require("express");
const router = express.Router();
const Movie = require("../model/movieModel");
const authmiddleware = require("../middleware/authmiddleware");

router.post("/add-movie", authmiddleware, async (req, res) => {
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

router.get("/get-all-movies", authmiddleware, async (req, res) => {
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

router.post("/edit-movie", authmiddleware, async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.body.movieId, req.body);

    res.send({
      success: true,
      message: "Movie updated successfully",
    });
  } catch (err) {
    res.send({
      success: false,
      message: "Movie went something wrong",
    });

    console.log(err, "error arun");
  }
});

router.post("/delete-movie", authmiddleware, async (req, res) => {
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

router.get("/get-movie-by-id/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    res.send({
      success: true,
      message: "Movie deleted successfully",
      data: movie,
    });
  } catch (err) {
    res.send({
      success: false,
      message: "Movie went something wrong",
    });
    console.log(err);
  }
});

module.exports = router;
