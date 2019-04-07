const router = require("express").Router();
const bookRoutes = require("./books");
const movieRoutes = require("./movies");
const vidGameRoutes = require("./videoGames");

// routes
router.use("/books", bookRoutes);
router.use("/movies", movieRoutes);
router.use("/videoGames", vidGameRoutes);

module.exports = router;
