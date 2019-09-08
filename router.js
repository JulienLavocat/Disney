const router = require("express").Router();

const controller = require("./controller");

router.get("/api/movies", controller.movies);
router.get("/api/watch/:id", controller.watch);

module.exports = router;