const router = require("express").Router();

const controller = require("./controller");

router.get("/api/movies", controller.movies);
router.get("/api/watch", controller.watch);

module.exports = router;