const router = require("express").Router();

const ShortUrlController = require("./controllers/ShortUrlController");

router.get("/", (req, res) => {
  res.send("nothing here");
});

router.get("/:id", ShortUrlController.redirect);

router.post("/url", ShortUrlController.store);

module.exports = router;
