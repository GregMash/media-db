const router = require("express").Router();
const bookRoutes = require("./books");
const movieRoutes = require("./movies");

// Book routes
router.use("/books", bookRoutes);
router.use("/movies", movieRoutes);

module.exports = router;
