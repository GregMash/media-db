const router = require("express").Router();
const vidGamesController = require("../../controllers/vidGamesController");

// Matches with "/api/movies"
router.route("/")
  .get(vidGamesController.findAll)
  .post(vidGamesController.create);

// Matches with "/api/movies/search"
router.route("/search")
  .post(vidGamesController.igdbSearch)

// Matches with "/api/movies/:id"
router.route("/:id")
  .delete(vidGamesController.remove);

module.exports = router;